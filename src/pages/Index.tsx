
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
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const filteredEmails = emails.filter(email => email.folder === selectedFolder);

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    console.log("Selected email:", email.subject);
  };

  const handleBackToList = () => {
    setSelectedEmail(null);
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <TopBar />
      
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar 
          folders={folders}
          selectedFolder={selectedFolder}
          onFolderSelect={setSelectedFolder}
        />
        
        <div className="flex-1 flex">
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

      <ComposeButton 
        onClick={() => setIsComposeOpen(true)}
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
      />
    </div>
  );
};

export default Index;
