import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
          <li><Link to="/" className="active">ホーム</Link></li>
          <li><Link to="/menu">メニュー</Link></li>
          <li><Link to="/about">店舗紹介</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="main-content">
        {/* キービジュアルセクション */}
        <section className="hero" id="hero-video">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/2025素材/ワイン.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>普段使いの気取らない贅沢</h1>
            <p>ワインの専門家はいません。自分達が美味しいと思ったワインだけをご用意しております。</p>
          </div>
        </section>

        {/* GIFアニメーションセクション */}
        <section className="gif-section">
          <div className="container">
            <h2>ワインアニメーション</h2>
            <img src="/2025素材/wine_animation.gif" alt="ワインアニメーション" />
          </div>
        </section>

        {/* 音声セクション */}
        <section className="audio-section">
          <div className="container">
            <h2>背景音楽</h2>
            <audio controls autoPlay loop>
              <source src="https://www.bensound.com/bensound-music/jazzy-abstract-beat.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </section>

        {/* 店舗紹介セクション */}
        <section className="intro">
          <div className="container">
            <h2>CITについて</h2>
            <div className="intro-grid">
              <article className="intro-card">
                <h3>アクセス抜群</h3>
                <p>都田沼駅より徒歩2分。お仕事帰りや大切なパートナー、ひとり飲みにも様々なシーンにご利用ください。</p>
              </article>
              <article className="intro-card">
                <h3>衛生対策は万全</h3>
                <p>旬の食材を使ったコスパ最高の美味しい料理と、厳選されたワインをご用意しています。</p>
              </article>
              <article className="intro-card">
                <h3>様々なシーン対応</h3>
                <p>女子会、記念日、友人とのお食事。8名様以上の貸切も定休日でもお気軽にご相談ください。</p>
              </article>
            </div>
          </div>
        </section>

        {/* こだわりセクション */}
        <section className="features">
          <div className="container">
            <h2>私たちのこだわり</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>01. 日替わりメニュー</h3>
                <p>豊富な日替わりメニュー。旬の美味しいお野菜、魚、お肉で毎日変わるおすすめメニューをご提供します。</p>
              </div>
              <div className="feature-item">
                <h3>02. 気軽に立ち寄れる</h3>
                <p>ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富。ふらっとお立ち寄りください。</p>
              </div>
              <div className="feature-item">
                <h3>03. パーティーコース</h3>
                <p>2,980円から3種類のお得なコースメニュー。飲み放題付きコースも人気です。</p>
              </div>
              <div className="feature-item">
                <h3>04. グラスワイン</h3>
                <p>コスパ最高の美味しいワイン。日替わりグラスワインは580円～。ボトルワインも各種ご用意。</p>
              </div>
              <div className="feature-item">
                <h3>05. チーズ</h3>
                <p>絶品チーズ！ワインとの相性を考えたオーナーシェフ厳選のチーズメニューをお楽しみください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA（行動喚起）セクション */}
        <section className="cta">
          <div className="container">
            <h2>ご予約・お問い合わせ</h2>
            <p>お気軽にお電話ください</p>
            <p className="phone">000-1234-5678</p>
            <Link to="/contact" className="btn">お問い合わせフォーム</Link>
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

export default Home;