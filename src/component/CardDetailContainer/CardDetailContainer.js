import './CardDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProdcutoById } from '../../data/data'
import CardsDetail from '../CardsDetail/CardsDetail'
import { useParams } from 'react-router-dom'

const CardDetailContainer = () => {
    const [producto, setProducto] = useState (null)

    const { cardsId } = useParams()

    useEffect(() => {
        getProdcutoById(cardsId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className='idc'>
            <CardsDetail {...producto} />
        </div>
    )
}

export default CardDetailContainer;
