import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";


const Navbar = () => {
    const router = useRouter();

return (
    <nav className={styles.navbar}>
        <button onClick={() => router.push("/")}>Home</button>
        <button onClick={() => router.push("/about")}>About</button>
        <button onClick={() => router.push("/")}>Contact</button>

    </nav>
)


}


export default Navbar