
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ComposeButtonProps {
  onClick: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ComposeButton: React.FC<ComposeButtonProps> = ({ 
  onClick, 
  isOpen, 
  onClose 
}) => {
  const [formData, setFormData] = useState({
    subject: "yo rishul, i got something to say",
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a backend
    alert("message sent! rishul will get back to you (probably)");
    onClose();
    setFormData({
      subject: "yo rishul, i got something to say",
      name: "",
      email: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Floating Compose Button */}
      <button
        onClick={onClick}
        className={cn(
          "fixed bottom-6 right-6 w-16 h-16 bg-maxRed text-white rounded-full shadow-lg hover:bg-maxYellow hover:text-black transition-all duration-300 z-50",
          "flex items-center justify-center text-2xl font-bold",
          "hover:animate-pixel-shake"
        )}
      >
        ✏️
      </button>

      {/* Compose Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="border-b border-gray-300 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 font-monument">
                compose new message
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  to:
                </label>
                <input
                  type="text"
                  value="rishul@maximally.in"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  subject:
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    your name:
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="confused teenager"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    your email:
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="definitely.not.spam@gmail.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  message:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="tell me about your startup idea, ask for advice, or just say hi! (if you mention 'flamingo' you get a secret link 👀)"
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  type="submit"
                  className="pixel-button px-8 py-3 text-lg bg-maxRed text-white hover:bg-maxYellow hover:text-black"
                >
                  SEND IT 🚀
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  cancel
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                * rishul reads every email personally (no assistants, no bots, just a chaotic teenager with too much caffeine)
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
