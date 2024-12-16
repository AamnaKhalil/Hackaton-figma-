import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b bg-white">
      {/* Logo */}
      <div className="logo">
        <Image src={Logo} width={185} height={41} alt="Logo" priority />
      </div>

      {/* Navigation Buttons */}
      <nav className="navbtns">
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-600 transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-600 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex gap-6 text-2xl text-gray-700">
        <MdPersonOutline className="hover:text-yellow-600 cursor-pointer transition-colors" />
        <CiSearch className="hover:text-yellow-600 cursor-pointer transition-colors" />
        <GoHeart className="hover:text-yellow-600 cursor-pointer transition-colors" />
        <AiOutlineShoppingCart className="hover:text-yellow-600 cursor-pointer transition-colors" />
      </div>
    </header>
  );
}
