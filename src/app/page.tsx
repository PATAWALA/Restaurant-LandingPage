"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import config from "@/data/config";

// ==================== NAVBAR ====================
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">{config.name}</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#problems" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">📋 Analyse</a>
            <a href="#benefits" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">✅ Avantages</a>
            <a href="#opportunities" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">💶 Pertes</a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium">👨‍💻 Qui suis-je</a>
            <a href="#contact" className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
              💬 Parlons-en
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white py-4 space-y-1">
            <a href="#problems" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">📋 Analyse</a>
            <a href="#benefits" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">✅ Avantages</a>
            <a href="#opportunities" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">💶 Pertes</a>
            <a href="#about" onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">👨‍💻 Qui suis-je</a>
            <div className="px-4 pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="block text-center bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-full font-semibold">
                💬 Parlons-en sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ==================== HERO ====================
function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-24 pb-16 md:pb-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge cadeau */}
          <motion.div
            className="inline-block bg-red-100 text-red-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-red-200"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🎁 Cette analyse faite par Abdoulaye Patawala est pour votre restaurant. Veuillez lire attentivement.
          </motion.div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Chaque jour sans site de réservation,<br />
            vous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              restez invisible pour vos clients
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Quand un client cherche un restaurant sur Google, il trouve ceux qui ont un site web. 
            Les autres, il ne les voit même pas.
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            C&apos;est un constat simple. <span className="font-semibold text-gray-700">Pas de site = pas de visibilité.</span>{" "}
            Et chaque client qui ne vous trouve pas est un client qui mange ailleurs.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a 
              href="#opportunities" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-red-200"
            >
              <span className="mr-2 text-xl">📉</span> Voir les opportunités perdues
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all"
            >
              <span className="mr-2 text-xl">👨‍💻</span> Qui suis-je ?
            </a>
          </div>

          {/* Stats choc */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "89%", label: "des clients vérifient votre présence en ligne avant de réserver", icon: "🔍" },
              { number: "3x", label: "plus de réservations quand vous avez un site professionnel", icon: "📈" },
              { number: "70%", label: "de vos futurs clients réservent sur leur téléphone", icon: "📱" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Flèche pour scroller */}
          <motion.div 
            className="mt-12 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">Découvrez les opportunités que vous perdez ↓</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// ==================== ABOUT ME ====================
function AboutMe() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-red-50 to-orange-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🍽️ Expert en digital pour restaurants
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Celui qui va donner à votre restaurant la visibilité qu&apos;il mérite
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Des dizaines de restaurateurs m&apos;ont déjà fait confiance. Voici pourquoi.
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative inline-block">
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/moi.jpeg"
                  alt="Abdoulaye Patawala - Expert sites web restaurants"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">3+</div>
                <div className="text-xs sm:text-sm text-gray-600">ans d&apos;impact</div>
              </div>

              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">+40</div>
                <div className="text-xs sm:text-sm text-gray-600">restaurants</div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-4 md:space-y-6"
          >
            {/* Nom et accroche */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                Abdoulaye Patawala
              </h3>
              <p className="text-red-600 font-semibold text-sm md:text-lg">
                Expert en sites web pour restaurants • 3 ans d&apos;expérience
              </p>
            </div>

            {/* Corps du message */}
            <div className="space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed">
              {/* Constat */}
              <div className="bg-orange-50 border-l-4 border-orange-400 p-3 md:p-4 rounded-r-lg">
                <p className="font-semibold text-orange-800 text-sm md:text-base">
                  🍽️ Ce que vivent beaucoup de restaurants :
                </p>
                <p className="text-orange-700 text-xs md:text-sm mt-1">
                  Votre cuisine est excellente, votre salle est magnifique, votre équipe est compétente. 
                  Mais en ligne, vous n&apos;êtes pas visible. Résultat : des clients potentiels 
                  ne vous trouvent pas et vont ailleurs, simplement parce qu&apos;ils ne savent pas que vous existez.
                </p>
              </div>

              {/* Présentation */}
              <p>
                Je m&apos;appelle Abdoulaye. Depuis 3 ans,{" "}
                <span className="font-bold text-red-600">
                  j&apos;ai aidé plus de 40 restaurants à remplir leurs tables chaque soir
                </span>{" "}
                grâce à des sites de réservation qui attirent, donnent faim et convertissent les visiteurs en clients.
              </p>

              {/* Pourquoi la restauration */}
              <p>
                Dans le digital, j&apos;aurais pu choisir n&apos;importe quel secteur. Mais un seul 
                univers me passionne vraiment :{" "}
                <span className="font-bold text-orange-600">la restauration</span>.
              </p>

              {/* Citation */}
              <blockquote className="italic text-base md:text-lg font-medium text-gray-800 border-l-4 border-red-500 pl-3 md:pl-4 py-2 md:py-3 bg-red-50 rounded-r-lg">
                « Ma manière de servir ? Offrir à chaque restaurant une présence en ligne 
                qui donne faim. Pour que chaque client qui cherche où manger vous trouve 
                immédiatement, et réserve chez vous sans hésiter. »
              </blockquote>

              {/* Concret */}
              <p>
                <span className="font-semibold">Concrètement, voici ce que je vous apporte :</span>
              </p>

              <ul className="space-y-2">
                {[
                  "Un site qui met l&apos;eau à la bouche et donne envie de réserver en 3 secondes",
                  "Une visibilité immédiate sur Google quand un client cherche un restaurant dans votre ville",
                  "Un système de réservation qui remplit vos tables, même quand vous êtes en plein service",
                  "Une présence en ligne qui montre le professionnalisme de votre établissement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <span className="text-green-500 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CRÉDIBILITÉ */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-3 md:p-4 rounded-r-lg">
                <p className="font-semibold text-orange-900 text-sm md:text-base">
                  🔑 Pourquoi la crédibilité est importante pour un restaurant :
                </p>
                <p className="text-orange-800 text-xs md:text-sm mt-2">
                  Aujourd&apos;hui, <span className="font-bold">la première chose qu&apos;un client vérifie avant de réserver, c&apos;est votre présence en ligne</span>. 
                  Votre menu, vos photos, vos avis, votre site : tout est regardé en 30 secondes. 
                  Un site web professionnel est la preuve immédiate que votre restaurant 
                  est sérieux et digne de confiance. C&apos;est votre réputation 
                  numérique, et elle se joue avant même que le client ne passe votre porte.
                </p>
              </div>

              {/* Rassurance finale */}
              <p className="font-semibold text-gray-900">
                Mon seul objectif : que votre restaurant ait autant de clients 
                que la qualité de votre cuisine le mérite.
              </p>
            </div>

            {/* Points de confiance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 pt-2 md:pt-4">
              {[
                { icon: "🎯", text: "Spécialiste restaurants" },
                { icon: "🍽️", text: "Passionné de cuisine" },
                { icon: "🤝", text: "Suivi personnalisé" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 bg-white rounded-xl p-3 md:p-4 shadow-md">
                  <span className="text-xl md:text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <div className="pt-2 md:pt-4 text-center lg:text-left">
              <a
                href={`https://wa.me/${config.whatsapp}?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20mon%20site%20de%20réservation%20pour%20mon%20restaurant.`}
                target="_blank"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span className="mr-2 text-xl">📅</span> Discuter de votre restaurant gratuitement
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center lg:text-left">
                ⏱️ Je vous réponds personnellement en quelques minutes sur WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== PROBLEMS ====================
function Problems() {
  const problems = [
    { 
      icon: "👻", 
      title: "Vous n&apos;apparaissez pas sur Google", 
      situation: "Quand un client tape &ldquo;restaurant [votre ville]&rdquo;, il trouve vos concurrents qui ont un site web. Pas vous.",
      consequence: "Ce client ne saura jamais que votre cuisine existe. Il mangera ailleurs." 
    },
    { 
      icon: "📞", 
      title: "Le téléphone interrompt votre service", 
      situation: "Vous êtes en cuisine, le téléphone sonne. Vous devez répondre, expliquer le menu, noter la réservation.",
      consequence: "Le temps passé au téléphone est du temps perdu pour la cuisine. Vos plats refroidissent." 
    },
    { 
      icon: "💸", 
      title: "Des tables qui restent vides", 
      situation: "Sans réservation en ligne, vos tables ne se remplissent pas toutes seules. Chaque table vide est un manque à gagner.",
      consequence: "Un restaurant qui n&apos;est pas visible en ligne reçoit moins de réservations. C&apos;est mathématique." 
    },
    { 
      icon: "🍽️", 
      title: "Votre menu est invisible", 
      situation: "Aujourd&apos;hui, un client veut voir vos plats AVANT de réserver. Pas de photos en ligne ? Il passe au suivant.",
      consequence: "Ce qui n&apos;est pas montré n&apos;existe pas pour le client." 
    },
    { 
      icon: "⭐", 
      title: "Peu d&apos;avis, peu de confiance", 
      situation: "89% des clients lisent les avis avant de choisir un restaurant. Sans présence en ligne, difficile de collecter des avis.",
      consequence: "Moins d&apos;avis visibles = moins de confiance = moins de réservations." 
    },
    { 
      icon: "🏃", 
      title: "Les clients vont chez les concurrents", 
      situation: "Vos concurrents ont un site web avec menu, photos, réservation en ligne. Pas vous. Le client choisit ce qu&apos;il voit.",
      consequence: "Ce n&apos;est pas que votre cuisine est moins bonne. C&apos;est qu&apos;elle est moins visible." 
    },
  ];

  return (
    <section id="problems" className="relative w-full py-16 sm:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            📋 État des lieux
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici comment les choses se passent{" "}
            <span className="text-red-600">en ce moment</span>{" "}dans votre restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ce n&apos;est pas un jugement. C&apos;est un constat simple. Regardons ensemble.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-red-100 space-y-3"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="font-bold text-lg text-gray-900">{p.title}</h3>
              <div className="text-gray-700 text-sm space-y-2">
                <p><span className="font-semibold text-gray-800">Ce qui se passe :</span> {p.situation}</p>
                <p><span className="font-semibold text-red-600">La conséquence :</span> {p.consequence}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bandeau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white"
        >
          <p className="text-xl md:text-2xl font-bold">
            👆 Ces 6 situations vous font perdre des clients chaque mois. 
            <span className="text-yellow-300"> Et la solution existe.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== COMPARISON ====================
function Comparison() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-gray-100 to-red-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">⚖️ Comparaison simple</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            À gauche : votre restaurant aujourd&apos;hui.<br />
            À droite : votre restaurant{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">avec un site web</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">La différence n&apos;est pas une question de mois de travail. C&apos;est une question de décision.</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sans site */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden h-full"
          >
            <div className="bg-red-500 text-white text-center py-4 font-bold text-lg">❌ Votre restaurant AUJOURD&apos;HUI</div>
            <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
              {[
                "Invisible sur Google",
                "Réservations par téléphone en plein service",
                "Aucune preuve sociale visible",
                "Des tables qui restent parfois vides",
                "Image qui pourrait être plus moderne",
                "Vous passez du temps au téléphone"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-50 px-8 py-4 text-center">
              <p className="text-red-700 font-bold">Situation actuelle.</p>
            </div>
          </motion.div>

          {/* Avec site */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden h-full"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-4 font-bold text-lg">✅ Votre restaurant AVEC un site web</div>
            <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
              {[
                "Visible sur Google 24h/24 et 7j/7",
                "Réservations automatiques en ligne",
                "Crédibilité immédiate et professionnalisme",
                "Tables pleines",
                "Image moderne et rassurante",
                "Plus de clients que vos concurrents"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 px-8 py-4 text-center">
              <p className="text-green-700 font-bold">Plus de clients, moins de stress, plus de revenus.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 italic">
            La seule différence entre la colonne de gauche et celle de droite ?{" "}
            <span className="font-bold text-red-600">Une décision.</span> La vôtre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== BENEFITS ====================
function Benefits() {
  const benefits = [
    { icon: "👁️", title: "Visible sur Google en 1ère page", desc: "Quand quelqu&apos;un tape &ldquo;restaurant [votre ville]&rdquo;, c&apos;est VOUS qui apparaissez en premier. Vos clients vous trouvent facilement." },
    { icon: "📅", title: "Réservations 24h/24 sans effort", desc: "Les clients réservent à 23h, pendant que vous dormez. Vous vous réveillez avec des tables remplies." },
    { icon: "🍽️", title: "Menu digital qui donne envie", desc: "Photos professionnelles de vos plats. Descriptions qui mettent l&apos;eau à la bouche. Les clients réservent avant d&apos;avoir fini de regarder." },
    { icon: "⭐", title: "Avis Google qui rassurent", desc: "Quand un nouveau client hésite, il voit vos avis et les commentaires. Sa décision est prise en quelques secondes." },
    { icon: "📱", title: "100% optimisé pour téléphone", desc: "80% de vos clients réservent depuis leur smartphone. Votre site est parfait sur tous les écrans." },
    { icon: "🗺️", title: "Google Maps qui vous envoie des clients", desc: "Horaires, menu, photos, bouton &ldquo;Itinéraire&rdquo; : tout est là. Le touriste qui passe vous trouve." },
    { icon: "💬", title: "WhatsApp intégré", desc: "Un client veut une table pour 10 personnes ? Il vous écrit directement via le bouton WhatsApp sur votre site." },
    { icon: "📊", title: "Vous voyez ce qui marche", desc: "Combien de visiteurs ? Combien de réservations ? Quel plat attire le plus ? Vous pilotez avec des chiffres." },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">🎯 Ce que vous allez gagner</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici ce qui se passe quand vous avez{" "}
            <span className="text-red-600">un site web professionnel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Chaque avantage ci-dessous = plus de clients, plus de sérénité, plus de revenus.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{b.icon}</span>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{b.title}</h3>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bandeau valeur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-bold">
            💡 Traduction concrète : un site de réservation bien fait ={" "}
            <span className="text-yellow-300">10 à 30 réservations supplémentaires par semaine</span>.
          </p>
          <p className="text-white/80 mt-2 text-sm">
            Multiplié par votre ticket moyen. Multiplié par 52 semaines. Le calcul est intéressant.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== OPPORTUNITIES ====================
function Opportunities() {
  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">💸 L&apos;addition</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici ce que l&apos;invisibilité{" "}
            <span className="text-red-600">coûte à votre restaurant</span><br />
            chaque mois
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Voici les chiffres de ce que l&apos;absence de visibilité en ligne représente.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">👥</div>
            <span className="text-5xl mb-4 block relative">👥</span>
            <div className="text-6xl font-extrabold text-red-600 mb-4 relative">{config.stats.clientsLost}+</div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative">Clients perdus</div>
            <p className="text-gray-600 relative">Chaque mois, des clients potentiels mangent ailleurs parce qu&apos;ils ne vous trouvent pas.</p>
            <div className="mt-4 bg-red-200/50 rounded-lg p-3 relative">
              <p className="text-sm font-semibold text-red-800">Soit environ {Math.round(config.stats.clientsLost / 30)} clients par jour qui vont ailleurs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">🍽️</div>
            <span className="text-5xl mb-4 block relative">🍽️</span>
            <div className="text-6xl font-extrabold text-orange-600 mb-4 relative">{config.stats.reservationsLost}+</div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative">Réservations manquées</div>
            <p className="text-gray-600 relative">Des tables qui restent vides parce que personne ne peut réserver en ligne.</p>
            <div className="mt-4 bg-orange-200/50 rounded-lg p-3 relative">
              <p className="text-sm font-semibold text-orange-800">L&apos;équivalent de {Math.round(config.stats.reservationsLost / 4)} tables vides chaque week-end.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">💶</div>
            <span className="text-5xl mb-4 block relative">💶</span>
            <div className="text-6xl font-extrabold text-purple-600 mb-4 relative">{config.stats.revenueLost}€+</div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative">Revenus non réalisés</div>
            <p className="text-gray-600 relative">Estimation de l&apos;argent qui ne rentre pas dans votre caisse chaque mois.</p>
            <div className="mt-4 bg-purple-200/50 rounded-lg p-3 relative">
              <p className="text-sm font-semibold text-purple-800">De quoi couvrir des charges importantes de votre restaurant.</p>
            </div>
          </motion.div>
        </div>

        {/* Calcul annuel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 rounded-2xl text-white text-center"
        >
          <p className="text-lg md:text-xl opacity-90 mb-2">🧮 Et sur une année entière ?</p>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-4">{config.stats.annualLoss.toLocaleString()}€</h3>
          <p className="text-xl md:text-2xl font-bold mb-2">C&apos;est ce que l&apos;invisibilité représente sur une année.</p>
          <p className="text-white/80 text-base md:text-lg">
            Un site de réservation professionnel coûte <span className="font-bold text-yellow-300">moins d&apos;un mois de ces pertes</span>.
          </p>
          <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
            <p className="text-white font-semibold text-lg">Investir dans un site, c&apos;est investir dans votre restaurant.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-500 text-sm italic">
            Ces chiffres sont des estimations. La réalité dépend de votre situation. 
            Une discussion permet d&apos;y voir plus clair.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const testimonials = [
    {
      name: "Karim Benali",
      restaurant: "Le Saveur du Maroc",
      city: "Casablanca",
      text: "Avant, je passais mes soirées au téléphone à prendre des réservations. Maintenant, tout se fait en ligne, même quand je dors. J&apos;ai gagné un temps fou et ma salle est pleine tous les soirs.",
      result: "+60% de réservations",
    },
    {
      name: "Sophie Dubois",
      restaurant: "La Brasserie Parisienne",
      city: "Paris",
      text: "Mon menu en ligne avec des photos professionnelles a tout changé. Les clients me disent qu&apos;ils ont réservé après avoir vu mes plats. Ça donne tellement plus envie qu&apos;un PDF.",
      result: "Tables pleines à 95%",
    },
    {
      name: "Mohammed El Amrani",
      restaurant: "Riad Restaurant",
      city: "Marrakech",
      text: "Les touristes réservent avant même d&apos;arriver au Maroc. Avant, je dépendais des passages dans la rue. Maintenant, j&apos;ai des réservations garanties avant l&apos;ouverture des vacances.",
      result: "Note Google de 4.9/5",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">⭐ Ils l&apos;ont fait. Voici ce qu&apos;ils en disent.</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Des restaurateurs comme vous<br />
            qui ont <span className="text-red-600">franchi le pas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ils étaient exactement là où vous êtes aujourd&apos;hui. Voici ce qui s&apos;est passé ensuite.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-4 right-4 text-6xl text-red-100 font-serif">&rdquo;</div>
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed relative">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-600 text-sm">{t.restaurant}</div>
                <div className="text-sm text-red-600 font-medium">{t.city}</div>
              </div>
              <div className="mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold inline-block">{t.result}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Ces restaurateurs n&apos;avaient rien de spécial. Ils ont juste{" "}
          <span className="font-bold text-red-600">pris la décision</span> avant les autres.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== RESTAURANT EXAMPLES ====================
function RestaurantExamples() {
  const restaurants = [
    { name: "Le Bistrot Gourmand", url: "https://chezchiro.com", description: "Menu digital, réservation en ligne, et photos qui donnent faim", features: ["Réservation 24/7", "Menu avec photos", "Avis Google", "WhatsApp intégré"], icon: "🍽️", color: "from-red-400 to-orange-400" },
    { name: "Saveurs d'Afrique", url: "https://www.resto-plusci.com/", description: "Site complet avec tous les plats, prix et disponibilités en temps réel", features: ["Carte interactive", "Commandes en ligne", "Google Maps", "Fidélité clients"], icon: "🥘", color: "from-yellow-400 to-orange-500" },
    { name: "La Terrasse du Port", url: "https://bantourestaurant.com/", description: "Design moderne qui reflète l'ambiance unique du restaurant", features: ["Design premium", "Réservation en 3 clics", "Photos pro", "Événements privés"], icon: "🦞", color: "from-blue-500 to-green-500" },
    { name: "Chez Mama Bénin", url: "https://www.lecabanondakar.org", description: "Site chaleureux avec présentation des spécialités, horaires et galerie", features: ["Spécialités du jour", "Horaires visibles", "Galerie photos", "Contact facile"], icon: "🍛", color: "from-green-400 to-emerald-500" },
  ];

  const stats = [
    { value: "89%", label: "des clients cherchent un restaurant sur internet avant de se déplacer", icon: "🔍" },
    { value: "73%", label: "des restaurants ont déjà un site web professionnel", icon: "🍽️" },
    { value: "1ère page", label: "Google : là où vos concurrents apparaissent déjà", icon: "📊" },
    { value: "24h/24", label: "votre restaurant peut recevoir des réservations même fermé", icon: "🕐" },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div 
          className="w-full text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-block bg-red-100 text-red-700 px-6 py-3 rounded-full text-lg font-semibold mb-6 border-2 border-red-200"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            👀 Regardez ce que font les autres restaurants...
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ils ont déjà leur site de réservation...<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Pourquoi pas vous ?</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            De plus en plus de restaurants comprennent l&apos;importance d&apos;être visibles en ligne.
            <span className="font-semibold text-red-600"> Et si c&apos;était votre tour ?</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
              <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Texte d'introduction avant les exemples */}
        <motion.div
          className="w-full max-w-4xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Voici des exemples concrets de restaurants qui ont déjà leur site web professionnel</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ces restaurants existent vraiment. Ils ont compris qu&apos;un site de réservation n&apos;est pas un luxe,
              mais un outil indispensable pour remplir leurs tables et inspirer confiance.
              <span className="font-semibold text-red-600"> Cliquez sur chaque exemple pour visiter leur site.</span>
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-500">
              <span>👆</span>
              <span>Ce sont de vrais sites de restaurants, visibles et accessibles à tous</span>
            </div>
          </div>
        </motion.div>

        {/* Grille des restaurants exemples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {restaurants.map((restaurant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Barre du navigateur simulée */}
              <div className="bg-gray-100 px-4 py-2.5 flex items-center space-x-2 border-b border-gray-200">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white rounded-full px-3 py-1 text-xs text-gray-500 flex items-center space-x-1.5">
                    <span>🔒</span>
                    <span className="truncate">{restaurant.url.replace("https://", "").replace("www.", "")}</span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${restaurant.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-3xl`}>{restaurant.icon}</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">{restaurant.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{restaurant.description}</p>
                    <a href={restaurant.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group/link">
                      <span>🔗 Visiter le site</span>
                      <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700 mb-3">✅ Ce que leur site propose :</div>
                  <div className="grid grid-cols-2 gap-2">
                    {restaurant.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-2">
                        <span className="text-green-500 text-xs flex-shrink-0">✓</span>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Barre de résultat */}
              <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-white text-sm">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="font-semibold">En ligne et visible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/90 text-xs">📱</span>
                  <span className="text-white/90 text-xs">🔍</span>
                  <span className="text-white/90 text-xs">24/7</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de transition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ces restaurants l&apos;ont compris</h3>
            <p className="text-xl sm:text-2xl font-bold mb-8 text-orange-100">Un site de réservation professionnel, c&apos;est maintenant la norme</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-bold text-lg mb-1">Trouvables facilement</div>
                <div className="text-sm opacity-90">Les clients les cherchent et les trouvent sur Google</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-lg mb-1">Accessibles partout</div>
                <div className="text-sm opacity-90">Sur téléphone, tablette et ordinateur, jour et nuit</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-bold text-lg mb-1">Crédibles et modernes</div>
                <div className="text-sm opacity-90">Les clients font plus confiance, ils réservent plus</div>
              </div>
            </div>

            <p className="text-lg mb-8 text-white/90">
              La seule différence entre ces restaurants et le vôtre ?<br className="hidden sm:block" />
              <span className="font-bold text-white">Ils ont fait le choix d&apos;être visibles en ligne.</span>
            </p>

            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-all shadow-xl hover:scale-105"
            >
              <span className="mr-3 text-2xl">💬</span> Je veux un site comme le leur - Parlons-en sur WhatsApp
            </a>
            
            <p className="mt-4 text-white/70 text-sm">👋 Un expert vous explique tout gratuitement, sans engagement</p>
          </div>
        </motion.div>

        {/* Note subtile en bas */}
        <motion.p 
          className="text-center text-gray-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ces restaurants ont déjà franchi le pas. Et si vous preniez 5 minutes pour voir comment faire de même ?
        </motion.p>
      </div>
    </section>
  );
}

// ==================== FINAL CTA ====================
function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            🎯 Vous avez toutes les informations. Place à l&apos;action.
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Parlons de votre restaurant,{" "}
            <span className="text-yellow-300">calmement et gratuitement</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
            Obtenez des explications claires sur la création de votre site de réservation
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-white/85 max-w-3xl mx-auto leading-relaxed">
            Un expert digital spécialisé dans les restaurants vous expliquera tout : comment attirer plus de clients,
            combien ça coûte, combien de temps ça prend, et surtout comment ça va transformer votre activité.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { icon: "💡", title: "Conseils personnalisés", desc: "Pour votre cuisine et votre ville" },
              { icon: "⏱️", title: "Réponse rapide", desc: "Un expert disponible maintenant" },
              { icon: "🔒", title: "Sans engagement", desc: "Juste une discussion ouverte" }
            ].map((item, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <a
            href={`https://wa.me/${config.whatsapp}?text=Bonjour%20Abdoulaye%2C%20je%20souhaite%20discuter%20de%20mon%20site%20de%20réservation%20pour%20mon%20restaurant.`}
            target="_blank"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-12 py-5 rounded-full text-xl transition-all shadow-2xl hover:scale-105"
          >
            <span className="mr-3 text-2xl">💬</span> Parler à un expert sur WhatsApp
          </a>
          
          <p className="mt-6 text-white/75 text-sm">👆 C&apos;est gratuit et vous aurez des réponses concrètes immédiatement</p>

          {/* Ligne du bas */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm italic max-w-2xl mx-auto">
              Vous avez lu cette analyse jusqu&apos;au bout. Prenez 5 minutes. Ça peut tout changer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Marque */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-2xl">R</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">{config.name}</span>
                <p className="text-gray-400 text-sm">Sites web pour restaurants</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              J&apos;aide les restaurateurs à remplir leurs tables grâce au digital.
              Sites de réservation, menus en ligne, visibilité Google.
              Le tout, sans jargon technique et avec un accompagnement humain.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">🚀 Ce que je fais</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2"><span>🌐</span> Sites web pour restaurants</li>
              <li className="flex items-center gap-2"><span>📅</span> Système de réservation en ligne</li>
              <li className="flex items-center gap-2"><span>🍽️</span> Menu digital avec photos</li>
              <li className="flex items-center gap-2"><span>🗺️</span> Optimisation Google Maps</li>
              <li className="flex items-center gap-2"><span>⭐</span> Collecte d&apos;avis Google</li>
              <li className="flex items-center gap-2"><span>💬</span> WhatsApp Business intégré</li>
            </ul>
          </div>

          {/* Contact + Réseaux */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">📞 Me contacter</h4>
            <ul className="space-y-4 text-gray-400 mb-8">
              <li className="flex items-center space-x-3"><span className="text-lg">📞</span><span>{config.phone}</span></li>
              <li className="flex items-center space-x-3"><span className="text-lg">📧</span><span>{config.email}</span></li>
              <li className="flex items-center space-x-3"><span className="text-lg">💬</span><span>WhatsApp : +{config.whatsapp}</span></li>
            </ul>

            <h4 className="font-bold text-lg mb-4 text-white">🔗 Suivez-moi</h4>
            <div className="flex space-x-4">
              <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a href="https://web.facebook.com/Patawala" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-white">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/patawalaabdoulaye1900/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/abdoulaye-patawala-84b138381/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne du bas */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {config.name}. Tous droits réservés.
            </p>
          </div>
          <p className="text-gray-600 text-xs mt-2 text-center italic">
            Fait avec ❤️ pour les restaurateurs qui veulent remplir leurs tables.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ==================== PAGE PRINCIPALE ====================
export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="h-16 md:h-20" />
      <main>
        <Hero />
        <AboutMe />
        <Problems />
        <Comparison />
        <Benefits />
        <Opportunities />
        <Testimonials />
        <RestaurantExamples />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}