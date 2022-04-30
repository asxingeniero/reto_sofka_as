import { useRef } from "react";

const Intro = ({setIntro, setUsername}) => {


    // persistencia -nombre jugador
    const inputRef = useRef();

    const handleButton = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
        setIntro(true)
    }

    return (
        <div className="container">

            <div className="title">
                <h1 className="game-title">Trivias</h1>
                <p>! TE ATREVES ?</p>
            </div>

            <div className="input">
                {/*  <label htmlFor="name">Nombre Participante</label>*/}
                <input
                    id="name"
                    placeholder="cual es tu nombre?"
                    ref={inputRef} // persistencia NOMBRE JUGADOR
                />
            </div>
            
            <div className="btn">
                <button 
                    className="start-btn" 
                    onClick={() => {
                        handleButton()
                        setIntro(false)
                    }}>
                    Vamos!
                </button>
            </div>

            
            
        </div>
    )
}

export default Intro