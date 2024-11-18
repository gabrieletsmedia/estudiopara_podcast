import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or ready to book? Reach out to us and we'll get back to you shortly.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Västmannagatan 46, Stockholm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+46 70 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">hello@letsstudio.se</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:ring-black"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}