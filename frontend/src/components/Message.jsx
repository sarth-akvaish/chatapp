import { useAuthContext } from '../context/AuthContext'
import useConversation from '../zustand/useConversation';

const Message = ({ message }) => {

    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-700';

    function formatTime(createdAt) {
        const date = new Date(createdAt);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }


    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-8 sm:w-10 rounded-full'>
                    <img src={profilePic} alt="bubble component" />
                </div>
            </div>
            <div className={`chat-bubble text-[12px] sm:text-[16px] text-white ${bubbleBgColor}`}>
                {message.message}
            </div>
            <div className={'chat-footer opacity-50 text-xs gap-1 items-center text-white '}>
                {formatTime(message.createdAt)}
            </div>
        </div>
    )
}

export default Message
