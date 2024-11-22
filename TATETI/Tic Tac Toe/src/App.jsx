import { useState } from 'react'

function App() {
  const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null])
  const [jugando, setJugando] = useState(true)
  const [jugador, setJugador] = useState(true)
  const [p1, setP1] = useState("")
  const [p2, setP2] = useState("")
  const [name, setName] = useState(p1)

  
  


  function transform(n) {
    const newArreglo = [...arreglo]




    if (jugando) {
      if (newArreglo[n] == null) {
        if (jugador) {
          setName(p2)
          newArreglo[n] = "X"
          setJugador(false)
          console.log(newArreglo);
        }
        else {
          setName(p1)
          newArreglo[n] = "O"
          setJugador(true)
          console.log(newArreglo);
        }
      }
    }
    setArreglo(newArreglo)
    ///////////
    if ((newArreglo[0] == "X" && newArreglo[1] == "X" && newArreglo[2] == "X") ||
      (newArreglo[3] == "X" && newArreglo[4] == "X" && newArreglo[5] == "X") ||
      (newArreglo[6] == "X" && newArreglo[7] == "X" && newArreglo[8] == "X") ||
      (newArreglo[0] == "X" && newArreglo[3] == "X" && newArreglo[6] == "X") ||
      (newArreglo[1] == "X" && newArreglo[4] == "X" && newArreglo[7] == "X") ||
      (newArreglo[2] == "X" && newArreglo[5] == "X" && newArreglo[8] == "X") ||
      (newArreglo[0] == "X" && newArreglo[4] == "X" && newArreglo[8] == "X") ||
      (newArreglo[2] == "X" && newArreglo[4] == "X" && newArreglo[6] == "X")) {
      console.log("Gano X");
      Swal.fire("re equis perder");
      let newArreglo = [null, null, null, null, null, null, null, null, null]
      setArreglo(newArreglo)
    }
    if ((newArreglo[0] == "O" && newArreglo[1] == "O" && newArreglo[2] == "O") ||
      (newArreglo[3] == "O" && newArreglo[4] == "O" && newArreglo[5] == "O") ||
      (newArreglo[6] == "O" && newArreglo[7] == "O" && newArreglo[8] == "O") ||
      (newArreglo[0] == "O" && newArreglo[3] == "O" && newArreglo[6] == "O") ||
      (newArreglo[1] == "O" && newArreglo[4] == "O" && newArreglo[7] == "O") ||
      (newArreglo[2] == "O" && newArreglo[5] == "O" && newArreglo[8] == "O") ||
      (newArreglo[0] == "O" && newArreglo[4] == "O" && newArreglo[8] == "O") ||
      (newArreglo[2] == "O" && newArreglo[4] == "O" && newArreglo[6] == "O")) {
      console.log("Gano O ");
      Swal.fire("Circula la victoria");
      let newArreglo = [null, null, null, null, null, null, null, null, null]
      setArreglo(newArreglo)
    }
  }

  const turnodeP1 = (event) => {
    setP1(event.target.value);
    console.log(event.target.value);
    if (jugador) {
      setName(event.target.value)
    }
  };


  const turnodeP2 = (event) => {
    setP2(event.target.value);
    console.log(event.target.value);
    if (!jugador) {
      setName(event.target.value)
    }
  };



  //<button className="c1" onClick={() => transform(0)}>{arreglo[0]}</button>
  return (
    <>
      <input type="text" name="text" class="input" placeholder="X nombre" value={p1} onChange={turnodeP1} ></input>
      <input type="text" name="text" class="input" placeholder="O nombre" value={p2} onChange={turnodeP2} ></input>
      <div className="centrar">
        <h1>Turno de {name}</h1>
        <div className="container">
          <div className="c1" onClick={() => transform(0)}>{arreglo[0]}</div>
          <div className="c2" onClick={() => transform(1)}>{arreglo[1]}</div>
          <div className="c3" onClick={() => transform(2)}>{arreglo[2]}</div>
          <div className="c4" onClick={() => transform(3)}>{arreglo[3]}</div>
          <div className="c5" onClick={() => transform(4)}>{arreglo[4]}</div>
          <div className="c6" onClick={() => transform(5)}>{arreglo[5]}</div>
          <div className="c7" onClick={() => transform(6)}>{arreglo[6]}</div>
          <div className="c8" onClick={() => transform(7)}>{arreglo[7]}</div>
          <div className="c9" onClick={() => transform(8)}>{arreglo[8]}</div>
        </div>
      </div>
      <div className="puntaje">
        <h1>puntosx</h1>
        <h1>puntos0</h1>
      </div>
    </>
  )
}

export default App
