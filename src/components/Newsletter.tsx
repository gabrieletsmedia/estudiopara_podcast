import React from 'react';

export function Newsletter() {
  return (
    <section className="newsletter-section py-20 bg-gray-900" id="newsletter">
      <video 
        className="newsletter-bg-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c2a3645499fb72f572990d_WhatsApp Video 2024-02-06 at 181922-transcode.mp4" type="video/mp4" />
      </video>
      
      <div className="container mx-auto px-6 newsletter-content">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
            <form
              action="https://app.kit.com/forms/7276409/subscriptions"
              className="seva-form formkit-form p-8"
              method="post"
              data-sv-form="7276409"
              data-uid="b81e044ce6"
              data-format="inline"
              data-version="5"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/5 backdrop-blur p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Assine nossa newsletter
                  </h2>
                  <p className="text-gray-600">
                    Receba dicas de produção de conteúdo B2B direto da fonte.
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur border border-gray-200 focus:ring-2 focus:ring-black transition"
                    name="email_address"
                    type="email"
                    required
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur border border-gray-200 focus:ring-2 focus:ring-black transition"
                    name="fields[nome]"
                    type="text"
                    required
                    placeholder="Nome"
                  />
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur border border-gray-200 focus:ring-2 focus:ring-black transition"
                    name="fields[sobrenome]"
                    type="text"
                    required
                    placeholder="Sobrenome"
                  />
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur border border-gray-200 focus:ring-2 focus:ring-black transition"
                    name="fields[empresa]"
                    type="text"
                    required
                    placeholder="Empresa"
                  />
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur border border-gray-200 focus:ring-2 focus:ring-black transition"
                    name="fields[telefone]"
                    type="text"
                    placeholder="Telefone"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-200"
                  >
                    Assine já
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}