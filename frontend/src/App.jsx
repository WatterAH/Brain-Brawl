import React from "react";

export const App = () => {
  return (
    <div className="bg-purple h-screen flex justify-center items-center">
      <section className="flex flex-col items-center">
        <h1 className="text-5xl font-irish text-white">
          Bienvenido a Brain Brawl
        </h1>
        <form
          className="flex flex-col items-center justify-center bg-peach w-full max-w-xs"
          action=""
        >
          <input type="text" placeholder="Apodo" />
          <button className="bg-pink">Todo Listo</button>
        </form>
      </section>
    </div>
  );
};
