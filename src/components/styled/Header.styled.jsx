
import styled from "styled-components"

export const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 3;
    height: 50px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const HeaderTitle = styled.h3`
    flex: 5;
    color: #e55145;
    padding-left: 20px;
    padding-right: 20px;
`

export const IconWrapper = styled.div`
    
    padding-right: 5px;
    padding-left: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    
    
`
export const CartWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border-left: 1px solid #e9e9e9;
    padding-left: 25px;
    padding-right: 15px;
`
export const SvgIcon = styled.img`
    
    padding-right: 10px;
    
    height: 50%;
    filter: invert(71%) sepia(0%) saturate(0%) hue-rotate(10deg) brightness(96%) contrast(87%);    
`
export const CartBadge = styled.div`
    position: absolute;
    z-index: 1;
    top: 7px;
    right: 17px;
    background-color: #e55145;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1.5px solid white;
    color: white;
    text-align: center;
    font-size: 11px;

`