import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="outline-text">
        <br/>
          GET FIT
        </div>

        <div className="outline-text">
          WITH
        </div>

        <h1>
          KINETIX
          <br />
          FITNESS
          <br/>
          CLUB
        
        </h1>

      </div>

      <div className="hero-right">

        <video
          src="/images/gym-video.mp4"
           autoPlay
          loop
          muted
          playsInline
        />

        {/* <div className="join-box">
          <span>Join Our Gym</span>
          <span className="arrow">+</span>
        </div> */}

      </div>

    </section>
  );
}

export default Hero;