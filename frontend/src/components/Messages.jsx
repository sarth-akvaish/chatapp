import React, { useDebugValue, useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../hooks/useGetMessage'
import MessageSkeleton from './MessageSkeleton';
import useListenMessage from '../hooks/useListenMessage';

const Messages = () => {

  const { messages, loading } = useGetMessage();
  useListenMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center  text-white'>Send a message to start the Conversation</p>
      )}
    </div>
  )
}

export default Messages
