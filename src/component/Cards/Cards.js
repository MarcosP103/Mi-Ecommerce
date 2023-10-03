import './stylecards.css'

export default function Cards({titulo, img, precio, desc, carac, cat} ){
    return(
        <article className='divcards'>
            <h2>{titulo}</h2>
            <h3>{precio}</h3>
            <img src={img}/>
            <p>{desc}</p>
            <p>{carac}</p>
            <p>{cat}</p>
        </article>
    )
}