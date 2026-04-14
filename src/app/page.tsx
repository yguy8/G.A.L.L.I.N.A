import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-yellow-50 to-white px-6">
      {/* Logo arriba */}
      <div className="mt-8">
        <Image
          src="/gallinaLogoSinLetras.PNG"
          alt="Logo de GALLINA"
          width={200}
          height={200}
          className="object-contain"
          priority
        />
      </div>

      {/* Sección Hero */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mt-6">
        G.A.L.L.I.N.A
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mt-4">
        Gestor Avícola para incubación y nacimiento de aves. Precisión y alertas
        en tiempo real para que nunca pierdas una fecha crítica.
      </p>

      {/* Sección descriptiva */}
      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ¿Qué puedes hacer con G.A.L.L.I.N.A?
        </h2>
        <p className="text-gray-600 mb-8">
          Registra tus lotes de incubación, calcula automáticamente las fechas
          clave y visualiza todo en un calendario interactivo. Recibe alertas
          destacadas en tu dashboard y mantén el control total de cada etapa del
          proceso de nacimiento.
        </p>

        {/* Cuando esten imágenes ilustrativas añadirlas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/calendarioDemo.png"
              alt="Vista de calendario"
              width={400}
              height={250}
              className="rounded-lg shadow-md object-cover"
            />
            <p className="mt-4 text-gray-700 font-medium">
              Calendario visual de incubación
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/gestionHuevosDemo.png"
              alt="Gestión de huevos"
              width={400}
              height={250}
              className="rounded-lg shadow-md object-cover"
            />
            <p className="mt-4 text-gray-700 font-medium">
              Gestión detallada de lotes y huevos
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
