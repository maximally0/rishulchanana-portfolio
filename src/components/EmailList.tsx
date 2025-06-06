
import React from "react";
import { cn } from "@/lib/utils";
import type { Email } from "@/data/emails";

interface EmailListProps {
  emails: Email[];
  onEmailSelect: (email: Email) => void;
  selectedFolder: string;
}

export const EmailList: React.FC<EmailListProps> = ({
  emails,
  onEmailSelect,
  selectedFolder,
}) => {
  const folderTitle = selectedFolder.charAt(0).toUpperCase() + selectedFolder.slice(1);

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="border-b border-gray-300 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 font-monument">
            {folderTitle}
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {emails.length} emails
            </span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              ⟲
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto inbox-scrollbar">
        {emails.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <span className="text-6xl mb-4 block">📧</span>
              <p className="text-gray-500 font-mono">no emails in {folderTitle.toLowerCase()}</p>
              <p className="text-sm text-gray-400 mt-2">check back later for more founder chaos</p>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {emails.map((email) => (
              <div
                key={email.id}
                onClick={() => onEmailSelect(email)}
                className={cn(
                  "email-row p-4 flex items-center space-x-4 cursor-pointer transition-all",
                  !email.isRead && "bg-blue-50 border-l-4 border-l-maxRed"
                )}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-maxRed focus:ring-maxRed border-gray-300 rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    className={cn(
                      "text-lg transition-colors",
                      email.isStarred ? "text-maxYellow" : "text-gray-300 hover:text-maxYellow"
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ⭐
                  </button>
                  <button
                    className={cn(
                      "text-lg transition-colors",
                      email.isImportant ? "text-maxRed" : "text-gray-300 hover:text-maxRed"
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ⚠️
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3">
                    <span className={cn(
                      "font-medium text-sm w-48 truncate",
                      !email.isRead ? "text-black font-bold" : "text-gray-600"
                    )}>
                      {email.from}
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className={cn(
                          "font-medium truncate",
                          !email.isRead ? "text-black font-bold" : "text-gray-800"
                        )}>
                          {email.subject}
                        </span>
                        <span className="text-gray-500 text-sm truncate">
                          - {email.snippet}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <div className="flex space-x-1">
                        {email.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono font-bold bg-maxRed text-white rounded"
                          >
                            [{tag}]
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 w-16 text-right">
                        {email.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
