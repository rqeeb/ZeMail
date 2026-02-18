import { useState } from "react";
import { useEffect } from "react";

import "./styles.css";

//return random mail
function genLocalMail() {
  const user = Math.random().toString(36).slice(2, 10);
  return "{user}@mails.zepmail.xyz";
}

function App() {
  //States
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [mail, setMail] = useState(() => genLocalMail);
  const [messages, setMessages] = useState([]);
  const [active, setActive] = useState(null);


  return <div>Hey!</div>;
}

export default App;
