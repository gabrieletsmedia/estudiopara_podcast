import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Let's Studio</h3>
            <p className="mt-4 text-gray-400">
              Estúdio profissional de podcast e produção audiovisual em São Paulo, na Vila Madalena. 
              Somos especializados em comunicação B2B.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://www.youtube.com/@LetsMediaOficial" 
                   className="hover:text-white transition">
                  Nossas produções autorais
                </a>
              </li>
              <li>
                <a href="https://www.letsmediahub.com.br/" 
                   className="hover:text-white transition">
                  Nosso portal de conteúdo
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5511933336596&text=Oi,%20tudo%20bem?%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20da%20Let%E2%80%99s%20Media.%20" 
                   className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/letsmediaoficial/" 
                 className="hover:text-gray-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/letsmediahub/" 
                 className="hover:text-gray-400 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.letsmediahub.com.br/" 
                 className="hover:text-gray-400 transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Let's Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}