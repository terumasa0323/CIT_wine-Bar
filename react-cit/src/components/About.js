import React from 'react';
import { Link } from 'react-router-dom';

function About() {
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
          <li><Link to="/about" className="active">店舗紹介</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>店舗紹介</h1>
            <p>CITのこだわりと想い、店舗情報をご紹介します</p>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="store-info-section">
          <div className="container">
            <h2>基本情報</h2>
            <div className="store-info-grid">
              <div className="info-card">
                <h3>店舗名</h3>
                <p>CIT（シーアイティ）</p>
              </div>
              <div className="info-card">
                <h3>住所</h3>
                <p>〒999-999<br />奈良氏之市都田沼１２３</p>
              </div>
              <div className="info-card">
                <h3>電話</h3>
                <p>000-1234-5678</p>
              </div>
              <div className="info-card">
                <h3>アクセス</h3>
                <p>都田沼駅より徒歩2分</p>
              </div>
              <div className="info-card">
                <h3>営業時間</h3>
                <p>ランチ：11:00～14:00<br />ディナー：17:00～23:00</p>
              </div>
              <div className="info-card">
                <h3>定休日</h3>
                <p>月曜日<br />※8名様以上の貸切は相談ください</p>
              </div>
            </div>
          </div>
        </section>

        {/* こだわり詳細 */}
        <section className="philosophy-section">
          <div className="container">
            <h2>CITのこだわり</h2>
            <div className="philosophy-grid">
              <article className="philosophy-card">
                <div className="philosophy-image">
                  <img src="/2025素材/こだわり1.jpg" alt="日替わりメニュー" />
                </div>
                <div className="philosophy-number">01</div>
                <h3>日替わりメニュー</h3>
                <p>豊富な日替わりメニュー！旬の美味しいお野菜、魚、お肉で美味しい料理を提供しております。毎日変わるおすすめメニューも大人気です。ワインと一緒にお楽しみください。</p>
              </article>

              <article className="philosophy-card">
                <div className="philosophy-image">
                  <img src="/2025素材/こだわり2.jpg" alt="気軽に立ち寄れる" />
                </div>
                <div className="philosophy-number">02</div>
                <h3>気軽に立ち寄れる</h3>
                <p>気軽に立ち寄れるワイン酒場です。ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富です。オーナーが美味しいと思うワインを取り揃えています。お気軽にふらっとお立ち寄りください。</p>
              </article>

              <article className="philosophy-card">
                <div className="philosophy-image">
                  <img src="/2025素材/こだわり3コース料理.jpg" alt="パーティーコース" />
                </div>
                <div className="philosophy-number">03</div>
                <h3>パーティーコース</h3>
                <p>美味しいパーティーコースをご用意しています。お得なコースメニューは2,980円から3種類ございます。飲み放題付きコースも人気です。女子会、お仲間とのご宴会におすすめです。</p>
              </article>

              <article className="philosophy-card">
                <div className="philosophy-image">
                  <img src="/2025素材/ガーリックトーストとワイン.jpg" alt="グラスワイン" />
                </div>
                <div className="philosophy-number">04</div>
                <h3>リーズナブルなグラスワイン</h3>
                <p>コスパ最高の美味しいワインを取り揃えております。日替わりグラスワインは580円～。美味しいワインを気軽にお楽しみください。ボトルワインも各種ご用意しております。</p>
              </article>

              <article className="philosophy-card">
                <div className="philosophy-image">
                  <img src="/2025素材/こだわり5.jpg" alt="チーズメニュー" />
                </div>
                <div className="philosophy-number">05</div>
                <h3>絶品チーズメニュー</h3>
                <p>ワインとチーズをお楽しみください。オーナーシェフが厳選した絶品チーズを使ったメニューも人気です。ワインとチーズの組み合わせは最高の贅沢です。</p>
              </article>
            </div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="features-section">
          <div className="container">
            <h2>特徴</h2>
            <div className="features-list">
              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/内装1.jpg" alt="衛生対策" />
                </div>
                <h3>🏆 衛生対策は万全</h3>
                <p>お客様の健康と安全を最優先に、万全な衛生対策を実施しております。</p>
              </article>

              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/フレッシュなサラダ.jpg" alt="旬の食材" />
                </div>
                <h3>🍽️ 旬の食材を使ったコスパ最高の美味しい料理</h3>
                <p>季節ごとの新鮮な食材を厳選し、美味しい料理をリーズナブルな価格でご提供します。</p>
              </article>

              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/クラフトビール.jpg" alt="厳選ワイン" />
                </div>
                <h3>🍷 自分達が美味しいと思ったワインだけをご用意</h3>
                <p>ワインの専門家はいません。オーナーが本当に美味しいと思ったワインだけを厳選してご用意しています。</p>
              </article>

              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/内装2.jpg" alt="様々なシーン" />
                </div>
                <h3>👥 様々なシーンにご利用ください</h3>
                <p>女子会、記念日、友人とのお食事、一人飲み、お仕事帰り。様々なシーンでお気軽にどうぞ。</p>
              </article>

              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/豚カシラ肉の柔らかグリル.jpg" alt="お祝い" />
                </div>
                <h3>🎉 誕生日のサプライズも大歓迎</h3>
                <p>誕生日のお祝いに！ケーキ持ち込み可能です。大切な時間をお手伝いさせていただきます。</p>
              </article>

              <article className="feature-list-item">
                <div className="feature-image">
                  <img src="/2025素材/内装2.jpg" alt="明るい店内" />
                </div>
                <h3>😊 居心地の良い明るい店内</h3>
                <p>いつも笑顔が溢れる明るい店内です。初めての方もお気軽にお越しください。</p>
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

export default About;