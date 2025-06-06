
import React from "react";
import { cn } from "@/lib/utils";

interface Folder {
  id: string;
  name: string;
  count: number;
}

interface SidebarProps {
  folders: Folder[];
  selectedFolder: string;
  onFolderSelect: (folderId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  folders,
  selectedFolder,
  onFolderSelect,
}) => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-300 p-4 overflow-y-auto">
      <div className="space-y-1">
        {folders.map((folder) => (
          <button
            key={folder.id}
            onClick={() => onFolderSelect(folder.id)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-all duration-200 group",
              selectedFolder === folder.id
                ? "bg-maxRed text-white shadow-md"
                : "text-gray-700 hover:bg-gray-200 hover:animate-pixel-shake"
            )}
          >
            <span className={cn(
              "font-medium",
              selectedFolder === folder.id && "glitch-text"
            )}>
              {folder.name}
            </span>
            <span className={cn(
              "text-xs px-2 py-1 rounded-full",
              selectedFolder === folder.id
                ? "bg-white text-maxRed"
                : "bg-gray-300 text-gray-600"
            )}>
              {folder.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-300">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button className="pixel-button w-full text-sm py-2">
            📺 Watch Reels
          </button>
          <button className="pixel-button w-full text-sm py-2 bg-maxYellow hover:bg-maxRed">
            📞 Book Call
          </button>
          <button className="pixel-button w-full text-sm py-2">
            🚀 Join Maximally
          </button>
        </div>
      </div>
    </div>
  );
};
