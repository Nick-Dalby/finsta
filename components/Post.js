/* eslint-disable @next/next/no-img-element */
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'

const Post = ({ id, username, avatar, img, caption }) => {
  return (
    <div className="my-7 rounded-md border bg-white">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={avatar}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* image */}
      <img src={img} alt="" className="w-full object-cover" />

      {/* buttons */}
      <div className='flex justify-between px-4 pt-4'>

      <div className='flex space-x-4'>
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
      </div>
      <BookmarkIcon className='btn' />
      </div>

      {/* caption */}
      <div>
        <p className='p-5 truncate'><span className='font-bold mr-1'>{username} </span>{caption}</p>
      </div>

      {/* comments */}

      {/* input */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7'/>
        <input type="text" placeholder='add a comment...' className='border-none flex-1 focus:ring-0 outline-none' />
        <button className='font-semibold text-indigo-600'>Post</button>
      </form>
    </div>
  )
}
export default Post
