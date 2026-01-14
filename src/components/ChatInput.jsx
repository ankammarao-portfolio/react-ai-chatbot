import { useState } from "react"
import { Chatbot} from "supersimpledev";
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'

function ChatInput({chatMessages,setChatMessages}) {
  const [inputText,setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

    async function saveMesage(){
          setInputText('');

          const newChatMessage = [...chatMessages,
            {
              message:inputText,
              sender:'user',
              id:crypto.randomUUID()
            }
          ]

          setChatMessages(newChatMessage);

          setChatMessages([...newChatMessage,
            {
              message: <img 
                src={LoadingSpinner} 
                className="loading-spinner"
              />,
              sender:'robot',
              id:crypto.randomUUID()

            }
          ])

          const response = await Chatbot.getResponseAsync(inputText);

            setChatMessages([...newChatMessage,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID()

            }
          ])
  
          setInputText('');
        }

function clearMessage(){
  setChatMessages([]);
}
  return (
    <div                     className="chat-input-container">     
      <input 
        type="text" 
        placeholder="Send a message to Chatbot"   
        className="chat-input"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button 
        onClick={saveMesage}
        className="send-button"
        >Send</button>

      <button 
        onClick={clearMessage}
        className="clear-button"
        >Clear</button>
    </div>
  )
}

export default ChatInput