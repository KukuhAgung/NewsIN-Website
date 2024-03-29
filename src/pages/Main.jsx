import React from "react";
import Hero from "../fragments/Hero.jsx";
import Categories from "../fragments/Categories.jsx";
import PopularVideos from "../fragments/Videos.jsx";
import Global from "../fragments/Global.jsx";
import Other from "../fragments/Other.jsx";
import Footer from "../fragments/Footer.jsx";

function Main() {
  return (
    <section className="flex flex-col gap-2 md:flex md:flex-row">
      <main className="flex flex-col gap-y-10 md:w-[70%]">
        <Hero />
        <Categories />
        <PopularVideos />
        <Global />
        <Other />
        <Footer />
      </main>
      <aside className="flex-col gap-y-6 md:w-[30%] hidden">asf</aside>
    </section>
  );
}

export default Main;
