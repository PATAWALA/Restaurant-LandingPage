export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-600">
          RestoDigital
        </h1>
        <p className="text-2xl text-gray-600">
          Site de réservation pour restaurants
        </p>
        <div className="flex gap-4 justify-center">
          <div className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold">
            Réservation
          </div>
          <div className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
            Menu
          </div>
          <div className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
            Contact
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-8">
          ✅ Si tu vois ce texte en gris avec des boutons colorés, Tailwind fonctionne !
        </p>
      </div>
    </main>
  );
}