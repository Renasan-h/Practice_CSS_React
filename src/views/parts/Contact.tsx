import './css/contact.css'

const Contact = () => {
  return (
    <main>
      <h2>お問い合わせ</h2>
      <form method="GET" action="result.html">
        <div>
          <label>お問い合わせの種類</label><br/>
          <select name="kind">
            <option value="reservation">ご予約</option>
            <option value="event">イベントについて</option>
            <option value="contact">その他のお問い合わせについて</option>
          </select>
        </div>
        <div>
          KUJIRA Cafeにご来店いただいたことはありますか。<br />
          <label><input type="radio" name="first" value="yes" checked />はい</label>
          <label><input type="radio" name="first" value="no" />いいえ</label>
        </div>
        <div>
          当カフェをお知りになったきっかけは？<br />
          <label><input type="checkbox" name="how" value="friends" />知り合いの紹介で</label>
          <label><input type="checkbox" name="how" value="magzine" />雑誌・Webサイトで見て</label>
        </div>
        <div>
        <label>お問い合わせの件名<br />
          <input type="text" name="subject" placeholder="お問い合わせ" /></label>
        </div>
        <div>
        <label>お問い合わせの具体的な内容<br />
          <textarea name="message"></textarea></label>
        </div>
        <div>
          <input type="submit" name="submit" value="送信" />
        </div>
      </form>
    </main>
  )
}

export default Contact