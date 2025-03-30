import React from 'react'
import { useState } from 'react'
import GameBoard from '../components/GameBoard'
import ModalGanador from '../components/ModalGanador'
import '../App.css'

function PasaPalabraPage(){
    const [indiceActual, setIndiceActual] = useState(0)
  const [respuesta, setRespuesta] = useState(''); 
  const [esRespuestaCorrecta, setRespuestaCorrecta] = useState(null);
  const [numeroRespuestasCorrectas, setNumeroRespuestasCorrectas] = useState(0);
  const [numeroVidas, setnumeroVidas] = useState(3);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ganador, setGanador] = useState(false);
  

  const preguntas = [
    { letra: 'A', pregunta: '¿Que animal es conocido por su gran trompa?', respuesta: 'elefante' },
    { letra: 'B', pregunta: '¿Que insecto produce miel?', respuesta: 'abeja' },
    { letra: 'C', pregunta: '¿Como se llama el continente donde esta Egipto?', respuesta: 'africa' },
    { letra: 'D', pregunta: '¿Que gas es fundamental para la respiracion humana?', respuesta: 'dioxido de carbono' },
    { letra: 'E', pregunta: '¿Cual es el organo encargado de bombear sangre en el cuerpo?', respuesta: 'corazon' },
    { letra: 'F', pregunta: '¿Que objeto se usa para volar en el cielo con viento?', respuesta: 'cometa' },
    { letra: 'G', pregunta: '¿Que instrumento musical tiene cuerdas y se toca con las manos?', respuesta: 'guitarra' },
    { letra: 'H', pregunta: '¿Que gas es el mas abundante en el universo?', respuesta: 'hidrogeno' },
    { letra: 'I', pregunta: '¿Que pais tiene como capital a Islamabad?', respuesta: 'pakistan' },
    { letra: 'J', pregunta: '¿Que fruta tropical es de color amarillo y tiene cascara gruesa?', respuesta: 'banana' },
    { letra: 'K', pregunta: '¿Cual es un arte marcial de origen japones?', respuesta: 'karate' },
    { letra: 'L', pregunta: '¿Que mamifero marino es conocido por cantar bajo el agua?', respuesta: 'ballena' },
    { letra: 'M', pregunta: '¿Que astro es el satelite natural de la Tierra?', respuesta: 'luna' },
    { letra: 'N', pregunta: '¿Que gas compone la mayor parte del aire que respiramos?', respuesta: 'nitrogeno' },
    { letra: 'Ñ', pregunta: 'Contiene la letra Ñ, ¿como se llama el rio mas largo de España?', respuesta: 'tajo' },
    { letra: 'O', pregunta: '¿Que fruta es redonda, de color anaranjado y rica en vitamina C?', respuesta: 'naranja' },
    { letra: 'P', pregunta: '¿Que metal precioso es conocido por su color dorado?', respuesta: 'oro' },
    { letra: 'Q', pregunta: '¿Que capital de Ecuador empieza con la letra Q?', respuesta: 'quito' },
    { letra: 'R', pregunta: '¿Que animal es conocido por su rapidez y manchas en la piel?', respuesta: 'guepardo' },
    { letra: 'S', pregunta: '¿Que liquido se usa para cocinar y proviene del mar?', respuesta: 'sal' },
    { letra: 'T', pregunta: '¿Que planeta del sistema solar es el mas grande?', respuesta: 'jupiter' },
    { letra: 'U', pregunta: '¿Que pais sudamericano tiene a Montevideo como capital?', respuesta: 'uruguay' },
    { letra: 'V', pregunta: '¿Que liquido rojo transporta oxigeno en el cuerpo humano?', respuesta: 'sangre' },
    { letra: 'W', pregunta: '¿Que ciudad de Estados Unidos es la capital del pais?', respuesta: 'washington d.c.' },
    { letra: 'X', pregunta: 'Contiene la letra X, ¿que instrumento musical de percusion tiene placas metalicas?', respuesta: 'xilofono' },
    { letra: 'Y', pregunta: '¿Que pais de Asia tiene su nombre con la letra Y?', respuesta: 'yemen' },
    { letra: 'Z', pregunta: '¿Que mamifero con rayas blancas y negras vive en Africa?', respuesta: 'cebra' }
  ];

  const cambioIndice = (nuevoIndice) => {
    setIndiceActual(nuevoIndice); 
  };


  const enviarRespuesta = () =>{
    if (respuesta.toLowerCase() === preguntas[indiceActual].respuesta.toLowerCase()) {
      setRespuestaCorrecta(true);
      setNumeroRespuestasCorrectas((prev) => {
        const nuevasCorrectas = prev + 1;

        // Mostrar el modal si se alcanzan 3 respuestas correctas
        if (nuevasCorrectas === 3) {
          setMostrarModal(true);
          setGanador(true);
        }

        return nuevasCorrectas;
      });

      console.log(numeroRespuestasCorrectas);
      
      // Después de mostrar el mensaje de "Respuesta correcta", avanza al siguiente índice
      setTimeout(() => {
          // Avanzar al siguiente índice (letra)
          cambioIndice(indiceActual + 1 % preguntas.length);
          setRespuesta(""); // Limpiar la respuesta
          setRespuestaCorrecta(null); // Restablecer el estado de la respuesta
      }, 1000); // Tiempo para mostrar la respuesta correcta
  } else {
      setnumeroVidas(prev => prev - 1); 

      if (numeroVidas < 1) {
          setMostrarModal(true); 
          setGanador(false);
      }
      console.log(numeroVidas);
      setRespuestaCorrecta(false);
  }

  }

  const reiniciarJuego = () =>{
    setIndiceActual(0);
    setRespuesta("");
    setRespuestaCorrecta(null);
    setNumeroRespuestasCorrectas(0);
    setMostrarModal(false);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Pasapalabra</h1>
      <GameBoard
        indiceActual={indiceActual}
        cambioIndice={cambioIndice}
        pregunta={preguntas[indiceActual].pregunta} // Pasa la pregunta correspondiente
        respuesta={respuesta}
        setRespuesta={setRespuesta}
        enviarRespuesta={enviarRespuesta}
        esRespuestaCorrecta={esRespuestaCorrecta}
      />
      <ModalGanador
          mostrar={mostrarModal}
          esGanador = {ganador}
          onClose={() => {
            setMostrarModal(false);
            reiniciarJuego();
          }

          } // Cierra el modal al hacer clic en "Aceptar"
        />
    </div>
    </>
  )
}

export default PasaPalabraPage
