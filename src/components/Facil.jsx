import Pregunta from "./Pregunta"
import Final from "./Final"
import Media from "./Media"
import {useState} from 'react'


const Facil = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const valorPregunta = 10

    // Preguntas categoria facil
    const pregunta_1 = new Pregunta ('¿ Capital de colombia ?', 'la paz', 'quito', 'lima', 'bogota', 'bogota', 'abandono')
    const pregunta_2 = new Pregunta ('¿ Capital de bolivia ?', 'bogota', 'Quito', 'La paz', 'Galicia', 'La paz', 'abandono')
    const pregunta_3 = new Pregunta ('¿ Resultado de 25 * 6 ?', '125', '150', '100', '200', '150', 'abandono')
    const pregunta_4 = new Pregunta ('¿Cuantos son los colores primarios ?', '7', '5', '3', '2', '3', 'abandono')
    const pregunta_5 = new Pregunta ('¿Como se dice azul en ingles ?', 'Red', 'Brow', 'yellow', 'Blue', 'Blue', 'abandono')

    // Array de preguntas
    const preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4,  pregunta_5]


    // Funciones

    const handleSubmit = (selected, isCorrect) => {
        
        if( selected === isCorrect){
            console.log('Es la respuesta correcta')
            setIWonQuestion(true)
            setAmount(amount + valorPregunta)
        }else{
            console.log('No es la respuesta correcta')
            setIsFinish(true)
            setAmount(amount)
        }
    }

    if( isFinish ) return (
        <Final
            amount={amount}
            userName={userName}
        />    
    )

    if( wonQuestion ) return (
        <Media
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Categoria: <span>Facil</span></p>
            
        </div>
        <div className="question-data">
            
        <p>Valor respuesta: <span>  {valorPregunta} Puntos</span></p>
                <p>Acumulado: <span>  {amount} Puntos</span></p>
        </div>
        <div>
        <div className="question-label">
            <h2>{preguntas[random].question}</h2>
        </div>

        

        <div>
                <button
                    onClick={ ()=> handleSubmit(preguntas[random].answer1, preguntas[random].isCorrect)}>
                    {preguntas[random].answer1}
                </button>
                <button
                    onClick={ ()=> handleSubmit(preguntas[random].answer2, preguntas[random].isCorrect)}>
                    {preguntas[random].answer2}
                </button>
                <button
                    onClick={ ()=> handleSubmit(preguntas[random].answer3, preguntas[random].isCorrect)}>
                    {preguntas[random].answer3}
                </button>
                <button
                    onClick={ ()=> handleSubmit(preguntas[random].answer4, preguntas[random].isCorrect)}>
                    {preguntas[random].answer4}
                </button>
                <hr/>
                <button
                    onClick={ ()=> handleSubmit(preguntas[random].retire, preguntas[random].isCorrect)}>
                    <p className="retire-btn">Abandonar</p>
                </button>
            </div>
            </div>

        </div>
    )

}

export default Facil