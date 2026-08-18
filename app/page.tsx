const events = [
  { time: "11:58", title: "Luncheon", chinese: "午宴", icon: "♢" },
  { time: "17:00", title: "Guest Arrival", chinese: "迎宾", icon: "◉" },
  { time: "18:08", title: "Ceremony", chinese: "仪式", icon: "∞" },
  { time: "20:30", title: "Fireworks", chinese: "烟花", icon: "✦" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="Wedding invitation cover">
        <div className="hero-shade" />
        <header className="hero-header">
          <p className="eyebrow">WEDDING INVITATION</p>
          <p className="date-top">NOVEMBER 29, 2026 · SUNDAY</p>
        </header>
        <div className="hero-center">
          <p className="together">TOGETHER WITH OUR FAMILIES</p>
          <div className="double-happiness" aria-label="Double happiness">囍</div>
          <p className="names">Sizhen <span>&amp;</span> Beloved</p>
          <p className="invite-copy">诚挚邀请您<br />见证我们的幸福时刻</p>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO DISCOVER</span><i />
        </div>
      </section>

      <section className="timeline-section" aria-labelledby="timeline-title">
        <div className="paper-noise" />
        <div className="whale-mark" aria-hidden="true">◡　◡</div>
        <p className="eyebrow dark">OUR WEDDING DAY</p>
        <h1 id="timeline-title">Wedding Timeline</h1>
        <p className="intro">诚挚地邀请您作为最重要的家人和朋友<br />出席我们的婚礼</p>
        <div className="couple-doodle" aria-hidden="true">
          <span>♙</span><span className="heart">♡</span><span>♕</span>
        </div>
        <div className="timeline">
          {events.map((event) => (
            <article className="event" key={event.time}>
              <time>{event.time}</time><span className="dot" />
              <span className="event-icon" aria-hidden="true">{event.icon}</span>
              <div><h2>{event.title}</h2><p>{event.chinese}</p></div>
            </article>
          ))}
        </div>
        <footer className="details">
          <p className="date-large">2026.11.29</p>
          <p>舜杰明都 · 常州</p>
          <div className="seal">囍</div>
        </footer>
      </section>
    </main>
  );
}
