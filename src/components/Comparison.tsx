"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⚖️ Le choix est simple
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            D'un côté : votre restaurant aujourd'hui.<br />
            De l'autre : votre restaurant <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">dans 2 semaines</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La différence n'est pas une question de mois de travail. C'est une question de décision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Sans site */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-200"
          >
            <div className="bg-red-500 text-white text-center py-5 font-bold text-lg">
              ❌ Votre restaurant AUJOURD'HUI
            </div>
            <div className="p-8 space-y-4">
              {[
                {
                  title: "Invisible sur Google",
                  desc: "Les clients ne savent même pas que vous existez.",
                },
                {
                  title: "Réservations chaotiques",
                  desc: "Le téléphone sonne pendant le service. Vous ratez des appels. Des clients abandonnent.",
                },
                {
                  title: "Aucune preuve sociale",
                  desc: "Pas d'avis, pas de photos alléchantes, pas de menu visible. Vos concurrents ont tout ça.",
                },
                {
                  title: "Des tables vides",
                  desc: "Ce soir, des clients potentiels mangent ailleurs parce qu'ils ne vous ont pas trouvés.",
                },
                {
                  title: "Image dépassée",
                  desc: "Dans un monde où tout se fait en ligne, vous avez l'air d'un restaurant d'un autre siècle.",
                },
                {
                  title: "Vous bossez plus pour gagner moins",
                  desc: "Vous passez du temps au téléphone au lieu de vous concentrer sur votre cuisine et vos clients.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-0.5">✕</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-red-50 px-8 py-4 text-center">
              <p className="text-red-700 font-bold">
                Résultat : de l'argent perdu, tous les jours.
              </p>
            </div>
          </motion.div>

          {/* Avec site */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200 transform lg:scale-105"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-5 font-bold text-lg">
              ✅ Votre restaurant DANS 2 SEMAINES
            </div>
            <div className="p-8 space-y-4">
              {[
                {
                  title: "Visible sur Google 24h/24",
                  desc: "Les clients vous trouvent immédiatement quand ils cherchent un restaurant dans votre ville.",
                },
                {
                  title: "Réservations automatiques",
                  desc: "Les clients réservent en ligne. Vous recevez une notification. Zéro coup de fil pendant le service.",
                },
                {
                  title: "Menu digital avec photos",
                  desc: "Vos plats donnent faim en ligne. Les clients réservent après avoir vu vos photos.",
                },
                {
                  title: "Tables pleines",
                  desc: "Ce soir, votre salle est remplie de clients qui ont réservé en ligne dans la journée.",
                },
                {
                  title: "Image moderne et pro",
                  desc: "Vous dégagez du sérieux, de la qualité, et les clients vous font confiance avant même d'arriver.",
                },
                {
                  title: "Vous bossez mieux, pas plus",
                  desc: "Moins de temps au téléphone. Plus de temps pour votre cuisine, votre équipe, vos clients.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 px-8 py-4 text-center">
              <p className="text-green-700 font-bold">
                Résultat : plus de clients, moins de stress, plus de revenus.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bandeau final */}
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