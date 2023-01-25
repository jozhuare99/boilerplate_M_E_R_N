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
            setCurrentMessage("");
        }
     }
     useEffect(()=>{
        socket.on('received_message',(data)=>{
            setMessageList((list)=>{return [...list, data]})
        })
     },[socket])
  return (
    <div className='chatWindow'>
      <div className="chat-header">
        <p>LiveChat</p>
      </div>
      <div className="chat-body">
        
      </div>
      <div className="chat-footer"></div>
      <input type="text" placeholder ="hey .." onChange={(event)=>{
        setCurrentMessage(event.target.value)
      }}/>
      <button onClick={sendMessage}>&#9658;</button>
    </div>
  )
}
