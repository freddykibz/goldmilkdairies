import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
   <header className='w-full absolute z-10'>
    <nav className="max-width flex-center sm:px-16 px-6 py-4">
      <Link href="/" className='flex-center'>
        <Image
          src= ""
          alt="Gold Milk Logo"
          width="118"
          height="18"
          className="object-contain"
        />
      </Link>
    </nav>
   </header>
  )
}

export default Navbar