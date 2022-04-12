import React, {useContext} from 'react'
import InputButtonContainer from './InputButtonContainer'
import Discount from '../icons/discount.svg'
import StarFill from '../icons/star-filled.svg'
import { Rating } from '@mui/material'
import { ProductContext } from '../store/context'
import { Info, Price, YellowStar, GreyStar } from './styled/ProductInfo.styled'


const ProductInfo = () => {
    const { datas } = useContext(ProductContext)

    return (
        <Info>
            <h3>{datas && datas.title}</h3>
            <a href={datas && datas.supplier_link}>{datas && datas.supplier_name}</a>
            <p></p>
            <Rating name="read-only" 
                value={datas && datas.stars} precision={0.1}
                icon={<YellowStar src={ StarFill }/>}
                emptyIcon={<GreyStar src={ StarFill }/>} readOnly/>
            <Price>
                <h3>{datas && datas.price} EUR</h3>
                <p>+{datas && datas.transport_costs} EUR shipping</p>
                <img src={ Discount } alt="" style={{ height: '15px' }}/>
            </Price>
            <p>all prices incl. {datas && datas.vat_percent} % taxes</p>
            <InputButtonContainer/>
        </Info>
    )
}

export default ProductInfo