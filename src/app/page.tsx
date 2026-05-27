"use client";
import Image from "next/image";
import { useState } from "react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.masero.yeWerq";
const TG_URL   = "https://t.me/gold_ethiopia";
const FB_URL   = "https://www.facebook.com/share/1AgeRwNrVG/";

const TRUST_BADGES = [
  { value: "4.6★", label: "Google Play rating" },
  { value: "NBE", label: "Official linked rates" },
  { value: "24/7", label: "Live price tracking" },
  { value: "Free", label: "Free forever" },
];

/** Full copy for “See all features” section only */
const FEATURES = [
  { icon: "📈", title: "Live NBE Prices", desc: "Real-time 24K–14K gold rates from the National Bank of Ethiopia, updated every minute." },
  { icon: "📊", title: "Historical Charts", desc: "Interactive trend charts — 7 days, 1 month, 3 months, 1 year." },
  { icon: "🔔", title: "Price Alerts", desc: "Get notified when gold hits your target price." },
  { icon: "🧮", title: "Gold Calculator", desc: "Convert grams & karats. Estimate value in ETB and USD." },
  { icon: "🌍", title: "English & Amharic", desc: "Full bilingual support — switch anytime." },
  { icon: "📰", title: "Local & Global News", desc: "Latest Ethiopian and international gold market news." },
  { icon: "👥", title: "Market Community", desc: "Join traders on Telegram and Facebook." },
];

/** Compact data shown inside the phone mock only */
const PHONE_RATES = [
  { karat: "24K", price: "12,540", change: "+0.4%", up: true },
  { karat: "22K", price: "11,520", change: "+0.3%", up: true },
  { karat: "21K", price: "11,000", change: "−0.1%", up: false },
  { karat: "18K", price: "9,450", change: "+0.2%", up: true },
  { karat: "14K", price: "7,340", change: "0.0%", up: true },
];

const PHONE_SHORTCUTS = [
  { icon: "📈", label: "NBE" },
  { icon: "📊", label: "Charts" },
  { icon: "🔔", label: "Alerts" },
  { icon: "🧮", label: "Calc" },
];

const QR_PLAY_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&data=${encodeURIComponent(PLAY_URL)}`;

export default function AdPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <header className="yl-header">
        <div className="container yl-header-inner">
          <div className="yl-brand">
            <Image src="/logo.png" alt="Gold Ethiopia logo" width={34} height={34} className="yl-logo" />
            <div className="yl-brand-text">
              <div className="yl-brand-name">Gold Ethiopia</div>
              <div className="yl-brand-tag">Live gold prices · Ethiopia</div>
            </div>
          </div>
          <div className="yl-header-actions">
            <a className="yl-pill yl-pill-gold" href={PLAY_URL} target="_blank" rel="noreferrer">
              <PlayIcon /> Download
            </a>
          </div>
        </div>
      </header>

      <main className="yl-main">
        <section className="yl-hero">
          <div className="yl-orb yl-orb-gold" />
          <div className="yl-orb yl-orb-blue" />

          <div className="container yl-hero-grid">
            <div className="yl-hero-copy">
              <div className="yl-eyebrow animate-fade-up">
                <span className="yl-dot" />
                NBE-Linked · National Bank of Ethiopia rates · LIVE
              </div>

              <h1 className="yl-title animate-fade-up delay-100">
                Track Ethiopian gold prices. <span className="yl-title-live">Live.</span>
              </h1>

              <p className="yl-amharic animate-fade-up delay-100">
                የወርቅ ዋጋ በቀጥታ ይከታተሉ — ነፃ
              </p>

              <p className="yl-social-proof animate-fade-up delay-200">
                Trusted by 500+ Ethiopian traders &amp; jewelers in Addis Ababa
              </p>

              <p className="yl-subtitle animate-fade-up delay-200">
                Real-time <strong>24K–14K</strong> rates in ETB and USD. Karat calculator, price alerts,
                and market news — free on Android.
              </p>

              <div className="yl-trust-qr-wrap animate-fade-up delay-200">
                <div className="yl-trust">
                  {TRUST_BADGES.map((b) => (
                    <div key={b.label} className="yl-trust-item">
                      <div className="yl-trust-value">{b.value}</div>
                      <div className="yl-trust-label">{b.label}</div>
                    </div>
                  ))}
                </div>

                <div className="yl-qr-card">
                  <img
                    src={QR_PLAY_URL}
                    width={120}
                    height={120}
                    alt="QR code — scan to download Gold Ethiopia on Google Play"
                    className="yl-qr-img"
                  />
                  <p className="yl-qr-caption">Scan to download</p>
                  <p className="yl-qr-sub">Google Play · Free</p>
                </div>
              </div>

              <div className="yl-ctas animate-fade-up delay-300">
                <a
                  id="cta-download"
                  className="yl-cta-primary"
                  href={PLAY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PlayIcon size={22} />
                  Download on Google Play — Free
                </a>
                <p className="yl-ios-note">Coming soon on iOS (App Store)</p>

                <div className="yl-cta-secondary">
                  <LinkCard
                    href={TG_URL}
                    title="Join Telegram"
                    subtitle="Telegram"
                    color="tg"
                    icon={<TgIcon size={18} />}
                  />
                  <LinkCard
                    href={FB_URL}
                    title="Follow on Facebook"
                    subtitle="Gold Ethiopia"
                    color="fb"
                    icon={<FbIcon size={18} />}
                  />
                </div>

                <button
                  type="button"
                  className="yl-features-link"
                  onClick={() => setShowDetails((v) => !v)}
                >
                  {showDetails ? "Hide features ↑" : "See all features →"}
                </button>
              </div>
            </div>

            <div className="yl-hero-media">
              <div className="yl-device-wrap animate-float delay-200">
                <div className="yl-device" aria-hidden="true">
                  <span className="yl-device-btn yl-device-btn-vol" />
                  <span className="yl-device-btn yl-device-btn-vol yl-device-btn-vol-2" />
                  <span className="yl-device-btn yl-device-btn-power" />

                  <div className="yl-device-bezel">
                    <div className="yl-device-island">
                      <span className="yl-device-cam" />
                    </div>

                    <div className="yl-device-screen">
                      <div className="yl-app-status">
                        <span>9:41</span>
                        <span className="yl-app-status-icons">
                          <span className="yl-signal" />
                          <span className="yl-wifi" />
                          <span className="yl-battery" />
                        </span>
                      </div>

                      <div className="yl-app-header">
                        <Image src="/logo.png" alt="" width={32} height={32} className="yl-app-logo" />
                        <div className="yl-app-header-text">
                          <span className="yl-app-name">Gold Ethiopia</span>
                          <span className="yl-app-live">
                            <span className="yl-app-live-dot" /> Live · NBE
                          </span>
                        </div>
                      </div>

                      <div className="yl-app-tabs">
                        <span className="yl-app-tab yl-app-tab-active">Today</span>
                        <span className="yl-app-tab">Week</span>
                        <span className="yl-app-tab">Month</span>
                      </div>

                      <div className="yl-app-hero">
                        <div className="yl-app-hero-label">24K Gold · per gram</div>
                        <div className="yl-app-hero-price">
                          12,540 <span className="yl-app-hero-unit">ETB</span>
                        </div>
                        <div className="yl-app-hero-meta">
                          <span className="yl-app-hero-up">↑ 0.4%</span>
                          <span>Updated 1 min ago</span>
                        </div>
                        <div className="yl-app-spark" />
                      </div>

                      <ul className="yl-app-rates">
                        {PHONE_RATES.slice(1).map((r) => (
                          <li key={r.karat} className="yl-app-rate">
                            <span className="yl-app-rate-k">{r.karat}</span>
                            <span className="yl-app-rate-p">{r.price} ETB</span>
                            <span className={r.up ? "yl-app-rate-c up" : "yl-app-rate-c down"}>{r.change}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="yl-app-shortcuts">
                        {PHONE_SHORTCUTS.map((s) => (
                          <div key={s.label} className="yl-app-shortcut">
                            <span className="yl-app-shortcut-icon">{s.icon}</span>
                            <span>{s.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="yl-app-home" />
                    </div>
                  </div>

                  <div className="yl-device-shine" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {showDetails ? (
          <section className="yl-details" id="details">
            <div className="container">
              <div className="yl-details-head">
                <div className="yl-section-kicker">WHAT YOU GET</div>
                <h2 className="yl-section-title">Everything you need to follow gold in Ethiopia</h2>
                <p className="yl-section-sub">Built for traders, jewelers, and investors.</p>
              </div>

              <div className="yl-feature-grid">
                {FEATURES.map((f) => (
                  <div key={f.title} className="yl-feature">
                    <div className="yl-feature-icon">{f.icon}</div>
                    <div className="yl-feature-title">{f.title}</div>
                    <div className="yl-feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <footer className="yl-footer">
          <div className="container yl-footer-inner">
            <div className="yl-footer-left">
              <Image src="/logo.png" alt="Gold Ethiopia" width={26} height={26} className="yl-logo" />
              <div>
                <div className="yl-footer-brand">Gold Ethiopia</div>
                <div className="yl-footer-sub">Free on Android · iOS coming soon</div>
              </div>
            </div>
            <div className="yl-footer-links">
              <SocialBtn href={PLAY_URL} color="#FFD700" label="Google Play" icon={<PlayIcon />} />
              <SocialBtn href={TG_URL} color="#229ED9" label="Telegram" icon={<TgIcon />} />
              <SocialBtn href={FB_URL} color="#1877F2" label="Facebook" icon={<FbIcon />} />
            </div>
            <div className="yl-footer-right">© {new Date().getFullYear()} Gold Ethiopia</div>
          </div>
        </footer>
      </main>
    </>
  );
}

function SocialBtn({
  href,
  color,
  label,
  icon,
}: {
  href: string;
  color: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 14px",
        border: `1px solid ${color}33`,
        borderRadius: 10,
        color,
        fontWeight: 600,
        fontSize: 13,
        textDecoration: "none",
        background: `${color}11`,
        transition: "all 0.2s",
      }}
    >
      {icon} {label}
    </a>
  );
}

function LinkCard({
  href,
  title,
  subtitle,
  icon,
  color,
}: {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "tg" | "fb";
}) {
  const cls = color === "tg" ? "yl-card yl-card-tg" : "yl-card yl-card-fb";

  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      <span className="yl-card-icon">{icon}</span>
      <span className="yl-card-text">
        <span className="yl-card-title">{title}</span>
        <span className="yl-card-subtitle">{subtitle}</span>
      </span>
      <span className="yl-card-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

function TgIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.82-.76 4.39-1.07 6.07-.13.71-.39.95-.64.97-.56.05-1-.37-1.54-.73-.85-.56-1.33-.9-2.16-1.45-.96-.63-.34-.98.21-1.55.14-.15 2.65-2.43 2.7-2.65.01-.03.01-.15-.06-.21-.07-.06-.18-.04-.26-.02-.11.02-1.89 1.2-5.33 3.52-.5.35-.96.52-1.37.51-.45-.01-1.32-.26-1.97-.47-.79-.26-1.42-.4-1.36-.85.03-.23.35-.47.95-.71 3.71-1.61 6.19-2.68 7.42-3.2 3.53-1.48 4.26-1.74 4.74-1.75.11 0 .35.03.5.16.13.11.17.26.18.37.01.07.02.24.01.4z" />
    </svg>
  );
}

function FbIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );
}

function PlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.18 23.76a2 2 0 001.96-.06l16-9.24a2 2 0 000-3.46L5.14.36A2 2 0 002 2.12v19.76a2 2 0 001.18 1.88z" />
    </svg>
  );
}
