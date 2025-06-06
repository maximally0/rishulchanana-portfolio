
import React from "react";
import { cn } from "@/lib/utils";
import type { Email } from "@/data/emails";

interface EmailDetailProps {
  email: Email;
  onBack: () => void;
}

export const EmailDetail: React.FC<EmailDetailProps> = ({ email, onBack }) => {
  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        elements.push(<br key={index} />);
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold text-maxRed mt-6 mb-3 font-monument">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        elements.push(
          <p key={index} className="text-lg font-bold text-gray-900 my-3">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-gray-700 mb-1 ml-4">
            {trimmedLine.replace('- ', '')}
          </li>
        );
      } else {
        // Handle bold text within normal paragraphs
        const parts = trimmedLine.split(/(\*\*.*?\*\*)/);
        const formattedParts = parts.map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={partIndex} className="font-bold text-maxRed">
                {part.replace(/\*\*/g, '')}
              </strong>
            );
          }
          return part;
        });
        
        elements.push(
          <p key={index} className="text-gray-700 mb-3 leading-relaxed">
            {formattedParts}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-300 p-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="pixel-button text-sm px-4 py-2"
          >
            ← back to inbox
          </button>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              📁
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              🗑️
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              ⚠️
            </button>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              ⭐
            </button>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-y-auto p-6 inbox-scrollbar">
        <div className="max-w-4xl mx-auto">
          {/* Email Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-monument">
              {email.subject}
            </h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-maxRed rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {email.from.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{email.from}</p>
                  <p className="text-sm text-gray-500">{email.fromEmail}</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                {email.date}
              </div>
            </div>

            <div className="flex space-x-2 mb-6">
              {email.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-mono font-bold bg-maxYellow text-black rounded"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>

          {/* Email Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed space-y-4">
              {formatContent(email.content)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              <button className="pixel-button px-6 py-3 text-lg">
                📺 Watch Reel
              </button>
              <button className="pixel-button px-6 py-3 text-lg bg-maxYellow hover:bg-maxRed">
                📞 Book Call
              </button>
              <button className="pixel-button px-6 py-3 text-lg">
                🚀 Join Maximally
              </button>
              <button className="pixel-button px-6 py-3 text-lg">
                💾 Download Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
