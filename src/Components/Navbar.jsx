import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div  className={styles.navbar}>
    <div>
    <img src="https://thumbs.dreamstime.com/b/silhouette-girl-golden-beauty-stylist-face-salon-hairdresser-174147228.jpg" height="60" width="60" className={styles.logo}/>
    </div>
    <div className={styles.navbar2}>
    <Link to="/" className={styles.navbarLink}>Home</Link>
    <Link to="/products" className={styles.navbarLink}>Products</Link>
    <Link to="/about" className={styles.navbarLink}>About</Link>
    <Link to="/admin" className={styles.navbarLink}>Admin</Link>
    </div>
    </div>
  )
}

export default Navbar;