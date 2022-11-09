import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 overflow-x-scroll scrollbar-thin sm:max-w-xl sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
      <section className="col-span-2 w-full">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:col-span-1 lg:inline-grid">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
export default Feed
