import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

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
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-md border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-indigo-600">
      {session && (
        <Story img={session.user.image} username={session.user.username} plus='true'/>
        )}

      {suggestions.map((user) => (
        <Story key={user.userId} img={user.avatar} username={user.username} />
      ))}
    </div>
  )
}
export default Stories
