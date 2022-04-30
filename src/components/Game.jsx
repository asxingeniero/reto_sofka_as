import MuyFacil from './MuyFacil'
import { useState } from 'react'

const Game = ({userName}) => {

    const [acumulado, setAmount] = useState(0)

    return (
        <div className='container'>
            <MuyFacil
                acumulado={acumulado}
                setAmount={setAmount}
                userName={userName}
            />
        </div>
    )
}

export default Game