import "./WorkoutAnimation.css";

function WorkoutAnimation() {
  return (
    <section className="workout-animation">

      {/* Background text */}
      <div className="workout-bg-text">
        TRAIN
      </div>

      {/* Dumbbells falling */}
      <div className="falling-dumbbells">

        <div className="falling-dumbbell dumbbell-1">
          🏋️
        </div>

        <div className="falling-dumbbell dumbbell-2">
          🏋️
        </div>

        <div className="falling-dumbbell dumbbell-3">
          🏋️
        </div>

      </div>

      {/* Cartoon Character */}
      <div className="fitness-character">

        {/* Head */}
        <div className="character-head">
          <div className="eye eye-left"></div>
          <div className="eye eye-right"></div>
          <div className="character-mouth"></div>
        </div>

        {/* Body */}
        <div className="character-body"></div>

        {/* Left Arm */}
        <div className="character-arm arm-left">
          <div className="character-hand"></div>
        </div>

        {/* Right Arm */}
        <div className="character-arm arm-right">
          <div className="character-hand"></div>
        </div>

        {/* Legs */}
        <div className="character-leg leg-left"></div>
        <div className="character-leg leg-right"></div>

        {/* Dumbbells */}
        <div className="character-dumbbell dumbbell-left">
          <span></span>
        </div>

        <div className="character-dumbbell dumbbell-right">
          <span></span>
        </div>

      </div>

      {/* Ground */}
      <div className="workout-ground"></div>

      {/* Text */}
      <div className="workout-caption">

        <span>— — — — — —  — PUSH YOUR LIMITS</span>

        <h3>
          MOVE.
          <br />
          <strong>BUILD.</strong>
          <br />
          REPEAT.
        </h3>

      </div>

    </section>
  );
}

export default WorkoutAnimation;