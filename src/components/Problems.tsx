"use client";

import { motion } from "framer-motion";

export default function Problems() {
  const problems = [
    {
      icon: "👻",
      title: "Vous êtes un fantôme sur Google",
      desc: "Quand un client tape 'meilleur restaurant [votre ville]', vous n'apparaissez même pas. Il clique sur le premier résultat : votre concurrent. Félicitations, vous venez de lui offrir un client.",
    },
    {
      icon: "📞",
      title: "Le téléphone qui tue votre service",
      desc: "Vous êtes en plein coup de feu, le téléphone sonne. Vous répondez et perdez 5 minutes à expliquer le menu. Pendant ce temps, 3 plats refroidissent en cuisine. La réservation en ligne ? Vos concurrents l'ont déjà.",
    },
    {
      icon: "💸",
      title: "Des tables vides = de l'argent brûlé",
      desc: "Chaque table vide ce soir, c'est 50€ à 150€ qui ne rentrent pas dans votre caisse. Multiplié par 30 soirs. Multiplié par 12 mois. Vous voulez vraiment faire le calcul ou vous préférez continuer à perdre de l'argent sans savoir combien ?",
    },
    {
      icon: "🍽️",
      title: "Votre menu est invisible",
      desc: "Aujourd'hui, un client veut voir vos plats AVANT de réserver. Pas de photos en ligne ? Pas de menu visible ? Il passe au restaurant suivant. C'est aussi simple que ça.",
    },
    {
      icon: "⭐",
      title: "Zéro avis, zéro confiance",
      desc: "89% des clients lisent les avis avant de choisir un restaurant. Sans présence en ligne, vous ne collectez même pas d'avis. Vos concurrents affichent leurs 4.8 étoiles. Vous affichez du vide.",
    },
    {
      icon: "🏃",
      title: "Vos concurrents vous remercient",
      desc: "Chaque jour où vous restez invisible en ligne, vous faites un cadeau à vos concurrents. Ils ne vous remercieront jamais en face, mais leurs comptes bancaires vous disent merci.",
    },
  ];

  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⚠️ La vérité qui fait mal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Voici ce qui arrive <span className="text-red-600">en ce moment même</span>{" "}
            dans votre restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ne vous voilez pas la face. Chaque problème ci-dessous vous coûte de l'argent. 
            Du vrai argent. Tous les jours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl hover:shadow-lg transition-shadow border border-red-100"
            >
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bandeau choc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white"
        >
          <p className="text-xl md:text-2xl font-bold">
            👆 Ces 6 problèmes vous coûtent probablement plus de{" "}
            <span className="text-yellow-300">4 500€ par mois</span>. Et vous ne le savez même pas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}