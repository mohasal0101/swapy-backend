import Login from './components/Login';
import Chat from './components/Chat';
import './App.css';
/* import io from "socket.io-client";
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* const socket = io.connect("http://localhost:3001");
 */

function App() {
 /*  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
 */
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
