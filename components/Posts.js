import Post from "./Post"

const posts = [
  {
    id: 123,
    username: 'nico_diablo',
    avatar: '/avatar.png',
    img: '/veggies.jpeg',
    caption: 'yum!'
  },
  {
    id: 321,
    username: 'nico_diablo',
    avatar: '/avatar.png',
    img: '/veggies.jpeg',
    caption: 'yum!'
  },
  {
    id: 666,
    username: 'nico_diablo',
    avatar: '/avatar.png',
    img: '/veggies.jpeg',
    caption: 'yum!'
  },
]

const Posts = () => {
  return <div>
    {posts.map(post => (<Post key={post.id} id={post.id} username={post.username} avatar={post.avatar} img={post.img} caption={post.caption}/>))}
  </div>
}
export default Posts
