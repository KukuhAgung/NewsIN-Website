import { useState } from "react";
import Navbar from "./fragments/Navbar";
import Main from "./pages/Main.jsx";
import Copyright from "./components/Copyright/index.jsx";

function App() {
  return (
    <>
      <main className="relative overflow-x-hidden">
        <Navbar />
        <Main />
        <Copyright />
      </main>
    </>
  );
}

export default App;
