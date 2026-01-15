import { useState , useEffect} from 'react';
import ChatInput from './components/ChatInput'  
import ChatMessages from './components/ChatMessages'
import { chatbot } from 'supersimpledev';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("'messages")) || [{
    message: 'Hello! I am your friendly chatbot. How can I assist you today?',
    sender: 'sender',
    id: 'id1',
  }]);
   useEffect(()=>{
 
     chatbot.addResponses({
      'Goodbye' : 'Goodbye. Have a great day!',
      'give me unique id' : function (){
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}
        `;
      },
      'Who created you?':' I am a sample AI created for demo purposes😊',
      'What is React?':'React is a popular JavaScript library for building user interfaces, particularly single-page applications, developed and maintained by Facebook.',
     })
         localStorage.setItem('messages', JSON.stringify(chatMessages));
  },[ChatMessages])

    

  return (
    <div className='app-container'>
      <ChatMessages
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
     <ChatInput 
        chatMessages= {chatMessages}
        setChatMessages ={setChatMessages}
      />
    </div>
  )
}

export default App
