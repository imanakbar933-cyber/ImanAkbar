import { useEffect, useRef } from "react";
import "./InfoCards.css";

function InfoCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll(".card-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cardsData = [
    {
      number: "01",
      title: "EMPOWERING\nHEALTHIER LIVES",
      image: "/images/card1.jpg",
      desc: "At GYMFreak TNC, we are dedicated to empowering individuals to lead healthier lives. We provide the tools, support, and guidance needed to achieve fitness goals, improve overall well-being, and foster a sustainable commitment to health.",
    },
    {
      number: "02",
      title: "BUILDING A SUPPORTIVE\nCOMMUNITY",
      image: "/images/card2.jpg",
      desc: "At GYMFreak TNC, we are dedicated to empowering individuals to lead healthier lives. We provide the tools, support, and guidance needed to achieve fitness goals, improve overall well-being, and foster a sustainable commitment to health.",
    },
  ];

  return (
    <section className="info-cards" ref={sectionRef}>
      <div className="info-cards-grid">
        {cardsData.map((card, i) => (
          <div
            className="info-card card-animate"
            key={i}
            style={{ "--delay": `${i * 0.15}s` }}
          >
            {/* Image */}
            <div className="info-card-image">
              <img src={card.image} alt={card.title} />
              <div className="info-card-overlay"></div>

              {/* Number + Title */}
              <div className="info-card-content">
                <span className="info-card-number">{card.number}</span>
                <h3 className="info-card-title">
                  {card.title.split("\n").map((line, idx) => (
                    <span key={idx} className="line">{line}</span>
                  ))}
                </h3>
              </div>

              {/* Neon corner borders */}
              <span className="corner corner-tl"></span>
              <span className="corner corner-tr"></span>
              <span className="corner corner-bl"></span>
              <span className="corner corner-br"></span>
            </div>

            {/* Description below */}
            <p className="info-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;