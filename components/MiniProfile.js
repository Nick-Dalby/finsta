/* eslint-disable @next/next/no-img-element */
const MiniProfile = () => {
  return (
    <div className="mt-10 ml-8 flex items-center justify-between ">
      <img
        src="/avatar.png"
        alt="avatar"
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">nico_diablo</h2>
        <h3 className="text-sm text-gray-400">Welcome to Finsta</h3>
      </div>
      <button className="text-sm font-semibold text-indigo-500">
        Sign out
      </button>
    </div>
  )
}
export default MiniProfile
