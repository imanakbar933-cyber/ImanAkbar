import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Trainers.css";

function Trainers() {
  const sectionRef = useRef(null);

  const trainersData = [
    { id: 1, name: "HENRY ",    image: "/images/trainer1.jpg", role: "Strength Coach" },
    { id: 2, name: "JAMES ",    image: "/images/trainer2.jpg", role: "HIIT Specialist" },
    { id: 3, name: "MIKE ",  image: "/images/trainer3.jpg", role: "Bodybuilding Coach" },
    { id: 4, name: "DAVID KHAN",      image: "/images/trainer4.jpg", role: "CrossFit Trainer" },
    { id: 5, name: "ALEX BROWN",      image: "/images/trainer5.jpg", role: "Yoga & Mobility" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

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

    const elements = sectionRef.current.querySelectorAll(".trainer-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 > trainersData.length - visibleCount ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? trainersData.length - visibleCount : prev - 1
    );
  };

  return (
    <section className="trainers" ref={sectionRef}>
      <div className="trainers-container">

        {/* ===== LEFT SIDE ===== */}
        <div className="trainers-left trainer-animate">

          <span className="trainers-tag">OUR TEAM</span>

          <h2 className="trainers-heading">
            <span className="line">
              <span className="word" style={{ "--i": 0 }}>THE</span>
              <span className="word" style={{ "--i": 1 }}>FACES</span>
            </span>
            <span className="line">
              <span className="word" style={{ "--i": 2 }}>BEHIND</span>
            </span>
            <span className="line">
              <span className="word green" style={{ "--i": 3 }}>KINETIX</span>
            </span>
          </h2>

          <div className="trainers-controls">
            <button className="trainer-arrow" onClick={handlePrev} aria-label="Previous">
              ←
            </button>
            <button className="trainer-arrow" onClick={handleNext} aria-label="Next">
              →
            </button>
          </div>
        </div>

        {/* ===== RIGHT SIDE — SLIDER ===== */}
        <div className="trainers-slider trainer-animate">
          <div
            className="trainers-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCount} + 20px)))`,
            }}
          >
            {trainersData.map((trainer, idx) => (
              <Link
                to={`/trainers/${trainer.id}`}
                className="trainer-card"
                key={trainer.id}
                style={{ "--idx": idx }}
              >
                <div className="trainer-card-image">
                  <img src={trainer.image} alt={trainer.name} />

                  {/* Moving neon sweep */}
                  <div className="trainer-sweep"></div>

                  {/* Scan line */}
                  <div className="trainer-scan"></div>

                  {/* Overlay */}
                  <div className="trainer-card-overlay"></div>

                  {/* Content */}
                  <h3 className="trainer-card-name">{trainer.name}</h3>
                  <span className="trainer-card-arrow">↗</span>

                  {/* Neon corners */}
                  <span className="t-corner t-tl"></span>
                  <span className="t-corner t-tr"></span>
                  <span className="t-corner t-bl"></span>
                  <span className="t-corner t-br"></span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Trainers;