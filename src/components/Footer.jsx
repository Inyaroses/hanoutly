import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-1">🛒 Hanouty Supermarché</h1>
        <p className="text-lg font-medium">Produits frais, locaux et accessibles</p>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8 max-w-6xl mx-auto text-left">
  <div>
    <h2 className="font-semibold mb-4 text-xl">À propos</h2>
    <ul className="space-y-2 text-l">
      <li>
        <a href="#" className="hover:underline">Qui sommes-nous ?</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Notre mission</a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold mb-4 text-xl">Nos services</h2>
    <ul className="space-y-2 text-l">
      <li>
        <a href="#" className="hover:underline">Livraison</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Click & Collect</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Fidélité</a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold mb-4 text-xl">Liens utiles</h2>
    <ul className="space-y-2 text-l">
      <li>
        <a href="#" className="hover:underline">Accueil</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Promotions</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Catalogue</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Mon compte</a>
      </li>
    </ul>
  </div>
  <div>
    <h2 className="font-semibold mb-4 text-xl">Contact</h2>
    <ul className="space-y-2 text-l">
      <li>📍 Somewhere, You should to be</li>
      <li>📞 +212 522 - 343 - 977</li>
      <li>✉️ Hanoutly@private.com</li>
      <li>🕐 24h/24 — 7j/7</li>
    </ul>
  </div>
</div>


      
      <div className="border-t border-gray-700 pt-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between text-sm mb-8">
        <span>💳 Moyens de paiement</span>
        <span>🔒 Conditions &amp; confidentialité</span>
      </div>

      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="font-semibold mb-2">📬 Abonnez-vous à notre newsletter</h3>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Entrer votre e-mail ici"
            className="bg-white px-4 py-2 rounded-md text-gray-900"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            S’abonner
          </button>
        </form>
      </div>

<div className="max-w-6xl mx-auto text-sm text-center">
  <span>📱 Suivez-nous : </span>
  <a href="#" className="underline hover:text-blue-400 mx-1 inline-block">
    Facebook
  </a>
  <a href="#" className="underline hover:text-pink-500 mx-1 inline-block">
    Instagram
  </a>
  <a href="#" className="underline hover:text-red-500 mx-1 inline-block">
    TikTok
  </a>
</div>
<div className="max-w-6xl mx-auto text-sm text-center"><p className="text-center text-sm text-gray-400 mt-8">
  © {new Date().getFullYear()} Hanoutly. Tous droits réservés.
</p>
</div>

    </footer>
  );
};

export default Footer;
