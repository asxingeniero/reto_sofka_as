import Pregunta from "./Pregunta"
import Final from "./Final"
import MuyDificil from "./MuyDificil"
import {useState} from 'react'


const Dificil = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const valorPregunta = 50

    // Preguntas categoria dificil
    const pregunta_1 = new Pregunta ('¿Qué artista pinto el techo de la Capilla Sixtina en Roma?', 'Leonardo da vince', 'Pablo picasso', 'Miguel angel', 'Salvador dali', 'Miguel angel', 'abandono')
    const pregunta_2 = new Pregunta ('¿Qué ocurrió el 20 de Julio de 1969?', 'El alunizaje del Apollo 11', 'Inicio guerra vietnam', 'Independencia de colombia', 'Asesinato Jf kennedy','El alunizaje del Apollo 11', 'abandono')
    const pregunta_3 = new Pregunta ('¿De qué ciudad son originarios los Beatles?', 'Manchester', 'Sprinfield', 'Dublin', 'Liverpool', 'Liverpool', 'abandono')
    const pregunta_4 = new Pregunta ('¿Qué equipo de fútbol se le conoce como ‘The Red Devils’?', 'Liverpool', 'Manchester city', 'Manchester United', 'America de cali', 'Manchester United', 'abandono')
    const pregunta_5 = new Pregunta ('¿Dónde se celebraron los primeros Juegos Olímpicos modernos?', 'Paris', 'Atenas', 'Madrid', 'Pekin', 'Atenas', 'abandono')

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
        <MuyDificil
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Categoria: <span>Dificil</span></p>
            
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

export default Dificil