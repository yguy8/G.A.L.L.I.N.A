import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex flex-row gap-6 text-bolder bg-amber-800 w-full py-10">
          <Link href="" className="hover:text-yellow-300">Comenzar a usar</Link>
          <Link href="" className="hover:text-yellow-300">Aprender sobre gallinas</Link>
          {/* <Link href="" className="hover:text-yellow-300"></Link> */}
      </div>
      </footer>
    </div>
  )
}

export default Footer
