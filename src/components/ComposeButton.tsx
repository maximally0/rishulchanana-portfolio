
import React from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface ComposeButtonProps {
  onClick?: () => void;
}

export const ComposeButton: React.FC<ComposeButtonProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-4 right-4 lg:bottom-6 lg:right-6 w-12 h-12 lg:w-16 lg:h-16 bg-maxRed text-white rounded-full shadow-lg hover:bg-maxYellow hover:text-black transition-all duration-300 z-50",
        "flex items-center justify-center text-lg lg:text-2xl font-bold",
        "hover:animate-pixel-shake"
      )}
    >
      ✏️
    </button>
  );
};
