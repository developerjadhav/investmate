import React from 'react';
import logo from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header' >
        <img src={logo} alt="investment-calculator-logo" />
        <h1>Investment Calculater</h1>
    </header>
  )
}

export default Header
