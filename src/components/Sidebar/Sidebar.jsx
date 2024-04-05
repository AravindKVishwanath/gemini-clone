import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context';

function Sidebar() {

  const [extended,setExtended] = useState(false);
  
  const toggleMenu=()=>{
    setExtended(!extended);
  }
  const {onSend,previousPrompt,setRecentPrompt,newChat} = useContext(Context)
  const loadPrompt  = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSend(prompt)
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <img  onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} className='menu'/>
        <div onClick={()=>newChat()} className='new-chat'>
          <img src={assets.plus_icon}/>
          {extended?<p>New Chat</p>:null}
        </div>
        {extended?
        <div className='recent'>
          <p className='recent-title'>Recent</p>
          {previousPrompt.map((item,index)=>{
            return(
              <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                <img  src={assets.message_icon}/>
                <p>{item} ...</p>
              </div>
            )
          })}
          
        </div>:
        null
        }
      
      </div>
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon}/>
          {extended?<p>Help</p>:null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon}/>
          {extended?<p>Activity</p>:null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon}/>
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar