"use client";

import { motion } from "framer-motion";
import config from "@/data/config";

export default function Hero() {
  return (
    <section className="pt-8 md:pt-12 pb-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge d'alerte */}
          <motion.div
            className="inline-block bg-red-100 text-red-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-red-200"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ⚠️ Pendant que vous lisez ceci, un client réserve chez votre concurrent
          </motion.div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Chaque jour sans site de réservation,<br />
            vous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              payez vos concurrents
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Vos tables devraient être pleines ce soir. Au lieu de ça, elles restent vides parce que
            vos clients ne vous trouvent même pas en ligne.
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto italic">
            Et le pire ? <span className="font-bold text-red-600">Vous ne le savez même pas.</span>{" "}
            Chaque client qui va ailleurs est de l'argent que vous offrez gratuitement au restaurant d'à côté.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-red-200"
            >
              <span className="mr-2 text-xl">💰</span> Voir les opportunités perdues
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all"
            >
              <span className="mr-2 text-xl">👨‍🍳</span> Qui suis-je ?
            </a>
          </div>

          {/* Stats choc */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "89%",
                label: "des clients vérifient votre présence en ligne avant de réserver",
                icon: "🔍",
              },
              {
                number: "3x",
                label: "plus de réservations quand vous avez un site professionnel",
                icon: "📈",
              },
              {
                number: "70%",
                label: "de vos futurs clients réservent sur leur téléphone",
                icon: "📱",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Ligne de rappel */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-sm text-gray-400"
          >
            La question n'est pas "combien ça coûte". La question c'est "combien ça vous coûte de ne rien faire".
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}