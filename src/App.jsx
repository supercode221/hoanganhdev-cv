import { useState } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import HireMe from "./components/HireMe.jsx";
import Skills from "./components/Skills.jsx";
import TimeLine from "./components/TimeLine.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
    </>
  );
}

export default App;
