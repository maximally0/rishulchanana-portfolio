
import React from "react";
import { Menu } from "lucide-react";

interface TopBarProps {
  onMenuClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <div className="h-16 bg-white border-b border-gray-300 flex items-center px-3 lg:px-6">
      <div className="flex items-center space-x-2 lg:space-x-4 min-w-0 flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2 min-w-0 flex-shrink">
          <div className="w-8 h-8 bg-maxRed flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg font-mono">R</span>
          </div>
          <span className="text-sm lg:text-xl font-bold text-gray-900 truncate">
            rishul@maximally.in
          </span>
        </div>
      </div>
      
      <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="search confused teen, makeathons..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent transition-all text-base"
          />
        </div>
      </div>

      <div className="flex items-center space-x-1 lg:space-x-4 flex-shrink-0">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <span className="text-gray-600 text-sm lg:text-base">⚙️</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <span className="text-gray-600 text-sm lg:text-base">🔔</span>
        </button>
        <div className="w-8 h-8 bg-maxYellow rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-sm">RC</span>
        </div>
      </div>
    </div>
  );
};
