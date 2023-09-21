import './stylecards.css'

export default function Cards({titulo, marca, precio, desc, carac, cat} ){
    return(
        <article className='divcards'>
            <h2>{titulo}</h2>
            <h3>{marca}</h3>
            <h3>{precio}</h3>
            <p>{desc}</p>
            <p>{carac}</p>
            <p>{cat}</p>
        </article>
    )
}