// Loading.jsx
import React, { useEffect, useState } from "react";
import {
  FaSpinner,
  FaCircleNotch,
  FaCog,
  FaSun,
  FaSyncAlt,
  FaRegCircle,
  FaCompactDisc,
} from "react-icons/fa";

const Loading = ({ fullScreen = true, message = "Loading..." }) => {
  // icon components
  const ICONS = [
    FaSpinner,
    FaCircleNotch,
    FaCog,
    FaSun,
    FaSyncAlt,
    FaRegCircle,
    FaCompactDisc,
  ];

  // tailwind color classes (text-*)
  const COLORS = [
    "text-blue-500",
    "text-red-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
    "text-cyan-500",
  ];

  // animation classes available in Tailwind
  const ANIMATIONS = [
    { cls: "animate-spin", speed: "0.9s" },
    { cls: "animate-pulse", speed: "1.2s" },
    { cls: "animate-bounce", speed: "1s" },
    { cls: "animate-ping", speed: "1.5s" },
  ];

  // local state for selected icon/color/animation
  const [IconComp, setIconComp] = useState(() => FaSpinner);
  const [colorClass, setColorClass] = useState("text-blue-500");
  const [anim, setAnim] = useState(ANIMATIONS[0]);

  // pick random values when mounted
  useEffect(() => {
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    setIconComp(() => rand(ICONS));
    setColorClass(rand(COLORS));
    setAnim(rand(ANIMATIONS));
  }, []); // runs once at mount

  // inline style for custom animation duration (applies to icon)
  const iconStyle = { animationDuration: anim.speed };

  return (
    <div
      className={`${
        fullScreen ? "min-h-screen flex" : "flex"
      } items-center justify-center `}
    >
      <div className="flex flex-col items-center gap-4 p-4">
        {/* Icon — dynamically rendered */}
        <IconComp
          className={`${anim.cls} ${colorClass} text-7xl`}
          style={iconStyle}
          aria-hidden="true"
        />
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;