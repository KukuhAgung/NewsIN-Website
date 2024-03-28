import { useState } from "react";
import Navbar from "./fragments/Navbar";
import NavMob from "./fragments/NavMob.jsx";
import Hero from "./fragments/Hero.jsx";
import Categories from "./fragments/Categories.jsx";
import PopularVideos from "./fragments/Videos.jsx"
function App() {
  const [navbar, setNavbar] = useState(false);
  const navbartrue = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <main className="relative overflow-x-hidden md:mx-4">
        <nav>
          <Navbar SetNav={navbartrue} NavStatus={navbar} />
          {navbar ? <NavMob Navtransform={navbar} /> : null}
        </nav>
        <section className="flex flex-col gap-2 md:flex md:flex-row">
          <main className="flex flex-col gap-y-10 md:w-[70%]">
            <Hero />
            <Categories />
            <PopularVideos/>
          </main>
          <aside className="flex flex-col gap-y-6 md:w-[30%]">asf</aside>
        </section>
      </main>
    </>
  );
}

export default App;
