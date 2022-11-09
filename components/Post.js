/* eslint-disable @next/next/no-img-element */
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const Post = ({ id, username, avatar, img, caption }) => {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header */}
      <div className='flex items-center p-5'>
        <img
          src={avatar}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* image */}
      <img src={img} alt="" className='object-cover w-full'/>

      {/* buttons */}

      {/* caption */}

      {/* comments */}

      {/* input */}
    </div>
  )
}
export default Post
