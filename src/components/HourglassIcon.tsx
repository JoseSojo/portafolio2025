import React from 'react';

interface HourglassIconProps {
  className?: string;
  size?: number;
}

const HourglassIcon: React.FC<HourglassIconProps> = ({ className = '', size = 32 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Gradients for 3D effect */}
        <defs>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="sandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.6" />
          </linearGradient>
          <filter id="innerShadow">
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="1" result="offset-blur"/>
            <feFlood floodColor="#92400e" floodOpacity="0.3"/>
            <feComposite in2="offset-blur" operator="in"/>
          </filter>
        </defs>

        {/* Main hourglass shape */}
        <g className="transform-gpu">
          {/* Top bulb */}
          <path
            d="M8 4 L24 4 L24 12 L16 16 L8 12 Z"
            fill="url(#glassGradient)"
            stroke="#d97706"
            strokeWidth="0.5"
            filter="url(#innerShadow)"
          />
          
          {/* Bottom bulb */}
          <path
            d="M8 20 L16 16 L24 20 L24 28 L8 28 Z"
            fill="url(#glassGradient)"
            stroke="#d97706"
            strokeWidth="0.5"
            filter="url(#innerShadow)"
          />

          {/* Sand in top bulb */}
          <path
            d="M9 5 L23 5 L23 10 L16 14 L9 10 Z"
            fill="url(#sandGradient)"
            opacity="0.9"
          />

          {/* Sand in bottom bulb */}
          <path
            d="M9 22 L16 18 L23 22 L23 27 L9 27 Z"
            fill="url(#sandGradient)"
            opacity="0.9"
          />

          {/* Falling sand stream */}
          <rect
            x="15.5"
            y="14"
            width="1"
            height="4"
            fill="#fcd34d"
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Sand particles */}
          <circle cx="15" cy="15" r="0.5" fill="#fcd34d" opacity="0.6">
            <animate
              attributeName="cy"
              values="15;17;15"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="17" cy="16" r="0.3" fill="#fde68a" opacity="0.5">
            <animate
              attributeName="cy"
              values="16;18;16"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Frame highlights for 3D effect */}
          <path
            d="M8 4 L24 4 L24 12 L16 16 L8 12 Z"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
          />
          <path
            d="M8 20 L16 16 L24 20 L24 28 L8 28 Z"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
          />

          {/* Shadow/depth lines */}
          <line x1="8" y1="12" x2="8" y2="20" stroke="url(#shadowGradient)" strokeWidth="1"/>
          <line x1="24" y1="12" x2="24" y2="20" stroke="url(#shadowGradient)" strokeWidth="1"/>
        </g>
      </svg>

      {/* CSS 3D transform effect */}
      <style jsx>{`
        .transform-gpu {
          transform-style: preserve-3d;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-2px) rotateY(5deg); }
        }
      `}</style>
    </div>
  );
};

export default HourglassIcon;