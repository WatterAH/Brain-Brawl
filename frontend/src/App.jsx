import React from "react";

export const App = () => {
  return (
    <div className="bg-purple h-screen flex flex-col justify-between">
      <section className="flex flex-col items-center mt-16">
        <h1 className="text-5xl font-irish text-white">
          Bienvenido a Brain Brawl
        </h1>
        <form
          className="flex flex-col items-center justify-center bg-peach w-full max-w-xs p-7 mt-20 gap-y-4 rounded-lg"
          action=""
        >
          <div className="w-20 h-20 bg-zinc-700 rounded-full"></div>
          <p className="text-center px-9 font-montserrat text-lg">
            {" "}
            ¡Sumérgete en la batalla de las mentes más poderosas!{" "}
          </p>
          <input
            type="text"
            placeholder="Apodo"
            className="p-2 rounded-md bg-peach border-gray-500 border w-full"
          />
          <button className="bg-pink p-2 rounded-lg text-white w-full">
            Todo Listo
          </button>
        </form>
      </section>
    </div>
  );
};
