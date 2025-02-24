import React, { useState } from 'react';
import { Volume2, Users, Building2, HardHat, Home, Building, FileText, ChevronDown } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    areaType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwWkrIzhQruLAGJJDg7vNyojbJP3oRfyHX1Dk4Rle6q3sSxx6IGN-XeTMQEwQoVYcyc5Q/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors' // Important for Google Apps Script
      });

      // Since no-cors mode doesn't give us response details,
      // we'll assume success if no error was thrown
      setSubmitStatus('success');
      setFormData({ name: '', email: '', country: '', areaType: '', message: '' });
      
      // Optional: Send the guide via email here
      // For now, we'll just show a success message
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.querySelector('#download-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-purple-50 p-3 rounded-2xl">
                <Volume2 className="w-8 h-8 text-purple-600" />
              </div>
              <span className="text-xl font-medium text-purple-600">Heat Pump Noise Guide</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Is Your Heat Pump Making Too Much Noise?
            </h1>
            <p className="text-xl mb-10 text-gray-600 leading-relaxed">
              Get our comprehensive guide on heat pump noise and learn how to create a quieter, 
              more comfortable environment for your space.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-10 py-5 rounded-2xl font-semibold
                hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
            >
              Download your guide below
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/cover-photo.png"
              alt="Heat pump installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who is this for section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">Who is this guide for?</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our comprehensive guide is tailored for professionals across the industry
          </p>
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Homeowners</h3>
                  <p className="text-gray-600">Learn how to identify noise issues and maintain optimal heat pump performance.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <HardHat className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Installers</h3>
                  <p className="text-gray-600">Best practices for noise-minimizing installations and troubleshooting.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Distributors</h3>
                  <p className="text-gray-600">Technical specifications and comparative noise level data.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Construction PMs</h3>
                  <p className="text-gray-600">Planning guidelines and noise reduction strategies for projects.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Architects</h3>
                  <p className="text-gray-600">Design considerations for optimal heat pump placement and acoustics.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Regulatory Bodies</h3>
                  <p className="text-gray-600">Standards compliance and noise regulation guidelines.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="download-form" className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Get Your Free Heat Pump Noise Guide
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to receive instant access to our comprehensive guide
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="areaType" className="block text-sm font-medium text-gray-700 mb-2">
                  Area Type
                </label>
                <select
                  id="areaType"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.areaType}
                  onChange={(e) => setFormData({...formData, areaType: e.target.value})}
                >
                  <option value="">Select your area type</option>
                  <option value="residential">Residential</option>
                  <option value="industrial">Industrial</option>
                  <option value="suburbs">Suburbs</option>
                  <option value="village">Village</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your heat pump noise concerns..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold
                  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:translate-y-[-2px]"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Guide'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">
                  Thank you! Check your email for the guide.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;