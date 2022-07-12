import react from 'react'
import './css/NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/about">店舗案内</a></li>
        <li><a href="/access">アクセス</a></li>
        <li><a href="/menu">メニュー</a></li>
        <li><a href="/contact">お問い合わせ</a></li>
      </ul>
    </nav>
  )
}

export default NavigationBar