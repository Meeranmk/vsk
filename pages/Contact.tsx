

import React, { useState } from 'react';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { COMPANY_DETAILS } from '../constants';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `Hello VSK Traders!

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.subject || 'General Inquiry'}

*Message:*
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(
      `https://wa.me/${COMPANY_DETAILS.whatsapp.replace('+', '')}?text=${encodedMessage}`,
      '_blank'
    );

    // Reset form
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Let's Connect</h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Have questions about a demolition project or material availability? Our expert team is ready to assist you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
                <PhoneIcon className="h-8 w-8 text-blue-900 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 text-sm mb-4">Speak directly to our support team.</p>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-blue-900 font-bold block">{COMPANY_DETAILS.phone}</a>
              </div>
              <div className="p-8 rounded-3xl bg-green-50 border border-green-100">
                <svg className="h-8 w-8 text-green-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Us</h3>
                <p className="text-slate-600 text-sm mb-4">Quick response via WhatsApp chat.</p>
                <a href={`https://wa.me/${COMPANY_DETAILS.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold block">{COMPANY_DETAILS.whatsapp}</a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-xl shrink-0">
                  <MapPinIcon className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-600">ADDRESS</h4>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-xl shrink-0">
                  <ClockIcon className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600 leading-relaxed">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-80 border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1368541249764!2d80.2443!3d13.1096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzM0LjYiTiA4MMKwMTQnNDIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="VSK Traders Location"
              ></iframe>
            </div>
          </div>

          {/* WhatsApp Message Form */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Send WhatsApp Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Phone</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Project Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none"
                >
                  <option value="">Select Service</option>
                  <option value="Demolition">Building Demolition</option>
                  <option value="Roofing">Roofing Materials</option>
                  <option value="Pipes">Pipes & Steel</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you today?"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold text-lg py-5 rounded-2xl hover:bg-green-700 transition-all shadow-xl hover:shadow-green-900/50 flex items-center justify-center space-x-3"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Send via WhatsApp</span>
              </button>

              <p className="text-slate-400 text-sm text-center">
                Clicking the button will open WhatsApp with your pre-filled message
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
