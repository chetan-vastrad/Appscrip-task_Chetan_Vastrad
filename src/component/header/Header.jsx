import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.png";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const showMenuHandelr = () => {
        setIsMenuOpen((pre) => !pre);
    }
    return (
        <div>
            <div className={styles.topHeader}>
                <div className={styles.innerTopHeader}>
                    <i className="fa-brands fa-figma"></i>
                    <p> Lorem ipsum dolor.</p>
                </div>
                <div className={styles.innerTopHeader}>
                    <i className="fa-brands fa-figma"></i>
                    <p> Lorem ipsum dolor.</p>
                </div>
                <div className={styles.innerTopHeader}>
                    <i className="fa-brands fa-figma"></i>
                    <p> Lorem ipsum dolor.</p>
                </div>
            </div>
            <div className={styles.topMiddleHeader}>
                <div className={styles.middleHeader}>
                    <div className={`${styles.mobileMenu} collg4`}>
                        {isMenuOpen ? (
                            <i
                                className="fa-solid fa-xmark menuIcon"
                                onClick={showMenuHandelr}
                            ></i>
                        ) : (
                            <i
                                className="fa-solid fa-bars menuIcon"
                                onClick={showMenuHandelr}
                            ></i>
                        )}
                        <img src={Logo} alt="Logo" />
                    </div>
                    <h2 className={styles.mainLogo}>LOGO</h2>
                    <div className={`${styles.middleHeaderIcons} collg4`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <i className="fa-regular fa-user"></i>
                    <span>ENG <i className="fa-solid fa-angle-down"></i></span>
                    </div>
                </div>
                <div className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpen : ""}`}>
                    <ul>
                        <li>SHOP</li>
                        <li>SKILLS</li>
                        <li>STORIES</li>
                        <li>ABOUT</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Header;
