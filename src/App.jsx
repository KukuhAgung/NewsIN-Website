import { useState } from "react";
import Button from "./components/Button/index.jsx";
import Navbar from "./fragments/Navbar";
import NavMob from "./fragments/NavMob.jsx";
function App() {
  const [navbar, setNavbar] = useState(false);
  const navbartrue = () => {
    console.log("test");
    setNavbar(!navbar);
  };
  return (
    <>
      <main className="relative mx-[1rem] overflow-x-hidden">
        <nav>
          <Navbar />
          <NavMob Navbar={navbartrue} />
        </nav>
      </main>
    </>
  );
}

export default App;
