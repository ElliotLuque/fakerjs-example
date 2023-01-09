import JsonView from './components/jsonView'
import { faker } from '@faker-js/faker'
import { User } from './types/user'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { useLocalStorage } from 'usehooks-ts'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid/'

const generateRandomUserJson = () => {
  const name = faker.name.firstName()
  const lastname = faker.name.lastName()

  const user: User = {
    id: faker.datatype.uuid(),
    name: name,
    lastname: lastname,
    avatar: faker.image.avatar(),
    birthDate: faker.date.birthdate(),
    email: faker.internet.email(name, lastname),
    phoneNumber: faker.phone.number('+34 6## ### ###'),
    favouriteMusicGenre: faker.music.genre(),
    originCountry: faker.address.country(),
    address: {
      street: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  }

  return user
}

function App() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('dark', true)
  const [randomUser, setRandomUser] = useState<User>(generateRandomUserJson())
  const [value, copy] = useCopyToClipboard()

  if (isDarkTheme) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className='flex h-screen w-screen flex-col justify-center bg-white dark:bg-gray-900'>
      <header className='flex w-full justify-end px-16 pt-8'>
        {isDarkTheme ? (
          <SunIcon
            className='m-4 h-10 w-10 cursor-pointer text-white'
            onClick={() => setDarkTheme(false)}
          />
        ) : (
          <MoonIcon
            className='m-4 h-10 w-10 cursor-pointer text-gray-700'
            onClick={() => setDarkTheme(true)}
          />
        )}
      </header>
      <main className='flex h-full w-full items-center justify-center'>
        <div className='md: flex flex-col items-center justify-start gap-16 lg:gap-20 xl:gap-32'>
          <h1 className='text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white'>
            User generator with Faker.js
          </h1>
          <div className='flex flex-col items-center gap-16'>
            <JsonView userData={randomUser as User} />
            <div className='flex items-center gap-8'>
              <button
                className='text-md mr-2 mb-2 rounded-lg border border-gray-300 py-4 px-5 font-medium text-gray-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                onClick={() => setRandomUser(generateRandomUserJson())}
              >
                Generate new user
              </button>
              <button
                className='text-md mr-2 mb-2 rounded-lg border border-green-600 bg-green-500 py-4 px-5 font-medium text-white hover:bg-green-700 hover:text-gray-300 focus:outline-none focus:ring-green-700'
                onClick={() => copy(JSON.stringify(randomUser))}
              >
                Copy to clipboard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
