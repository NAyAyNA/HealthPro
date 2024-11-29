import React from "react";


export default function Percentage() {
  const [progress, setProgress] = React.useState(0);
  
  const generateRandomPercentage = () => Math.floor(Math.random() * 101);

  React.useEffect(() => {
    // Generate random percentage on page load
    setProgress(generateRandomPercentage());
  }, []);

  return (
    <div className="circular-container">
      <div
        className="circular-progress"
        style={{
          background: `conic-gradient(
            #5BD489 0% ${progress}%, 
            rgba(91, 212, 137, 0.3) ${progress}% 100%
          )`,
        }}
      >
        <div className="inner-circle">
          <span className="progress-value">{progress}%</span>
        </div>
      </div>
    </div>
  );
}