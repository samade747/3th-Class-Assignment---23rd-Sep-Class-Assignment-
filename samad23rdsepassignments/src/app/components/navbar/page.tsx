// components/Navbar/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link> 
      <Link href="/Contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
