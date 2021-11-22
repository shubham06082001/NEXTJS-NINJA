import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image alt='LOgo' src='/farmer.png' width={64} height={64} />
      </div>
      <Link href='/'>
        <a>HOME</a>
      </Link>
      <Link href='/about'>
        <a>ABOUT</a>
      </Link>
      <Link href='/ninjas'>
        <a>LISTING</a>
      </Link>
    </nav>
  );
};

export default Navbar;
