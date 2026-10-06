import { useEffect, useRef } from "react";
import "./InfoCards.css";

function InfoCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // ===== Scroll Reveal — turant trigger =====
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
    {
  threshold: 0,
  rootMargin: "0px 0px 150px 0px",
}
    );

    const elements = sectionRef.current.querySelectorAll(".card-animate");
    elements.forEach((el) => observer.observe(el));

    // ===== 3D Tilt Effect =====
    const tiltCards = sectionRef.current.querySelectorAll(".info-card-image");

    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    };

    const handleLeave = (e) => {
      const card = e.currentTarget;
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
    };

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      observer.disconnect();
      tiltCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const cardsData = [
    {
      number: "01",
      title: "EMPOWERING\nHEALTHIER LIVES",
      image: "/images/card2.jpg",
      desc: "At KINETIX, we are dedicated to empowering individuals to lead healthier lives. We provide the tools, support, and guidance needed to achieve fitness goals, improve overall well-being, and foster a sustainable commitment to health.",
    },
    {
      number: "02",
      title: "BUILDING A SUPPORTIVE\nCOMMUNITY",
      image: "/images/card3.jpg",
      desc: "At KINETIX, we are dedicated to building a supportive community where every member feels valued. We provide the tools, support, and guidance needed to achieve fitness goals, improve overall well-being, and foster a sustainable commitment to health.",
    },
  ];

  return (
    <section className="info-cards" ref={sectionRef}>
      <div className="info-cards-grid">
        {cardsData.map((card, i) => (
          <div
            className="info-card card-animate"
            key={i}
            style={{ "--delay": `${i * 0.08}s` }}
          >
            <div className="info-card-image">
              <img src={card.image} alt={card.title} />

              {/* Glitch layer */}
              <div className="glitch-layer"></div>

              {/* Scan line */}
              <div className="scan-line"></div>

              {/* Cursor spotlight */}
              <div className="cursor-glow"></div>

              {/* Ripple ring */}
              <div className="ripple-ring"></div>

              <div className="info-card-overlay"></div>

              <div className="info-card-content">
                <span className="info-card-number">{card.number}</span>
                <h3 className="info-card-title">
                  {card.title.split("\n").map((line, idx) => (
                    <span key={idx} className="line">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
            </div>

            <p className="info-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;