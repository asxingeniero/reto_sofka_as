import Pregunta from "./Pregunta"
import Final from "./Final"
import {useState} from 'react'
import Facil from './Facil'


const MuyFacil = ({acumulado, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const valorPregunta = 5

    // Preguntas categoria muy facil
    const pregunta_1 = new Pregunta ('¿Resultado de 12 * 5 ?', '45', '84', '69', '60', '60', 'abandono')
    const pregunta_2 = new Pregunta ('¿Resultado de 8 + 5 ?', '13', '11', '24', '12', '13', 'abandono')
    const pregunta_3 = new Pregunta ('¿Resultado de 20 / 4?', '8', '7', '3', '5', '5', 'abandono')
    const pregunta_4 = new Pregunta ('¿Cuantas patas tiene una araña?', '6', '8', '4', '7', '8', 'abandono')
    const pregunta_5 = new Pregunta ('¿raiz cuadrada de 4 ?', '8', '3', '2', '1', '2', 'abandono')

    // Array de preguntas
    const preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4,  pregunta_5]


    // Funciones

    const handleSubmit = (selected, isCorrect) => {
        
        if( selected === isCorrect){
            console.log('Es la respuesta correcta')
            setIWonQuestion(true)
            setAmount(acumulado + valorPregunta)
        }else{
            console.log('No es la respuesta correcta')
            setIsFinish(true)
            setAmount(acumulado)
        }
    }

    if( isFinish ) return (
        <Final
            amount={acumulado}
            userName={userName}
        />    
    )

    if( wonQuestion ) return (
        <Facil
            amount={acumulado}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

            <div>
                <p>Categoria: <span>Muy facil</span></p>


            </div>
            <div className="question-data">
                
                <p>Valor respuesta: <span>  {valorPregunta} Puntos</span></p>
                <p>Acumulado: <span>  {acumulado} Puntos</span></p>
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

export default MuyFacil