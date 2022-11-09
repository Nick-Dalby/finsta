import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
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
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-md overflow-x-scroll scrollbar-thin scrollbar-thumb-indigo-600'>
      {suggestions.map((user) => (
        <Story key={user.userId} img={user.avatar} username={user.username}/>
      ))}

    </div>
  )
}
export default Stories
