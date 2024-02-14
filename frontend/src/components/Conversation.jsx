import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar ">
          <div className='w-12 rounded-full '>
            <img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-512.png" alt="user avatar" />
          </div>
        </div>
        <div className='flex flex-col flex-1 '>
          <div className='flex gap-3 justify-between'>
            <p className='text-bold text-gray-200'>John Doe</p>
            <span className='text-xl'>😀</span>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation
