import { useState } from 'react'
import Cards from '../Cards/Cards'
import './stylecardlist.css'
import { Data } from '../../data/data'

export default function CardList(){
    const [productos, setProductos]=useState(Data)    
      
    return(
        <div className='divmapeo'>
            {productos.map((element, i)=>{
                return <Cards titulo={element.titulo} img={element.img}marca={element.marca} precio={element.precio} desc={element.desc} carac={element.carac} cat={element.cat} key={i}/>
            })}
        </div>
    )
}