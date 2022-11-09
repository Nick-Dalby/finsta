/* eslint-disable @next/next/no-img-element */
const Story = ({ img, username }) => {
  return (
    <div className="">
      <img
        className="h-14 w-14 rounded-full border-2 border-indigo-600 p-[1.5px] object-contain cursor-pointer hover:scale-105 transition-transform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}
export default Story
