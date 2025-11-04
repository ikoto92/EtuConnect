import { useState } from 'react'
import User from "./components/User";
import './App.css'

function App() {
  const [users, setUsers] = useState ([
    {
      id : 1,
      name: "Harish Balakirishnan",
      email: "harish@gmail.com",
      image : "",
      posts : [
        {
          type : "message", content : "",
          type : "photo", content : ""
        }
      ]
    },
    {
      id :2,
      name: "Aristide Romeo",
      email: "aristide@gmail.com",
      image : "",
      posts : [
        {
          type : "message", content : "",
          type : "photo", content : ""
        }
      ]
    }
  ])


}

export default App
