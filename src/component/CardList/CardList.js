import { useState } from 'react'
import Cards from '../Cards/Cards'
import './stylecardlist.css'

export default function CardList(){
    
    const [productos]=useState([{
        titulo:"Caja Activa",
        marca:"JBL 15",
        precio:"$500",
        desc:"parlante",
        carac:"150 watts",
        cat:"Cajas Acusticas"
    },
    {
        titulo:"Piano",
        marca:"Casio 88",
        precio:"$1500",
        desc:"piano",
        carac:"8 octavas",
        cat:"Instrumentos"
    },
    {
        titulo:"Microfono",
        marca:"Shure",
        precio:"$75",
        desc:"mic",
        carac:"largo alcance",
        cat:"Microfonos"
    }]);
    
    return(
        <div className='divmapeo'>
            {productos.map((element)=>{
                return <Cards titulo={element.titulo} marca={element.marca} precio={element.precio} desc={element.desc} carac={element.carac} cat={element.cat}/>
            })}
        </div>
    )
}