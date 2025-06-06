
import React, { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "yo rishul, i got something to say",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("message sent! rishul will get back to you (probably)");
    setFormData({
      name: "",
      email: "",
      subject: "yo rishul, i got something to say",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <TopBar />
      
      <div className="max-w-4xl mx-auto px-4 py-6 lg:py-12">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-maxRed transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm lg:text-base">back to inbox</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 glitch-text mb-4">
            let's chat 💬
          </h1>
          <p className="text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
            got a startup idea? need advice? just want to say hi? 
            <br className="hidden lg:block" />
            drop me a line and let's build something cool together!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-4 lg:p-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-maxRed flex items-center justify-center rounded">
                <span className="text-white font-bold text-lg font-mono">R</span>
              </div>
              <div>
                <h2 className="text-lg lg:text-xl font-bold text-gray-900">
                  new message to rishul
                </h2>
                <p className="text-xs lg:text-sm text-gray-500">
                  rishul@maximally.in
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 lg:p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                to:
              </label>
              <input
                type="text"
                value="rishul@maximally.in"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 text-sm lg:text-base"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent text-sm lg:text-base"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent text-sm lg:text-base"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent text-sm lg:text-base"
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
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maxRed focus:border-transparent resize-none text-sm lg:text-base"
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 pt-4">
              <button
                type="submit"
                className="pixel-button px-6 lg:px-8 py-3 text-sm lg:text-lg bg-maxRed text-white hover:bg-maxYellow hover:text-black w-full lg:w-auto"
              >
                SEND IT 🚀
              </button>
              <Link
                to="/"
                className="px-4 lg:px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base text-center w-full lg:w-auto"
              >
                cancel
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-500">
                * rishul reads every email personally (no assistants, no bots, just a chaotic teenager with too much caffeine)
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">find me elsewhere:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-xs text-maxRed hover:underline">twitter</a>
                  <a href="#" className="text-xs text-maxRed hover:underline">linkedin</a>
                  <a href="#" className="text-xs text-maxRed hover:underline">github</a>
                  <a href="https://maximally.in" className="text-xs text-maxRed hover:underline">maximally.in</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
