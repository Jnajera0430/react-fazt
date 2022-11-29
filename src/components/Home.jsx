import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col h-full">
        <h1 className="font-bold font-medium ">Bienvenido a TODO APP</h1>
        <div>
          <h2>Que encontrarás?</h2>
          <p>En esta app podras realizar listados de tus rutinas diarias.</p>
        </div>
        <div>
          <h2>Organiza tus rutinas diarias</h2>
          <p>
            Nunca mas se te olvidara una rutina diaria con nosotros ven reliza
            un listado de tus tareas con nosotros que estaremos encantado en
            ayudarte.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
