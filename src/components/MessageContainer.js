import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase';
import Message from './Message'

const MessageContainer = () => {
  const [ messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      doc.exists() && setMessages(doc.data().messages);
  })
  return ()=>{
      unsub();
  }
  },[data.chatId])
  return (
    <div style={{width:'100%',height:'80vh',background:'#222E35',color:'white',overflowY:'scroll'}}>
        
        {messages.map((m)=>(
          <Message message ={m} key ={m.id}/>
        ))}
       
    </div>
  )
}

export default MessageContainer