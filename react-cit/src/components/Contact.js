import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      {/* ヘッダー */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/images/logo.svg" alt="CIT - イタリアン Wine Bar" />
          </div>
          <p className="tagline">幸せを呼ぶ…ワインと国産牛肉とチーズの美味しいお店</p>
        </div>
      </header>

      {/* ナビゲーション */}
      <nav className="navbar">
        <ul className="nav-menu">
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/menu">メニュー</Link></li>
          <li><Link to="/about">店舗紹介</Link></li>
          <li><Link to="/contact" className="active">お問い合わせ</Link></li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>お問い合わせ</h1>
            <p>ご予約やご質問は、お気軽にお問い合わせください</p>
          </div>
        </section>

        {/* 連絡方法 */}
        <section className="contact-methods">
          <div className="container">
            <h2>ご連絡方法</h2>
            <div className="methods-grid">
              <article className="method-card">
                <h3>📞 お電話</h3>
                <p className="method-content">000-1234-5678</p>
                <p className="method-time">営業時間内にお気軽にお電話ください。</p>
              </article>

              <article className="method-card">
                <h3>🏢 店舗訪問</h3>
                <p className="method-content">〒999-999<br />奈良氏之市都田沼１２３</p>
                <p className="method-time">都田沼駅より徒歩2分</p>
              </article>

              <article className="method-card">
                <h3>⏰ 営業時間</h3>
                <p className="method-content">ランチ：11:00～14:00<br />ディナー：17:00～23:00</p>
                <p className="method-time">定休日：月曜日</p>
              </article>
            </div>
          </div>
        </section>

        {/* 特別対応 */}
        <section className="special-services">
          <div className="container">
            <h2>特別対応</h2>
            <div className="services-grid">
              <article className="service-card">
                <h3>🎉 8名様以上の貸切</h3>
                <p>8名様以上のグループでのご利用や貸切をご希望の場合、定休日でもお気軽にお電話でご相談ください。</p>
                <p className="service-action">お電話でお問い合わせください</p>
              </article>

              <article className="service-card">
                <h3>🎂 誕生日のお祝い</h3>
                <p>誕生日のお祝いにご利用ください。ケーキの持ち込みも可能です。サプライズも大歓迎です！</p>
                <p className="service-action">お電話で事前にお知らせください</p>
              </article>

              <article className="service-card">
                <h3>🥳 記念日・特別なご宴会</h3>
                <p>記念日やお仲間とのご宴会に、特別なコースをご用意いたします。飲み放題付きコースも人気です。</p>
                <p className="service-action">お電話で事前にご相談ください</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <h2>ご予約・お問い合わせ</h2>
            <p>お気軽にお電話ください</p>
            <p className="phone">000-1234-5678</p>
            <p className="note">営業時間：ランチ 11:00～14:00 / ディナー 17:00～23:00（月曜日定休）</p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h4>CIT - イタリアン Wine Bar</h4>
            <p>〒999-999 奈良氏之市都田沼１２３</p>
            <p>電話：000-1234-5678</p>
          </div>
          <div className="footer-nav">
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/menu">メニュー</Link></li>
              <li><Link to="/about">店舗紹介</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
          <div className="footer-hours">
            <h5>営業時間</h5>
            <p>ランチ：11:00～14:00</p>
            <p>ディナー：17:00～23:00</p>
            <p>定休日：月曜日</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CIT - イタリアン Wine Bar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;