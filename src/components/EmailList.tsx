
import React from "react";
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
  const getFolderDisplayName = (folderId: string) => {
    const folderNames: { [key: string]: string } = {
      inbox: "Inbox",
      makeathons: "Makeathons",
      studios: "Studios", 
      mansplaining: "Mansplaining Business",
      thoughts: "Thoughts",
      braindump: "Brain Dump",
      received: "Received",
      drafts: "Drafts",
      spam: "Spam",
      archived: "Archived"
    };
    return folderNames[folderId] || "Inbox";
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="border-b border-gray-300 p-3 lg:p-6">
        <h1 className="text-lg lg:text-2xl font-bold text-gray-900 glitch-text">
          {getFolderDisplayName(selectedFolder)}
        </h1>
        <p className="text-gray-600 text-xs lg:text-base mt-1">
          {emails.length} email{emails.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {emails.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <span className="text-3xl lg:text-6xl mb-4 block">📭</span>
              <p className="text-gray-500 text-sm lg:text-lg font-medium">No emails in this folder</p>
              <p className="text-gray-400 text-xs lg:text-base mt-2">Check back later for new startup drama!</p>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {emails.map((email) => (
              <div
                key={email.id}
                onClick={() => onEmailSelect(email)}
                className="p-2 lg:p-4 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-transparent hover:border-maxRed group"
              >
                <div className="flex items-start space-x-2 lg:space-x-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900 text-xs lg:text-base truncate">
                        {email.fromEmail}
                      </span>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                        {email.date}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-maxRed transition-colors text-sm lg:text-base">
                      {email.subject}
                    </h3>
                    
                    <p className="text-gray-600 text-xs lg:text-base line-clamp-2">
                      {email.snippet}
                    </p>
                    
                    {email.labels && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {email.labels.map((label, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-maxYellow text-black text-xs font-bold rounded-sm font-mono"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    )}
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
