import Stories from './Stories'
import Posts from './Posts'

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:grid-cols-3 xl:max-w-6xl mx-auto overflow-x-scroll scrollbar-thin">
      <section className='col-span-2 w-full'>
        
        <Stories />
        <Posts />
      </section>

      <section>
        {/* mini profile */}
        {/* suggestions */}
      </section>
    </main>
  )
}
export default Feed
