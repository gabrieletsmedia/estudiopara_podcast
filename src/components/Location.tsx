import React from 'react';

export function Location() {
  return (
    <section className="py-20 bg-gray-50" id="location">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn.prod.website-files.com/64b9d750a6e8ae1e78ad50e0/65c57cec8383645e80c2d048_Captura%20de%20Tela%202024-02-08%20a%CC%80s%2022.15.21.png"
            alt="Studio Location"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <div className="category-tag mb-4">NOSSA UNIDADE</div>
            <h2 className="text-4xl font-bold mb-6">estúdio let's media</h2>
            <p className="text-xl text-gray-600">
              Rua Original, 223<br />
              (Próximo ao Fórum Regional de Pinheiros XI)<br />
              Vila Madalena<br />
              São Paulo - SP<br />
              CEP <strong>05435050</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}