import './css/Access.css'
import mapImg from '../../img/map.png'

const Access = () => {
  return (
    <main>
      <h2>アクセス</h2>
      <div className="map"><img src={mapImg} alt="地図" /></div>
      <p>九寺楽駅　東口　徒歩2分</p>
      <div className="accessInfo">
        <ol>
          <li>駅東口を出ます。</li>
          <li>駅前商店街を国道999号線方面へ向かいます</li>
          <li>国道999号線を渡り直進します。</li>
          <li>銀行ATMの角を左に曲がり2件目の1階です。</li>
        </ol>
      </div>
    </main>
    )
}

export default Access