/* eslint-disable @next/next/no-img-element */
import { PlusCircleIcon } from '@heroicons/react/solid'

const Story = ({ img, username, plus }) => {
  return (
    <div >
      <div className="relative cursor-pointer">

      <img
        className={`h-14 w-14 rounded-full p-[1.5px] object-contain  hover:scale-105 transition-transform duration-200 ease-out ${!plus ? 'border-2 border-indigo-600' : ''}`}
        src={img}
        alt=""
        />
      {plus && (
        <div className='bg-indigo-600 rounded-full text-white w-5 h-5 absolute bottom-0 right-0 flex justify-center items-center '>
        <PlusCircleIcon className=''/>
      </div>
      )}
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}
export default Story
