import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div>
        <footer className="bg-amber-800 text-white p-4">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row gap-6 font-bold">
            <Link href="/" className="hover:text-yellow-300">Comenzar a usar</Link>
            <Link href="/" className="hover:text-yellow-300">Aprender sobre gallinas</Link>
          </div>
          <Image
            src="/gallinaLogo.PNG"
            alt="Logo de GALLINA"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>
    </footer>
    </div>
  )
}

export default Footer
