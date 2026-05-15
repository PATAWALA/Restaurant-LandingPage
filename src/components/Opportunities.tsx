"use client";

import { motion } from "framer-motion";
import config from "@/data/config";

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            💸 L'addition qui fait mal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici l'argent que vous{" "}
            <span className="text-red-600">offrez à vos concurrents</span>
            <br />
            chaque mois sans le savoir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            On arrête de se mentir. Voici les vrais chiffres de ce que l'invisibilité vous coûte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Clients perdus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">👥</div>
            <span className="text-5xl mb-4 block relative z-10">👥</span>
            <div className="text-6xl font-extrabold text-red-600 mb-4 relative z-10">
              {config.stats.clientsLost}+
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative z-10">
              Clients perdus
            </div>
            <p className="text-gray-600 relative z-10">
              Chaque mois, des clients potentiels mangent ailleurs parce qu'ils ne vous trouvent pas.
            </p>
            <div className="mt-4 bg-red-200/50 rounded-lg p-3 relative z-10">
              <p className="text-sm font-semibold text-red-800">
                Soit {Math.round(config.stats.clientsLost / 30)} clients par jour qui passent la porte d'un autre restaurant.
              </p>
            </div>
          </motion.div>

          {/* Réservations manquées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">🍽️</div>
            <span className="text-5xl mb-4 block relative z-10">🍽️</span>
            <div className="text-6xl font-extrabold text-orange-600 mb-4 relative z-10">
              {config.stats.reservationsLost}+
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative z-10">
              Réservations manquées
            </div>
            <p className="text-gray-600 relative z-10">
              Des tables qui restent vides parce que personne ne peut réserver en ligne.
            </p>
            <div className="mt-4 bg-orange-200/50 rounded-lg p-3 relative z-10">
              <p className="text-sm font-semibold text-orange-800">
                L'équivalent de {Math.round(config.stats.reservationsLost / 4)} tables vides chaque week-end.
              </p>
            </div>
          </motion.div>

          {/* Argent perdu */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 text-8xl opacity-10">💶</div>
            <span className="text-5xl mb-4 block relative z-10">💶</span>
            <div className="text-6xl font-extrabold text-purple-600 mb-4 relative z-10">
              {config.stats.revenueLost}€+
            </div>
            <div className="text-xl font-bold text-gray-900 mb-2 relative z-10">
              Revenus perdus
            </div>
            <p className="text-gray-600 relative z-10">
              Estimation basse de l'argent qui ne rentre pas dans votre caisse chaque mois.
            </p>
            <div className="mt-4 bg-purple-200/50 rounded-lg p-3 relative z-10">
              <p className="text-sm font-semibold text-purple-800">
                De quoi payer le loyer, les charges ET vous verser un salaire.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Calcul annuel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 rounded-2xl p-8 md:p-10 text-white text-center shadow-2xl shadow-red-200">
            <p className="text-lg md:text-xl opacity-90 mb-2">
              🧮 Et sur une année entière ?
            </p>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4">
              {config.stats.annualLoss.toLocaleString()}€
            </h3>
            <p className="text-xl md:text-2xl font-bold mb-2">
              C'est ce que l'invisibilité vous coûte cette année.
            </p>
            <p className="text-white/80 text-base md:text-lg">
              Un site de réservation professionnel coûte <span className="font-bold text-yellow-300">moins d'un mois de ces pertes</span>.
            </p>

            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-white font-semibold text-lg">
                Arrêtez de financer le restaurant d'à côté.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bandeau final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-500 text-sm italic">
            Ces chiffres sont des estimations prudentes. La réalité est probablement pire.
            Vous voulez vraiment continuer à regarder ailleurs ?
          </p>
        </motion.div>
      </div>
    </section>
  );
}