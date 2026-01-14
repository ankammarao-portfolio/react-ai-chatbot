# 🤖 React Chatbot Project

A **sample React chatbot application** built to demonstrate a simple user–AI conversation flow. This project uses `async/await`, modular React components, and predefined responses to simulate chatbot behavior. It is ideal for **learning React**, **practicing state management**.

---

## ✨ Features

* 💬 User and AI chat conversation
* ⏳ Simulated AI responses using async/await
* 💬 Welcoming message with "How can I help you?"
* 📅 Responds with today’s date on request
* 🪙 Simulates a coin toss (Heads or Tails)
* ⏳ Simulated AI responses using async/await
* 🧩 Modular and reusable React components
* 🧪 No backend or external API required

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **CSS**

---

## 📂 Project Structure

```
react-chatbot-demo/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx
│   │   ├── ChatInput.css
│   │   ├── ChatMessage.jsx
│   │   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx
│   │   └── ChatMessages.css
│   ├── services/
│   │   └── Chatbot.js
│   ├── assets/
│   │   ├── profile-img.png
│   │   └── robot.png
│   ├── App.jsx
│   └── main.jsx
├── screenshots/
│   ├── chat-ui.png
│   │   
│   └── chat-conversation.png
├── package.json
└── README.md
```

---

## 🧠 How the Chatbot Works

1. User enters a message in the input field
2. The message is added to the chat list as a user message
3. A mock chatbot service processes the message
4. The AI sends a response after a short delay
5. Messages are displayed using reusable UI components

This approach simulates real chatbot behavior without using any external services.

---

## 📸 Screenshots

### 💬 Chat Interface

![Chat Interface]<img width="761" height="585" alt="image" src="https://github.com/user-attachments/assets/4e5e4e0d-0cf9-4f04-8767-dbc73e8871c0" />


### 🤖 User and AI Conversation

![User and AI Conversation]<img width="747" height="558" alt="image" src="https://github.com/user-attachments/assets/99bb5521-1879-4e14-a813-5fb7a4ed09af" />


---

🔗 **Live Demo:** [View Application](https://ankammarao-portfolio.github.io/react-ai-chatbot/)

---

## 🧪 Sample Conversation
**User:** Hi
**AI:** Hello! 👋 How can I help you today?

**User:** What is today’s date?
**AI:** Today’s date is September 26, 2026.

**User:** Toss a coin
**AI:** Sure! You got tails

**User:** What is React?
**AI:** React is a popular JavaScript library for building user interfaces, particularly single-page applications, developed and maintained by Facebook.

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/react-chatbot-demo.git
```

2. Navigate to the project folder

```bash
cd react-chatbot-demo
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the application in your browser

```
http://localhost:5173
```

---

## 🎯 Use Cases

* Learning React component structure and reusable UI patterns
* Understanding **lifting state up** between parent and child components
* Managing shared state across multiple components (ChatInput, ChatMessages, ChatMessage)
* Practicing async/await handling in UI interactions
* Demonstrating clean React state management and data flow

---

## 🚀 Future Enhancements

* Integration with a real AI API
* Typing indicator animation
* Message timestamps
* Improved UI and responsiveness
* Chat history persistence

---

## 👨‍💻 Author

**Mogalipuvvu Ankammarao**
React.js Developer

---

⭐ If you like this project, don’t forget to give it a star on GitHub!
