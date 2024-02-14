import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-512.png" alt="bubble component" />
                </div>
            </div>
            <div className={'chat-bubble text-white bg-blue-500 '}>
                Hi what's up?
            </div>
            <div className={'chat-footer opacity-50 text-xs gap-1 items-center '}>
                2:42
            </div>
        </div>
    )
}

export default Message
