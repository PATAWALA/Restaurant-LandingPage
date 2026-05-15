"use client";

import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: "👁️",
      title: "Visible sur Google en 1ère page",
      desc: "Quand quelqu'un tape 'restaurant [votre ville]', c'est VOUS qui apparaissez en premier. Pas votre concurrent. Fin du fantôme.",
    },
    {
      icon: "📅",
      title: "Réservations 24h/24 sans lever le petit doigt",
      desc: "Les clients réservent à 23h, pendant que vous dormez. Vous vous réveillez avec des tables remplies. Le rêve.",
    },
    {
      icon: "🍽️",
      title: "Menu digital qui donne faim",
      desc: "Photos professionnelles de vos plats. Descriptions qui mettent l'eau à la bouche. Les clients réservent avant même d'avoir fini de scroller.",
    },
    {
      icon: "⭐",
      title: "Avis Google qui rassurent",
      desc: "Quand un nouveau client hésite, il voit vos 4.8 étoiles et les commentaires élogieux. Sa décision est prise en 3 secondes.",
    },
    {
      icon: "📱",
      title: "100% optimisé pour téléphone",
      desc: "80% de vos clients réservent depuis leur smartphone. Votre site sera parfait sur tous les écrans. Zéro friction, zéro abandon.",
    },
    {
      icon: "🗺️",
      title: "Google Maps qui vous envoie des clients",
      desc: "Horaires, menu, photos, bouton 'Itinéraire' : tout est là. Le touriste qui passe dans votre rue vous trouve en un clic.",
    },
    {
      icon: "💬",
      title: "WhatsApp intégré pour les urgences",
      desc: "Un client veut une table pour 10 personnes ce soir ? Il vous écrit directement. Vous répondez en 30 secondes. Table vendue.",
    },
    {
      icon: "📊",
      title: "Vous voyez ENFIN ce qui marche",
      desc: "Combien de visiteurs ? Combien de réservations ? Quel plat attire le plus ? Vous pilotez votre restaurant avec des vrais chiffres, pas à l'aveugle.",
    },
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
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎯 Ce que vous allez VRAIMENT gagner
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici ce qui se passe quand vous arrêtez<br />
            de <span className="text-red-600">perdre du temps</span> et que vous passez à l'action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque bénéfice ci-dessous = plus d'argent dans votre caisse. Point.
          </p>
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
            Multiplié par votre ticket moyen. Multiplié par 52 semaines. Le calcul donne le vertige.
          </p>
        </motion.div>
      </div>
    </section>
  );
}