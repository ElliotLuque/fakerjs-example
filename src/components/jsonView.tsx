import React from 'react'
import { User } from '../types/user'

const JsonView: React.FC<{ userData: User }> = ({ userData }) => {
  return (
    <div className='rounded-2xl border-[0.0875rem] border-gray-200 p-10 font-medium text-gray-900 shadow-md dark:border-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:shadow-none'>
      <pre className='text-lg'>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  )
}

export default React.memo(JsonView)
