"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Karim Benali",
      restaurant: "Le Saveur du Maroc",
      city: "Casablanca",
      text: "Avant, je passais mes soirées au téléphone à prendre des réservations. Maintenant, tout se fait en ligne, même quand je dors. J'ai gagné un temps fou et ma salle est pleine tous les soirs.",
      result: "+60% de réservations",
    },
    {
      name: "Sophie Dubois",
      restaurant: "La Brasserie Parisienne",
      city: "Paris",
      text: "Mon menu en ligne avec des photos professionnelles a tout changé. Les clients me disent qu'ils ont réservé après avoir vu mes plats. Ça donne tellement plus envie qu'un PDF moche.",
      result: "Tables pleines à 95%",
    },
    {
      name: "Mohammed El Amrani",
      restaurant: "Riad Restaurant",
      city: "Marrakech",
      text: "Les touristes réservent avant même d'arriver au Maroc. Avant, je dépendais des passages dans la rue. Maintenant, j'ai des réservations garanties avant l'ouverture des vacances.",
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
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⭐ Ils l'ont fait. Ils ne regrettent pas.
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Des restaurateurs comme vous<br />
            qui ont <span className="text-red-600">arrêté de perdre de l'argent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ils étaient exactement là où vous êtes aujourd'hui. Voici ce qui s'est passé ensuite.
          </p>
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
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 right-4 text-6xl text-red-100 font-serif">
                &rdquo;
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-600 text-sm">{t.restaurant}</div>
                <div className="text-sm text-red-600 font-medium">{t.city}</div>
              </div>
              <div className="mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold inline-block">
                {t.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message final */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Ces restaurateurs n'avaient rien de spécial. Ils ont juste{" "}
          <span className="font-bold text-red-600">pris la décision</span> avant les autres.
        </motion.p>
      </div>
    </section>
  );
}