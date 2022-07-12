import './css/menu.css'
import menuPhoto1 from '../../img/menu-photo1.jpg'
import menuPhoto2 from '../../img/menu-photo2.jpg'
import menuPhoto3 from '../../img/menu-photo3.jpg'

const Menu = () => {
  return (
    <main>
      <h2>メニュー</h2>
      <div className="menu-block">
        <div className="menu-item">
          <div className="menu-photo"><img src={menuPhoto1} alt="" /></div>
          <div className="menu-text">
            <h3>カシスとオレンジのジュース</h3>
            <p>リキュールを使ったカクテルでおなじみのカシスは、ポリフェノールやビタミンが豊富なベリー系のフルーツです。オレンジとともにジューサーにかけて、爽やかなドリンクに仕上げました。</p>

            <p>&yen;480-</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo"><img src={menuPhoto2} alt="" /></div>
          <div className="menu-text">
            <h3>ナッツのタルト</h3>
            <p>ピーカンナッツにアーモンド、くるみ、ヘーゼルナッツ、パンプキンシード。5種類のナッツを贅沢にトッピングした当店の定番タルトです。黒糖を使用したコクのある甘味は、コーヒーのお供にぴったりです。</p>

            <p>&yen;550-</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-photo"><img src={menuPhoto3} alt="" /></div>
          <div className="menu-text">
            <h3>太陽プラムのタルト</h3>
            <p>今月の旬のタルトはこちら。山梨産のプラム「太陽」を使用しています。太陽は、完熟すると酸味が抜けて、驚くほど甘くなります。クリームチーズを混ぜ込んだフィリングとも相性抜群。この時期だけの味、ぜひお試しください。</p>

            <p>&yen;600-</p>
          </div>
        </div>
      </div>
    </main>
    )
}

export default Menu