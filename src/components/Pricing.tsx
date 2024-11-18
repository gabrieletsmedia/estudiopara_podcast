import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic Recording",
    price: "799",
    duration: "2 hours",
    features: [
      "Professional studio space",
      "Basic equipment setup",
      "Up to 2 participants",
      "Raw audio files",
      "Basic technical support"
    ]
  },
  {
    name: "Professional Package",
    price: "1499",
    duration: "4 hours",
    features: [
      "Everything in Basic",
      "Up to 4 participants",
      "Video recording",
      "Basic post-production",
      "Live streaming setup",
      "Extended technical support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "Flexible",
    features: [
      "Everything in Professional",
      "Unlimited participants",
      "Full post-production",
      "Custom branding",
      "24/7 support",
      "Dedicated producer"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Choose the package that best fits your needs
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl ${plan.popular ? 'ring-2 ring-black shadow-xl' : 'border'}`}>
              {plan.popular && (
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              )}
              <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-1 text-gray-600">SEK</span>
              </div>
              <p className="mt-2 text-gray-600">{plan.duration}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-full font-semibold transition
                ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'border-2 border-black hover:bg-black hover:text-white'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}