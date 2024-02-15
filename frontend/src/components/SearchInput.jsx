import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast'

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('Search must be more than 3 characters')
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error('No such user found');
        }
    }


    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search..' value={search} onChange={(e) => setSearch(e.target.value)} className='input focus:outline-none input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <BsSearch className='w-5 h-5 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput
