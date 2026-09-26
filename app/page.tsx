const events = [
  { time: "11:58", title: "Luncheon", chinese: "午宴", icon: "/icons/bowl-chopsticks.svg" },
  { time: "17:00", title: "Guest Arrival", chinese: "迎宾", icon: "/icons/camera.svg" },
  { time: "18:08", title: "Ceremony & Dinner", chinese: "仪式&晚宴", icon: "/icons/cheers.svg", iconClass: "cheers" },
  { time: "20:30", title: "Fireworks", chinese: "烟花", icon: "/icons/sparkles.svg", iconClass: "fireworks" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="Wedding invitation cover">
        <div className="hero-shade" />
        <header className="hero-header">
          <div className="header-happiness" aria-label="Double happiness">囍</div>
          <p className="welcome">Welcome to our wedding</p>
          <p className="names">Lingbo <span>&amp;</span> Sizhen</p>
          <p className="together">TOGETHER WITH OUR FAMILIES</p>
        </header>
        <div className="hero-center">
          <p className="chinese-names">莫凌波 <span>&amp;</span> 李思珍</p>
          <p className="invite-copy"><span className="invite-date">26/11/29 Sunday</span> ｜ 舜杰明都 · 常州 · 江苏</p>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO DISCOVER</span><i />
        </div>
      </section>

      <section className="timeline-section" aria-label="Wedding day schedule">
        <div className="paper-noise" />
        <div className="timeline-art" aria-hidden="true">
          <img src="/changzhou-dinosour2.png" alt="" />
        </div>
        <p className="eyebrow dark">OUR WEDDING DAY</p>
        <p className="intro">诚挚地邀请您作为最重要的家人和朋友<br />出席我们的婚礼</p>
        <div className="timeline">
          {events.map((event) => (
            <article className="event" key={event.time}>
              <time>{event.time}</time><span className="dot" />
              <span className={`event-icon ${event.iconClass ?? ""}`} aria-hidden="true">
                <img src={event.icon} alt="" />
              </span>
              <div><h2>{event.title}</h2><p>{event.chinese}</p></div>
            </article>
          ))}
        </div>
        <footer className="details">
          <p className="detail-heading">Address</p>
          <p className="address-line">江苏省常州市天宁区焦溪镇常焦路2号</p>
          <div className="seal">囍</div>
        </footer>
      </section>
    </main>
  );
}
