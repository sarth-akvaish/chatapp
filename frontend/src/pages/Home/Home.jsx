import React from 'react'
import SideBar from '../../components/SideBar'
import MessageContainer from '../../components/MessageContainer'

const Home = () => {
    return (
        <div className='flex h-[550px] w-full sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default Home
