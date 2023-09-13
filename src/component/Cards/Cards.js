import './stylecards.css'

export default function Cards({titulo, marca, precio, desc, carac, cat} ){
    return(
        <div className='divcards'>
            <h2>{titulo}</h2>
            <h2>{marca}</h2>
            <h3>{precio}</h3>
            <p>{desc}</p>
            <p>{carac}</p>
            <p>{cat}</p>
        </div>
    )
}