import { useEffect, useRef, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
// import TopBar from "./components/TopBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.targer)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar ref={sidebarRef} isOpen={isOpen} handleToggle={handleToggle} />
      {/* <TopBar /> */}
      <Dashboard isOpen={isOpen} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
