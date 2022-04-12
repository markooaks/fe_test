import styled from "styled-components";

export const Info = styled.div`
    position: relative;
    padding-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    min-width: 300px;
    height: 300px;
    flex: 1.5;
`
export const YellowStar = styled.img`
filter: invert(71%) sepia(58%) saturate(2544%) hue-rotate(349deg) brightness(99%) contrast(93%);
height: 20px;
`
export const GreyStar = styled.img`
filter: invert(100%) sepia(22%) saturate(2761%) hue-rotate(193deg) brightness(119%) contrast(83%);
height: 20px;
`
export const Price = styled.div`
    display: flex;
    margin: 0px;
    align-self: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    width: 240px;
`