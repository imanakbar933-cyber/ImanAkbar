import "./Marquee.css";

const MarqueeItems = () => (
  <>
    <span className="white-text">FITNESS ESSENTIALS</span>
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
    <span className="green-text">WORKOUT CENTRAL</span>
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
    <span className="white-text">FIT ZONE HIGHLIGHTS</span>
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
    {/* <span className="green-text">TRAINING HUB</span>
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
    <span className="white-text">FITNESS HEADQUARTERS</span> */}
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
    <span className="green-text">GEAR UP</span>
    <img src="/images/dumbbell.jpg" alt="Dumbbell" className="dumbbell-icon" />
  </>
);

function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-row row-one">
        <div className="marquee-track">
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
      <div className="marquee-row row-two">
        <div className="marquee-track">
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </section>
  );
}

export default Marquee;