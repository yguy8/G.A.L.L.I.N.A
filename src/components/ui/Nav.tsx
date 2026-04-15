import { UserButton } from "@clerk/nextjs";
 
import Image from "next/image";
import Link from "next/link";

export default function NavDeSesion() {
  return (
    <nav className="justify-between items-center px-6 py-4 bg-amber-900 text-white flex w-full">
      {/* Logo + nombre */}
      <div className="flex items-center gap-3">
        <Link href="/dashboard">
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
      <div className="flex gap-6 items-center text-bolder">
        <Link href="/dashboard" className="hover:text-yellow-300">Panel</Link>
        <Link href="/calendario" className="hover:text-yellow-300">Calendario</Link>
        <Link href="/lotes" className="hover:text-yellow-300">Gestión de Huevos</Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "40px",
                height: "40px"
              }
            },
          }}
        />
      </div>
    </nav>
  );
}
