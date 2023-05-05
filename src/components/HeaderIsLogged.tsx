import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg'
import { Button } from "./globals/Button";

export function HeaderIsLogged() {
  return (
    <>
      <div className="border-b -border-b--baseBox w-full">
      <header className="Container h-20 flex items-center justify-between">
        <Link href="/">
        <Image src={logo} width={152} alt="" />
        </Link>

        <nav className="flex gap-3 items-center">
          <ul className="flex gap-3">
            
          </ul>
            <Button className="">Log in</Button>
            <Button className="border border-blue-600 uppercase text-xs font-bold py-3 px-4 rounded leading-base hover:border-transparent hover:-bg--hoverBaseBox hover:text-white transition-colors">Create account</Button>
        </nav>
      </header>
      </div>
    </>
  )
}