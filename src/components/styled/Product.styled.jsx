import styled from 'styled-components'

export const ProductWrapper = styled.div`
    clear: both;
    width: 100%;

`

export const ProductView = styled.div`
    width: 100%;
    
    padding-top: 50px;
    display: flex;
    
    flex-wrap: wrap;
    
`

export const ImageWrapper = styled.div`
    padding-left: 20px;
    
    padding-bottom: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    
    
`
export const SmallImgWrapper = styled.div`
    display: flex;
    flex-direction: column;

`
export const SmallImg = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #e9e9e9;
`
export const BigImg = styled.div`
    position: relative;
`
export const Img = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid #e9e9e9;
`
export const ZoomIcon = styled.img`
    position: absolute;
    filter: invert(71%) sepia(0%) saturate(0%) hue-rotate(10deg) brightness(96%) contrast(87%); 
    bottom: 10px;
    right: 10px;
    height: 25px;
`

export const DescriptionContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    background-color: #f5f5f5;
    color: #333;
    height: 100%;
    `

export const BoxContainer = styled.div`
    display: flex;
`
export const Titleh4 = styled.h4`
    color: #e55145;
    padding-bottom: 10px;
    padding-left: 20px;
`

export const GrayP = styled.p`
    color: grey;
    margin-top: 10px;
    `