import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import Add from '../icons/add.svg'
import { Button, IconButton, Input} from '@mui/material'
import { ProductContext } from '../store/context'

const FormContainer = styled.div`
    position: absolute;
    bottom: 0;
    
`
const WhiteIcon = styled.img`
    filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(333deg) brightness(114%) contrast(100%);
    height: 20px;
`

const InputButtonContainer = () => {
    const {cart, setCart } = useContext(ProductContext)
    const [value, setValue] = useState(1)
    
    const handleInputChange = (e) => {
        setValue(parseInt(e.target.value))
    }

    return (
    <FormContainer>
        <Input input={value} onChange={handleInputChange} 
            disableUnderline={true} defaultValue='1' sx={[
                {
                    width: '50px',
                    height: '35px',
                    backgroundColor: 'white',
                    border: '1px solid #e9e9e9',
                    paddingLeft: '10px',
                    
                    marginRight: '5px',
                }
            ]}/>
            <span>PCE</span>

            <Button variant="contained" 
                    onClick={() => setCart(cart + value)}
                    sx={[
                        { borderRadius: 0, 
                            textTransform: 'none', 
                            backgroundColor: '#e55145',
                            boxShadow: 0,
                            height: '35px',
                            width: '140px',
                            padding: '0px',
                            marginLeft: '20px',},{
                            '&:hover' : {
                            backgroundColor: "#d14a3f",
                            },
                        },
                    ]}
                    startIcon={
                        <IconButton disabled={true} sx={[{
                            paddingLeft: '0px',
                        }]}>
                    <WhiteIcon src= {Add} alt=""/>
                    </IconButton>}>
                Add to cart
            </Button>
                </FormContainer>
                

    )
}

export default InputButtonContainer