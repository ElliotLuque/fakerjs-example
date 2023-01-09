import JsonView from './components/jsonView'
import { faker } from '@faker-js/faker'
import { User } from './types/user'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { useLocalStorage } from 'usehooks-ts'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid/'

function App() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('dark', true)
  const [value, copy] = useCopyToClipboard()
  const [randomUser, setRandomUser] = useState<User>()

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

  if (isDarkTheme) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className='flex flex-col justify-center w-screen h-screen'>
      <header className='flex justify-end w-full pt-8 px-16 bg-white dark:bg-gray-900'>
        {isDarkTheme ? (
          <SunIcon
            className='h-10 w-10 text-white m-4 cursor-pointer'
            onClick={() => setDarkTheme(false)}
          />
        ) : (
          <MoonIcon
            className='h-10 w-10 text-gray-700 m-4 cursor-pointer'
            onClick={() => setDarkTheme(true)}
          />
        )}
      </header>
      <main className='flex justify-center w-full h-full items-center bg-white dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-start md: gap-16 lg:gap-20 xl:gap-32'>
          <h1 className='text-6xl text-gray-900 dark:text-white font-extrabold leading-none tracking-tight'>
            User generator with Faker.js
          </h1>
          <div className='flex flex-col items-center gap-16'>
            <JsonView userData={randomUser as User} />
            <div className='flex items-center gap-8'>
              <button
                className='py-4 px-5 mr-2 mb-2 text-md font-medium focus:outline-none rounded-lg border border-gray-300 text-gray-600 dark:border-gray-600 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
                onClick={() => setRandomUser(generateRandomUserJson())}
              >
                Generate new user
              </button>
              <button
                className='py-4 px-5 mr-2 mb-2 text-md font-medium focus:outline-none rounded-lg border border-green-600 focus:ring-green-700 bg-green-500 text-white hover:text-gray-300 hover:bg-green-700'
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
