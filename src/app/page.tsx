import Image from "next/image";
import Link from "next/link";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-yellow-50 to-white px-6 pb-20">
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
      <b>G</b>estor <b>A</b>vícola <b>L</b>isto para <b>L</b>levar la cuenta de <b>I</b>ncubación y proceso de <b>N</b>acimiento de <b>A</b>ves. <br /> Precisión y alertas
        en tiempo real para que nunca pierdas una fecha crítica.
      </p>

      {/* Sección descriptiva */}
      <section className="m-12 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ¿Qué puedes hacer con G.A.L.L.I.N.A?
        </h2>
        <p className="text-gray-600 mb-8">
          Registra tus lotes de incubación, calcula automáticamente las fechas
          clave y visualiza todo en un calendario interactivo. Recibe alertas
          destacadas en tu dashboard y mantén el control total de cada etapa del
          proceso de nacimiento.
        </p>

        <Show when="signed-in">
        {/* Usuario autenticado → ir al dashboard */}
        <Link href="/dashboard">
          <button className="bg-cyan-950 text-white rounded-full px-5 py-2 font-semibold my-4">
            Ir al calendario
          </button>
        </Link>
      </Show>

      <Show when="signed-out">
        {/* Usuario no autenticado → flujo de Clerk */}
        <SignInButton >
          <button className="bg-orange-700 text-white rounded-full px-5 py-2 font-semibold my-8 mx-4">
            Iniciar sesión
          </button>
        </SignInButton>

        <SignUpButton>
          <button className="bg-yellow-600 text-white rounded-full px-5 py-2 font-semibold my-8 mx-4 ">
            Registrarse
          </button>
        </SignUpButton>
      </Show>

        {/* Cuando esten imágenes ilustrativas añadirlas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/gallinaLogo.png" //calendario demo aquí va 
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
              src="/gallinaLogo.png" //imagen de gestión de huevos va aquí
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
    </>
  );
}
