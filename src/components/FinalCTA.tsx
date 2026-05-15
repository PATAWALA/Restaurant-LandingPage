"use client";

import { motion } from "framer-motion";
import config from "@/data/config";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Badge urgence */}
          <motion.div
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-8 border border-white/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ⏱️ Chaque minute d'attente = un client perdu
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Vous avez déjà perdu assez d'argent.<br />
            <span className="text-yellow-300">Il est temps que ça s'arrête.</span>
          </h2>

          <p className="text-xl md:text-2xl mb-4 font-medium text-white/90">
            Discutons de votre restaurant. Gratuitement. Maintenant.
          </p>

          <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
            Expliquez-moi votre situation. Je vous dirai exactement ce que je peux faire pour vous, 
            combien ça coûte, et en combien de temps c'est en place. 
            Si ça ne vous convient pas, vous raccrochez. Zéro pression.
          </p>

          {/* Points rassurance */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              {
                icon: "💡",
                title: "Conseils personnalisés",
                desc: "Pour votre cuisine, votre ville, votre clientèle.",
              },
              {
                icon: "⏱️",
                title: "Réponse en 5 minutes",
                desc: "Je suis disponible maintenant sur WhatsApp.",
              },
              {
                icon: "🔒",
                title: "Sans engagement",
                desc: "Une discussion ouverte. Rien de plus.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bouton CTA principal */}
          <motion.a
            href={`https://wa.me/${config.whatsapp}?text=Bonjour%2C%20je%20veux%20discuter%20de%20mon%20site%20de%20réservation%20pour%20mon%20restaurant.`}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-900 font-extrabold px-12 py-6 rounded-full text-xl md:text-2xl transition-all shadow-2xl shadow-yellow-400/30"
          >
            <span className="mr-3 text-3xl">💬</span> 
            Discuter avec moi sur WhatsApp
          </motion.a>

          <p className="mt-6 text-white/70 text-base">
            👆 C'est gratuit. C'est direct. Et ça peut tout changer pour votre restaurant.
          </p>

          {/* Ligne d'urgence */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm italic max-w-2xl mx-auto">
              Vous avez deux options : continuer à perdre des clients chaque jour, 
              ou prendre 5 minutes pour discuter avec quelqu'un qui peut tout changer. 
              La décision vous appartient. Mais souvenez-vous : pendant que vous hésitez, 
              vos concurrents remplissent leurs tables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}