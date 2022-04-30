

const Final = ({amount, userName}) => {

    return (
        <div className='card'>
            <div>
                <h2>Juego finalizado</h2>
                
            </div>

            <div>
                <p>{userName}</p>
                <hr/>
                <p>Usted acumulo: <span>{amount}</span> Puntos</p>
            </div>
            
        </div>
    )
}

export default Final