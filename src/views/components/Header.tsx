import react from 'react'
import './css/Header.css'
import logoImg from '../../img/logo.png'

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"><a href="/" /><img src={logoImg} alt="KUJIRA Cafe" /></h1>
    </header>
  )
}

export default Header