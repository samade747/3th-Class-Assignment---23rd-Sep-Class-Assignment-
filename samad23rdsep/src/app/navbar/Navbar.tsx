// src/app/navbar/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router


const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <button onClick={() => router.push('/')}>Home</button>
      <button onClick={() => router.push('/about')}>About</button>
      <button onClick={() => router.push('/contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;
