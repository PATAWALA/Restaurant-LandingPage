"use client";

import { motion } from "framer-motion";
import config from "@/data/config";

export default function AboutMe() {
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
            Celui qui va remplir votre restaurant
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Des dizaines de restaurateurs m'ont déjà fait confiance. Voici pourquoi vous êtes le prochain.
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
                  alt="[Ton prénom] - Expert sites web restaurants"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">3+</div>
                <div className="text-xs sm:text-sm text-gray-600">ans d'impact</div>
              </div>

              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-2 sm:p-3 md:p-4 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">+40</div>
                <div className="text-xs sm:text-sm text-gray-600">restaurants</div>
              </div>
            </div>
          </motion.div>

          {/* Bio puissante */}
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
                Expert en sites web pour restaurants • 3 ans d'expérience
              </p>
            </div>

            {/* Corps du message */}
            <div className="space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed">
              {/* Problème → Solution */}
              <div className="bg-red-50 border-l-4 border-red-400 p-3 md:p-4 rounded-r-lg">
                <p className="font-semibold text-red-800 text-sm md:text-base">
                  🚨 Le cauchemar de la plupart des restaurants :
                </p>
                <p className="text-red-700 text-xs md:text-sm mt-1">
                  Votre cuisine est exceptionnelle, votre salle est magnifique, votre équipe est au top. 
                  Mais en ligne, vous n'existez pas. Résultat : des tables vides alors que vos concurrents 
                  moins bons refusent du monde.
                </p>
              </div>

              {/* Présentation percutante */}
              <p className="font-medium">
                Je m'appelle [Abdoulaye Patawala]. Depuis 3 ans,{" "}
                <span className="font-bold text-red-600">
                  j'ai aidé plus de 40 restaurants à remplir leurs tables chaque soir
                </span>{" "}
                grâce à des sites de réservation qui attirent, donnent faim et convertissent les visiteurs en clients.
              </p>

              {/* Pourquoi la restauration */}
              <p>
                Dans le digital, j'aurais pu choisir n'importe quel secteur. Mais un seul 
                univers me passionne vraiment :{" "}
                <span className="font-bold text-orange-600">la restauration</span>.
              </p>

              {/* Citation puissante */}
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
                  "Un site qui met l'eau à la bouche et donne envie de réserver en 3 secondes",
                  "Une visibilité immédiate sur Google quand un client cherche un restaurant dans votre ville",
                  "Un système de réservation qui remplit vos tables, même quand vous êtes en plein service",
                  "Une présence en ligne qui fait paraître vos concurrents amateurs"
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
                  🔑 Pourquoi la crédibilité est vitale pour un restaurant :
                </p>
                <p className="text-orange-800 text-xs md:text-sm mt-2">
                  Sans crédibilité, un restaurant ne peut ni attirer de nouveaux clients, 
                  ni fidéliser sa clientèle, ni justifier ses prix. 
                  Aujourd'hui, <span className="font-bold">la première chose qu'un client vérifie avant de réserver, c'est votre présence en ligne</span>. 
                  Votre menu, vos photos, vos avis, votre site : tout est inspecté en 30 secondes. 
                  Un site web professionnel devient la preuve immédiate que votre restaurant 
                  est sérieux, désirable et digne de confiance. C'est votre réputation 
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
                href={`https://wa.me/${config.whatsapp}?text=Bonjour%20[Ton%20prénom]%2C%20je%20souhaite%20discuter%20de%20mon%20site%20de%20réservation%20pour%20mon%20restaurant.`}
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