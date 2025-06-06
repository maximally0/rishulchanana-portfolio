
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { EmailList } from "@/components/EmailList";
import { EmailDetail } from "@/components/EmailDetail";
import { ComposeButton } from "@/components/ComposeButton";
import { TopBar } from "@/components/TopBar";
import { emails, folders } from "@/data/emails";
import type { Email } from "@/data/emails";

const Index = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const filteredEmails = emails.filter(email => email.folder === selectedFolder);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    console.log("Selected email:", email.subject);
  };

  const handleBackToList = () => {
    setSelectedEmail(null);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <TopBar onMenuClick={toggleMobileSidebar} />
      
      <div className="flex h-[calc(100vh-64px)] relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`
          fixed lg:relative top-0 left-0 h-full z-50 lg:z-auto
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 lg:w-64
        `}>
          <Sidebar 
            folders={folders}
            selectedFolder={selectedFolder}
            onFolderSelect={setSelectedFolder}
            onClose={() => setIsMobileSidebarOpen(false)}
          />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex min-w-0">
          {selectedEmail ? (
            <EmailDetail 
              email={selectedEmail}
              onBack={handleBackToList}
            />
          ) : (
            <EmailList 
              emails={filteredEmails}
              onEmailSelect={handleEmailSelect}
              selectedFolder={selectedFolder}
            />
          )}
        </div>
      </div>

      <ComposeButton />
    </div>
  );
};

export default Index;
