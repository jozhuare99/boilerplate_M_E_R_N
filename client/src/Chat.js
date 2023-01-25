import React,{useEffect, useState} from 'react';
import ScrollToBottom from  'react-scroll-to-bottom'

export default function Chat({socket, username, room}) {
  const [currentMessage, setCurrentMessage]  = useState("")
  const [messageList, setMessageList] = useState([])

     const sendMessage =  async ()=>{
        const chatTime = new Date(Date.now())
        if(currentMessage !== ""){
            const messageData = {
                room: room ,
                username: username,
                message: currentMessage, 
                time: chatTime.getHours()+":"+ chatTime.getMinutes()
            }
            await socket.emit("send_message", messageData)
            setMessageList((list)=> [...list, messageData]);
            console.log(setMessageList);
            setCurrentMessage("");
        }
     }
     useEffect(()=>{
        socket.on('received_message',(data)=>{
          console.log(data);
          // console.log(setMessageList);
            // setMessageList((list)=>[list, data])
        })
     },[socket])
  return (
    <div className='chatWindow'>
      <div className="chat-header">
        <p>LiveChat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className='message-container'>
            {messageList.map((messageContent)=>{
                return(
                <div key={messageContent.time} className="message"
                 id={username === messageContent.username ? "you": "other"}>
             
                        <div className='message-content'>
                            <p>{messageContent.message}</p>
                        </div>
                        <div className='message-meta'>
                            <p id='time'>{messageContent.time}</p>
                            <p id='author'>{messageContent.username}</p>
                        </div>
                    </div>
               
                )
            })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer"></div>
      <input type="text" placeholder ="hey .." onChange={(event)=>{
        setCurrentMessage(event.target.value)
      }}
      onKeyPress={(event)=>{
        event.key === "Enter" && sendMessage();
      }}
      />
      <button onClick={sendMessage}>&#9658;</button>
    </div>
  )
}
