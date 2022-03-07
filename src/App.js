import "./App.css"
import { useState } from "react"

export default function App(){

   const [number, setNumber] = useState(0)
    
    function diminuir(){
     setNumber(number - 1)

    }
    function aumentar(){
     setNumber(number + 1)
    }
    function zerar(){
        setNumber(0)
    }

    return <section>
    <div className="contador">
        <h1 className="Nome">Contador</h1>
        <p className="Numero">{number}</p>
        <div>
            <button className="btn e" onClick={diminuir}>Menos</button>
            <button className="btn" onClick={zerar}>Zerar</button>
            <button className="btn d" onClick={aumentar}>Mais</button>
        </div>
    </div>
    </section> 
    
}