import React, { useContext } from 'react'
import Attachment  from '../icons/attachment.svg'
import { ProductContext } from '../store/context'
import { Box, Chip, Divider } from '@mui/material'
import { DescriptionContainer, BoxContainer, Titleh4, GrayP } from './styled/Product.styled'



const Description = () => {
    const { datas } = useContext(ProductContext)

    return (
    <DescriptionContainer>
        <Titleh4>DESCRIPTION</Titleh4>
        <p style={{paddingLeft:'20px', paddingRight:'20%'}}>{datas && datas.description_long}</p>
        <BoxContainer>
            <Box sx={[{
                backgroundColor: '#fff',
                width: '48%',
                margin: '20px',
                height: '250px',
                padding: '15px',
            }]}>
                <Titleh4>DETAILS</Titleh4>
                <Divider sx={[{paddingRight:'10px', paddingLeft:'10px'}]}/>
                <GrayP>Features</GrayP>
                <ul>
                    <li>Feature 1: Green</li>
                    <li>Feature 2: 20cm</li>
                    <li>Feature 3: XL</li>
                </ul>
                <GrayP>Attachments</GrayP>
                <img src={ Attachment } alt="" 
                    style={{ height: '15px', paddingRight: '5px' }} />
                {datas && <a href={datas.attachments[0].file_link}>
                    {datas.attachments[0].file_label}
                </a>}
                <p></p>
                <img src={ Attachment } alt="" 
                    style={{ height: '15px', paddingRight: '5px' }} />
                {datas && <a href={datas.attachments[1].file_link}>
                    {datas.attachments[1].file_label}
                </a>}
                <p>Keywords</p>
                <Chip label={datas && datas.keywords[0]} sx={[{margin:'5px 5px 0 0',}]}/>
                <Chip label={datas && datas.keywords[1]} sx={[{margin:'5px 5px 0 0',}]}/>
                <Chip label={datas && datas.keywords[2]} sx={[{margin:'5px 5px 0 0',}]}/>
            </Box>

            <Box sx={[{
                backgroundColor: '#fff',
                width: '48%',
                height: '250px',
                margin: '20px',
                padding: '15px',
            }]}>
                <Titleh4>PRICING & SHIPPING</Titleh4>
                <Divider sx={[{paddingRight:'10px', paddingLeft:'10px',}]}/>
                <ul style={{margin: '10px 0'}}>
                    <li>Minimum order: {datas && datas.minimum_order_quantity} PCE</li>
                    <li>Shipping: {datas && datas.transport_costs} EUR</li>
                    <li>Delivery time: {datas && datas.delivery_time} days</li>
                </ul>
                <GrayP>Price breaks</GrayP>
                <Divider sx={[{width: '150px', paddingRight:'10px'}]}/>
                    <p style={{margin: '5px 0'}}>ex 20 PCE: 2398.9</p>
                <Divider sx={[{width: '150px', paddingRight:'10px',}]}/>
                    <p style={{margin: '5px 0'}}>ex 50 PCE: 2109.9</p>
                <Divider sx={[{width: '150px', paddingRight:'10px',}]}/>
                    <p style={{margin: '5px 0'}}>ex 100 PCE: 1999.9</p>
                <Divider sx={[{width: '150px', paddingRight:'10px',}]}/>
            </Box>
        </BoxContainer>
    </DescriptionContainer>
    )
}

export default Description