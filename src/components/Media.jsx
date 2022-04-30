import Pregunta from "./Pregunta"
import Final from "./Final"
import Dificil from "./Dificil"
import {useState} from 'react'


const Media = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const valorPregunta = 20

    // Preguntas categoria media
    const pregunta_1 = new Pregunta ('¿ Resultado de 11 * 11 ?', '121', '101', '1111', '111', '121', 'abandono')
    const pregunta_2 = new Pregunta ('¿ Capital de uruguay ?', 'Rio de janeiro', 'Montevideo', 'Guayana', 'Asuncion', 'Montevideo', 'abandono')
    const pregunta_3 = new Pregunta ('¿ Capital de paraguay?', 'Asuncion', 'La paz', 'Bogota', 'Buenos aires', 'Asuncion', 'abandono')
    const pregunta_4 = new Pregunta ('¿ Resultado de 22 * 11 ?', '101', '222', '331', '242', '242', 'abandono')
    const pregunta_5 = new Pregunta ('¿A qué se dedica un oftalmologo?', 'Pies', 'Cuerpo', 'Manos', 'Ojos', 'Ojos', 'abandono')

    // Array Of Questions
    const preguntas = [pregunta_1, pregunta_2, pregunta_3, pregunta_4,  pregunta_5]


    // Functions

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
        <Dificil
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Categoria: <span>Media</span></p>
            
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

export default Media