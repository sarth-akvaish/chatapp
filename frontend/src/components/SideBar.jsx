import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
    return (
        <div className='w-[150px] sm:w-[300px] border-r border-slate-500  p-2 md:p-4 flex flex-col'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default SideBar
