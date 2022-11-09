/* eslint-disable @next/next/no-img-element */
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>

      {suggestions.map((user) => (
        <div
          key={user.userId}
          className="mt-3 flex items-center justify-between"
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className='flex-1 ml-4'>
            <h2 className="text-sm font-semibold">{user.username}</h2>
            <h3 className='text-xs text-gray-400'>New to Finsta</h3>
          </div>
          <button className='text-indigo-500 text-sm font-semibold'>Follow</button>
        </div>
      ))}
    </div>
  )
}
export default Suggestions
