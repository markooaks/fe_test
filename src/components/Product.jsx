import React from 'react'
import ZoomIn from '../icons/zoom-in.svg'

import ProductInfo from './ProductInfo'
import { ProductWrapper, ProductView, ImageWrapper, BigImg, SmallImgWrapper, SmallImg, ZoomIcon, Img} from './styled/Product.styled'
import Description from './Description'




const Product = () => {


    return (
    <ProductWrapper>
    
        <ProductView>
            <ImageWrapper>
                <SmallImgWrapper> 
                    <SmallImg src="https://picsum.photos/100/100" alt="" />
                    <SmallImg src="https://picsum.photos/100/100" alt="" />
                </SmallImgWrapper>
                <BigImg>
                <ZoomIcon src={ ZoomIn }/>
                <Img src="https://picsum.photos/300/300" alt=""/>
                </BigImg>
            </ImageWrapper>
            <ProductInfo/>
            
        </ProductView>
        <Description/>
    </ProductWrapper>
    
    )
}

export default Product