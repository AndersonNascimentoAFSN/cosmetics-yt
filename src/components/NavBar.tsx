import { Menu, ShoppingCart, Search } from 'lucide-react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <Menu className="sm:hidden icon" />
        <Link href="/" className="text-4xl font-semibold hover:text-accent">Logo</Link>

        <ul className='gap-6 hidden sm:flex'>
          <Link href="/" className="navLink">Home</Link>
          <Link href="/" className="navLink">Shop</Link>
          <Link href="/" className="navLink">Blog</Link>
          <Link href="/" className="navLink">Pages</Link>
          <Link href="/" className="navLink">Contact</Link>
        </ul>

        <div className="flex gap-6 text-2xl">
          <div className="relative cursor-pointer">
            <ShoppingCart className="icon" />
            <div
              className="absolute -top-3 -right-2 bg-red-600 w-5 h-5 rounded-full text-white text-xs grid place-items-center">
              0
            </div>
          </div>
            <Search className="icon" />
        </div>

      </div>
    </nav>
  )
}