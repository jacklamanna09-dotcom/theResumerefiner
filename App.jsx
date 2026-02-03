import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [resumeText, setResumeText] = useState('');
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const [refinedText, setRefinedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRefine = () => {
    if (!resumeText.trim() || !jobDescriptionText.trim()) {
      alert('Please fill in both the resume and job description fields.');
      return;
    }
    
    // Simulate AI processing delay
    setRefinedText('');
    setTimeout(() => {
      setRefinedText(
        `REFINED RESUME:\n\n${resumeText}\n\n---\n\nPROFESSIONAL COVER LETTER:\n\nDear Hiring Manager,\n\nI am writing to express my enthusiastic interest in the position described. With my background and skills, I am confident I would make a valuable contribution to your team.\n\n[Personalized content based on job description would appear here]\n\nThank you for considering my application. I look forward to discussing how my experience aligns with your needs.\n\nSincerely,\n[Your Name]`
      );
    }, 1000);
  };

  const Navigation = () => (
    <nav className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
      {['home', 'about', 'faq', 'contact'].map((page) => (
        <button
          key={page}
          onClick={() => {
            setCurrentPage(page);
            setIsMobileMenuOpen(false);
          }}
          className={`text-lg font-medium py-2 px-1 ${
            currentPage === page
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
          <div 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              setIsMobileMenuOpen(false);
            }}
          >
            Resume Refine
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4">
              <Navigation />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Home Page */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
              <div className="container mx-auto px-4 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  Fix your resume and cover letter in seconds
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Free AI tool for students and first-time job applicants
                </p>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works:</h2>
                  <ol className="space-y-4 text-left max-w-2xl mx-auto">
                    {['Paste your resume', 'Paste the job description', 'Click "Refine My Resume"', 'Copy your optimized resume and cover letter'].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                          {index + 1}
                        </div>
                        <span className="text-lg text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>

            {/* Form Section */}
            <section className="py-12 md:py-16 bg-white">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="mb-8">
                      <label htmlFor="resume" className="block text-lg font-medium text-gray-800 mb-3">
                        Paste your resume here
                      </label>
                      <textarea
                        id="resume"
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        rows="10"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Copy and paste your resume text here..."
                      ></textarea>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="job-description" className="block text-lg font-medium text-gray-800 mb-3">
                        Paste the job description here
                      </label>
                      <textarea
                        id="job-description"
                        value={jobDescriptionText}
                        onChange={(e) => setJobDescriptionText(e.target.value)}
                        rows="8"
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Copy and paste the job description text here..."
                      ></textarea>
                    </div>
                    
                    <button
                      onClick={handleRefine}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Refine My Resume
                    </button>
                    
                    <div className="mt-10">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                        <span className="mr-3">📄</span>
                        Your refined resume & cover letter:
                      </h3>
                      <div className="border border-gray-200 rounded-xl p-6 bg-white min-h-[250px] md:min-h-[300px]">
                        {refinedText ? (
                          <pre className="whitespace-pre-wrap text-gray-800 font-sans text-lg leading-relaxed max-h-[60vh] overflow-y-auto">
                            {refinedText}
                          </pre>
                        ) : (
                          <div className="text-gray-500 text-lg flex flex-col items-center justify-center h-full text-center">
                            <div className="text-5xl mb-4">✨</div>
                            <p className="text-xl font-medium">Your refined resume & cover letter will appear here</p>
                            <p className="mt-2 text-gray-600">Paste your resume and job description above, then click "Refine My Resume"</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Features Section */}
            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
              <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Students Love Resume Refine</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Designed specifically for students and first-time job seekers
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Resume Optimization",
                      description: "Automatically cleans and formats your resume. Adds relevant keywords from job descriptions to help you pass applicant tracking systems (ATS).",
                      icon: "✓"
                    },
                    {
                      title: "Cover Letter Generation",
                      description: "Creates professional, personalized cover letters in seconds. Friendly tone that makes a great impression on hiring managers.",
                      icon: "✉️"
                    },
                    {
                      title: "Free & Safe",
                      description: "One free resume refinement per day. Your data is never stored or shared - everything is processed securely in real-time.",
                      icon: "🔒"
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  About Resume Refine
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Resume Refine is a free AI-powered tool designed to help students and first-time job applicants create professional resumes and cover letters instantly.
                </p>
                <p className="text-lg mb-6">
                  We understand how stressful job applications can be, especially when you're just starting out. That's why we created a simple solution that takes the guesswork out of resume writing. Our AI analyzes job descriptions and optimizes your resume with relevant keywords and professional formatting.
                </p>
                <p className="text-lg mb-6">
                  Our goal is to make applying for jobs faster, easier, and stress-free. We believe everyone deserves a fair chance at their dream job, regardless of their experience level or access to expensive resume services.
                </p>
                <p className="text-lg font-medium">
                  Everything is processed in real-time in your browser, and your data is never stored or shared with third parties. Your privacy and security are our top priorities.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Page */}
        {currentPage === 'faq' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  Frequently Asked Questions
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Is this tool free?",
                    answer: "Yes! Everyone can refine one resume per day for free. We believe students and first-time job seekers shouldn't have to pay to access basic career tools."
                  },
                  {
                    question: "Do you store my resume or job description?",
                    answer: "No. Everything is processed instantly in your browser and not saved on any server. We don't store, share, or use your data in any way. Your privacy is 100% protected."
                  },
                  {
                    question: "Who can use this tool?",
                    answer: "Students, first-time job seekers, or anyone applying to jobs. Our tool is specifically designed for people who might not have experience creating professional resumes and cover letters."
                  },
                  {
                    question: "Do I need an account?",
                    answer: "No account is required — just paste your resume and job description and start refining. We keep the process simple and frictionless."
                  },
                  {
                    question: "How does the AI refinement work?",
                    answer: "Our AI analyzes the job description to identify key skills and requirements, then optimizes your resume with relevant keywords and professional phrasing. It also generates a personalized cover letter that highlights your most relevant qualifications."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-blue-50 px-6 py-4 font-bold text-lg text-gray-800">
                      Q: {faq.question}
                    </div>
                    <div className="px-6 py-4 bg-white text-gray-700 text-lg leading-relaxed">
                      A: {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                  Contact Us
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md text-center">
                <div className="text-6xl mb-6">📬</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">We'd love to hear from you!</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Have questions, feedback, or suggestions? We're here to help make your job application process smoother.
                </p>
                <div className="text-center">
                  <a 
                    href="mailto:support@resume-refine.com" 
                    className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl py-4 px-10 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Email Us: support@resume-refine.com
                  </a>
                </div>
                <p className="mt-8 text-gray-600 text-lg">
                  We respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Resume Refine</div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Making job applications faster, easier, and stress-free for students and first-time job seekers.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {['home', 'about', 'faq', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="text-gray-300 hover:text-white font-medium transition-colors"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
          <div className="text-gray-500 text-sm border-t border-gray-800 pt-6">
            <p>© {new Date().getFullYear()} Resume Refine. All rights reserved.</p>
            <p className="mt-1">Your data is never stored. Processed securely in real-time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
