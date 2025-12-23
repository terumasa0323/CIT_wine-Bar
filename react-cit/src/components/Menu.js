import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
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
          <li><Link to="/menu" className="active">メニュー</Link></li>
          <li><Link to="/about">店舗紹介</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>メニュー</h1>
            <p>旬の食材を使った、コスパ最高の美味しい料理をお楽しみください</p>
          </div>
        </section>

        {/* コースメニュー */}
        <section className="menu-section">
          <div className="container">
            <h2>コースメニュー</h2>
            <div className="menu-grid">
              <article className="menu-card">
                <div className="menu-image">
                  <img src="/2025素材/カジュアルメニュー.jpg" alt="カジュアルコース" />
                </div>
                <h3>カジュアルコース</h3>
                <p className="price">2,980円</p>
                <ul className="menu-items">
                  <li>前菜盛り合わせ</li>
                  <li>パスタまたはリゾット</li>
                  <li>メイン料理</li>
                  <li>デザート</li>
                </ul>
                <p className="description">気軽に楽しめるカジュアルなコースです。</p>
              </article>

              <article className="menu-card featured">
                <div className="menu-image">
                  <img src="/2025素材/スタンダード.jpg" alt="スタンダードコース" />
                </div>
                <h3>スタンダードコース</h3>
                <p className="price">3,980円</p>
                <ul className="menu-items">
                  <li>前菜2品</li>
                  <li>スープ</li>
                  <li>パスタまたはリゾット</li>
                  <li>メイン料理</li>
                  <li>デザート</li>
                  <li>ドリンク付き</li>
                </ul>
                <p className="description">最も人気のバランスの取れたコースです。</p>
              </article>

              <article className="menu-card">
                <div className="menu-image">
                  <img src="/2025素材/プレミアムコース.jpg" alt="プレミアムコース" />
                </div>
                <h3>プレミアムコース</h3>
                <p className="price">5,980円</p>
                <ul className="menu-items">
                  <li>前菜3品</li>
                  <li>スープ</li>
                  <li>パスタ</li>
                  <li>主菜（国産牛肉使用）</li>
                  <li>チーズ盛り合わせ</li>
                  <li>デザート</li>
                  <li>ドリンク付き</li>
                </ul>
                <p className="description">特別な日をお祝いするコースです。</p>
              </article>
            </div>
          </div>
        </section>

        {/* グラスワイン */}
        <section className="wine-section">
          <div className="container">
            <h2>グラスワイン</h2>
            <p className="section-description">日替わりでセレクト。コスパ最高の美味しいワインを気軽にお楽しみください。</p>
            <div className="wine-grid">
              <article className="wine-card">
                <div className="wine-image">
                  <img src="/2025素材/白ワイン.jpg" alt="ホワイトワイン" />
                </div>
                <h3>ホワイトワイン</h3>
                <p className="wine-price">580円～</p>
                <p>爽やかで飲みやすい白ワイン。前菜やシーフード料理と相性抜群です。</p>
              </article>
              <article className="wine-card">
                <div className="wine-image">
                  <img src="/2025素材/赤ワイン.jpg" alt="レッドワイン" />
                </div>
                <h3>レッドワイン</h3>
                <p className="wine-price">680円～</p>
                <p>コクのある赤ワイン。国産牛肉やパスタ料理に最適です。</p>
              </article>
              <article className="wine-card">
                <div className="wine-image">
                  <img src="/2025素材/スパークリングワイン.jpg" alt="スパークリング" />
                </div>
                <h3>スパークリング</h3>
                <p className="wine-price">780円～</p>
                <p>華やかなスパークリング。お祝い事やパーティーにぴったり。</p>
              </article>
              <article className="wine-card">
                <div className="wine-image">
                  <img src="/2025素材/ロゼワイン.jpg" alt="ロゼワイン" />
                </div>
                <h3>ロゼワイン</h3>
                <p className="wine-price">650円～</p>
                <p>優雅でバランスの取れたロゼワイン。どんな料理にも合わせやすい。</p>
              </article>
            </div>
          </div>
        </section>

        {/* チーズメニュー */}
        <section className="cheese-section">
          <div className="container">
            <h2>チーズメニュー - 絶品!</h2>
            <p className="section-description">オーナーシェフ厳選の絶品チーズ。ワインとの相性は抜群です。</p>
            <div className="cheese-grid">
              <article className="cheese-card">
                <div className="cheese-image">
                  <img src="/2025素材/チーズ盛り合わせ.jpg" alt="チーズ盛り合わせ" />
                </div>
                <h3>チーズ盛り合わせ</h3>
                <p className="price">2,500円</p>
                <p>厳選3種類のチーズとハム、ドライフルーツを盛り合わせ。ワインのお供に最高です。</p>
              </article>
              <article className="cheese-card">
                <div className="cheese-image">
                  <img src="/2025素材/モッツァレラチーズトマト.jpg" alt="モッツァレラとトマト" />
                </div>
                <h3>モッツァレラとトマト</h3>
                <p className="price">1,200円</p>
                <p>新鮮なモッツァレラチーズとトマトの前菜。シンプルながら最高の一品。</p>
              </article>
              <article className="cheese-card">
                <div className="cheese-image">
                  <img src="/2025素材/チーズパスタ.jpg" alt="チーズパスタ" />
                </div>
                <h3>チーズパスタ</h3>
                <p className="price">1,500円</p>
                <p>濃厚なチーズソースのパスタ。国産牛肉のベーコンをトッピング。</p>
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

export default Menu;