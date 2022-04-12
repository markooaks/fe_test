import React, {useContext} from 'react'
import Fav from '../icons/favorite.svg'
import Facts from '../icons/facts-soft.svg'
import Cart from '../icons/cart.svg'
import { HeaderWrapper, HeaderTitle, IconWrapper, CartWrapper, SvgIcon, CartBadge } from './styled/Header.styled'
import { ProductContext } from '../store/context'



const Header = () => {
  const { datas, cart } = useContext(ProductContext)

  return (
    <HeaderWrapper>
      <HeaderTitle>{datas && datas.title}</HeaderTitle>
      <IconWrapper>
        <SvgIcon src={ Fav } alt="Fav" />
        <SvgIcon src={ Facts } alt="Cmp" />
      </IconWrapper>
      <CartWrapper>
        <CartBadge>{cart}</CartBadge>
        <SvgIcon src={ Cart } alt="Cart" />
      </CartWrapper>
    </HeaderWrapper>
    
  )
}

export default Header