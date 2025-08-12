import React from "react";

const LoadingItachiSharingan = () => {
  const tomoePositions = [0, 120, 240]; // degrees around the circle

  // This path is a more faithful comma shape with a sharp tail,
  // designed to visually resemble Itachi's tomoe.
  // Approximate size 32x32 units.
  const tomoePath = `
    M16 2
    C10 6 8 18 16 24
    C20 28 28 22 24 16
    C26 8 20 4 16 2
    Z
    M23 9
    L27 3
    L21 7
    Z
  `;

  return (
    <>
      <style>{`
        .sharingan {
          width: 180px;
          height: 180px;
          margin: auto;
          animation: spin 5s linear infinite;
          filter: drop-shadow(0 0 16px #b30000);
          cursor: wait;
          user-select: none;
        }

        .iris {
          fill: url(#irisGrad);
          stroke: #3e0000;
          stroke-width: 5;
          filter: drop-shadow(0 0 15px #7a0000);
        }

        .pupil {
          fill: #000;
          filter: drop-shadow(0 0 8px #000);
        }

        .tomoe {
          fill: #440000;
          filter: drop-shadow(0 0 8px #660000);
          transition: fill 0.3s ease;
          cursor: default;
        }

        .tomoe:hover {
          fill: #ff0000;
          filter: drop-shadow(0 0 18px #ff4d4d);
        }

        @keyframes spin {
          from { transform: rotate(0deg);}
          to { transform: rotate(360deg);}
        }
      `}</style>

      <svg
        className="sharingan"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Itachi Sharingan Loading"
        role="img"
      >
        <defs>
          <radialGradient id="irisGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ff1a1a" />
            <stop offset="100%" stopColor="#300000" />
          </radialGradient>
        </defs>

        {/* Iris */}
        <circle cx="75" cy="75" r="70" className="iris" />

        {/* Pupil */}
        <circle cx="75" cy="75" r="28" className="pupil" />

        {/* Tomoe (3 commas) */}
        {tomoePositions.map((angle, idx) => {
          const radius = 48;
          // Convert angle degrees to radians
          const rad = (angle * Math.PI) / 180;
          const cx = 75 + radius * Math.cos(rad);
          const cy = 75 + radius * Math.sin(rad);

          return (
            <g
              key={idx}
              transform={`
                translate(${cx}, ${cy})
                rotate(${angle + 90})
                translate(-16, -16)
              `}
            >
              <path className="tomoe" d={tomoePath} />
            </g>
          );
        })}
      </svg>
    </>
  );
};

export default LoadingItachiSharingan;
