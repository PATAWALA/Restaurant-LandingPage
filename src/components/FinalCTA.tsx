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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            🎯 Ne laissez pas vos concurrents prendre vos clients
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Parlez directement avec un expert<br />
            <span className="text-yellow-300">qui comprend la restauration en ligne</span>
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
              { icon: "⏱️", title: "Réponse en 5 minutes", desc: "Un expert disponible maintenant" },
              { icon: "🔒", title: "Sans engagement", desc: "Juste une discussion ouverte" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
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

          <p className="mt-6 text-white/75 text-sm">
            👆 C'est gratuit et vous aurez des réponses concrètes immédiatement
          </p>

          {/* Ligne d'urgence */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm italic max-w-2xl mx-auto">
              Pendant que vous hésitez, vos concurrents remplissent leurs tables.
              Prenez 5 minutes. Ça peut tout changer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}