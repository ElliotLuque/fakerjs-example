import React from 'react'
import { User } from '../types/user'

const JsonView: React.FC<{ userData: User }> = ({
  userData = {
    id: 'ecf6891a-7b08-4753-ba0f-37438184147c',
    name: 'Ursula',
    lastname: 'Reinger',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg',
    birthDate: '1975-07-21T10:46:35.377Z',
    email: 'Ursula4@hotmail.com',
    phoneNumber: '+34 629 307 328',
    favouriteMusicGenre: 'Rock',
    originCountry: 'Turks and Caicos Islands',
    address: {
      street: '6457 Cielo Mews',
      zipcode: '91178-7182',
      country: 'Haiti',
    },
  },
}) => {
  return (
    <div className=' dark:bg-gray-800 p-10 text-gray-900 dark:text-gray-400 rounded-2xl font-medium dark:border-2 dark:border-gray-700 shadow-md dark:shadow-none border-[0.0875rem] border-gray-200'>
      <pre className='text-lg'>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  )
}

export default React.memo(JsonView)
