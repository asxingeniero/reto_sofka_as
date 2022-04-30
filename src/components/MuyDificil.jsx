import Pregunta from "./Pregunta"
import Final from "./Final"
import {useState} from 'react'


const MuyDificil = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const valorPregunta = 100

    // Preguntas categoria muy dificil
    const pregunta_1 = new Pregunta ('¿Cuántas franjas tiene la bandera de Estados Unidos?', '13', '8', '15', '12', '13', 'abandono')
    const pregunta_2 = new Pregunta ('¿Cómo se llamaba Istanbul antes de 1923?', 'Meca', 'Constantinopla', 'Estambul', 'Bagdag', 'Constantinopla', 'abandono')
    const pregunta_3 = new Pregunta ('¿Qué país tiene la mayor cantidad de islas en el mundo? ', 'Finlandia', 'China', 'Japon', 'Suecia', 'Suecia', 'abandono')
    const pregunta_4 = new Pregunta ('¿Cuál es la capital de Canadá?', 'Toronto', 'Montereal', 'Ottawa', 'Vancouver', 'Ottawa', 'abandono')
    const pregunta_5 = new Pregunta ('¿Cuál es el río más largo del mundo?', 'Amazonas', 'Río Nilo', 'Missisipi', 'Tamesis', 'Río Nilo', 'abandono')

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
        <Final
            amount={amount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Categoria: <span>Muy dificil</span></p>
            
        </div>
        <div className="question-data">
            
            <p>Valor respuesta:<span>  {valorPregunta} Puntos</span></p>
            <p>Acumulado:<span>  {amount} Puntos</span></p>
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

export default MuyDificil