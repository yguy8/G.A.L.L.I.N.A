import { SignInButton, SignUpButton } from "@clerk/nextjs";
 
import Image from "next/image";
import Link from "next/link";

export default function NavDeSesion() {
  return (
    <nav className="justify-between items-center px-6 py-4 bg-amber-900 text-white flex w-full">
      {/* Logo + nombre */}
      <div className="flex items-center gap-3">
         <Link href="/src/app/page.tsx">
            <Image
            src="/gallinaLogoSinLetras.png"
            alt="Logo GALLINA"
            width={80}
            height={80}
            className="object-contain"
            />
        </Link>
      </div>

      {/* Botones de sesión */}
      <div className="flex gap-4 items-center">
        <SignInButton>
          <button className="text-white bg-orange-700 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Iniciar sesión
          </button>
        </SignInButton>

        <SignUpButton>
          <button className="text-white bg-yellow-600 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Registrarse
          </button>
        </SignUpButton>
      </div>
    </nav>
  );
}
