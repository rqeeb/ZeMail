import { useState, useMemo, useEffect } from "react";
import "./styles.css";

//return random mail
function genLocalMail() {
  const user = Math.random().toString(36).slice(2, 10);
  return "${user}@mails.zepmail.xyz";
}

function App() {
  // States
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [Email, setEmail] = useState(() => genLocalMail());
  const [messages, setMessages] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const hasMsgs = useMemo(() => messages.length > 0, [messages]);

  async function copyMail() {
    await navigator.clipboard.writeText(Email);
  }
  function refreshMail() {
    setEmail(genLocalMail());
    setMessages([]);
    setActive(null);
  }

  return (
    <div className="page">
      {/* TopBar - Header */}
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <div>
            <div className="brandTitle">ZepMail</div>
            <div className="brandSub">temporary inbox</div>
          </div>
        </div>

        <div className="topbarRight">
          <button
            className="pill"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
          <button className="pill primary" onClick={refreshMail}>
            New address cc
          </button>
        </div>
      </header>

      
      <main className="container">
        <section className="heroCard">
          <div className="heroTitle">Your Temporary Email Address</div>

          <div className="emailRow">
            <div className="emailBox">
              <span className="mono">{email}</span>
            </div>

            <button className="iconBtn" title="Copy" onClick={copyEmail}>
              Copy
            </button>
            <button className="iconBtn" title="Refresh" onClick={refreshEmail}>
              Refresh
            </button>
          </div>

    </div>
  );
}

export default App;
