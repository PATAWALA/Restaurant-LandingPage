"use client";

import { motion } from "framer-motion";
import config from "@/data/config";

export default function RestaurantExamples() {
  const restaurants = [
    {
      name: "Le Bistrot Gourmand",
      url: "https://www.lebistrotgourmand-cotonou.com",
      description: "Menu digital, réservation en ligne, et photos qui donnent faim",
      features: ["Réservation 24/7", "Menu avec photos", "Avis Google", "WhatsApp intégré"],
      icon: "🍽️",
      color: "from-red-400 to-orange-400",
    },
    {
      name: "Saveurs d'Afrique",
      url: "https://www.saveursdafrique-benin.com",
      description: "Site complet avec tous les plats, prix et disponibilités en temps réel",
      features: ["Carte interactive", "Commandes en ligne", "Google Maps", "Fidélité clients"],
      icon: "🥘",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "La Terrasse du Port",
      url: "https://www.laterrasseduport.com",
      description: "Design moderne qui reflète l'ambiance unique du restaurant",
      features: ["Design premium", "Réservation en 3 clics", "Photos pro", "Événements privés"],
      icon: "🦞",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "Chez Mama Bénin",
      url: "https://www.chezmama-benin.com",
      description: "Site chaleureux avec présentation des spécialités, horaires et galerie",
      features: ["Spécialités du jour", "Horaires visibles", "Galerie photos", "Contact facile"],
      icon: "🍛",
      color: "from-green-400 to-emerald-500",
    },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Pourquoi pas vous ?
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            De plus en plus de restaurants comprennent l'importance d'être visibles en ligne.
            <span className="font-semibold text-red-600"> Et si c'était votre tour ?</span>
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
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Voici des exemples concrets de restaurants qui ont déjà leur site web professionnel
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Ces restaurants existent vraiment. Ils ont compris qu'un site de réservation n'est pas un luxe,
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
                    <span className="truncate">
                      {restaurant.url.replace("https://", "").replace("www.", "")}
                    </span>
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
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${restaurant.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-3xl`}
                  >
                    {restaurant.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">{restaurant.description}</p>
                    <a
                      href={restaurant.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm group/link"
                    >
                      <span>🔗 Visiter le site</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    ✅ Ce que leur site propose :
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {restaurant.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-2"
                      >
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ces restaurants l'ont compris
            </h3>
            <p className="text-xl sm:text-2xl font-bold mb-8 text-orange-100">
              Un site de réservation professionnel, c'est maintenant la norme
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-bold text-lg mb-1">Trouvables facilement</div>
                <div className="text-sm opacity-90">
                  Les clients les cherchent et les trouvent sur Google
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-lg mb-1">Accessibles partout</div>
                <div className="text-sm opacity-90">
                  Sur téléphone, tablette et ordinateur, jour et nuit
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-bold text-lg mb-1">Crédibles et modernes</div>
                <div className="text-sm opacity-90">
                  Les clients font plus confiance, ils réservent plus
                </div>
              </div>
            </div>

            <p className="text-lg mb-8 text-white/90">
              La seule différence entre ces restaurants et le vôtre ?
              <br className="hidden sm:block" />
              <span className="font-bold text-white">
                Ils ont fait le choix d'être visibles en ligne.
              </span>
            </p>

            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-all shadow-xl hover:scale-105"
            >
              <span className="mr-3 text-2xl">💬</span> Je veux un site comme le leur - Parlons-en sur WhatsApp
            </a>

            <p className="mt-4 text-white/70 text-sm">
              👋 Un expert vous explique tout gratuitement, sans engagement
            </p>
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