import styles from "./Footer.module.css";
import UsaImage from "../../assets/usa.png"
const Footer = () => {
    return (
        <div>
            <div className={styles.footerSection}>
                <div className={styles.footerSectionTop}>
                    <div className={`${styles.collg6}`}>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from metta musa</p>
                        <div className={`${styles.collg12}`}>
                            <input type="text" placeholder="Enter your email" className={`${styles.collg6}`} />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className={`${styles.collg6} ${styles.footerSectionTop_2}`}>
                        <h3>CONTACT US</h3>
                        <p>+91 9090909090</p>
                        <p>customercare@mettamuse.com</p>
                        <h3>CURRENCY</h3>
                        <div className={`${styles.collg12}`}>
                            <img src={UsaImage} />
                            <span>USD</span>
                        </div>
                        <p>Transactions will be completed in Euros and a currency reference is available on hove</p>
                    </div>
                </div>
                <div className={styles.footerSectionBottom}>
                   <div className={styles.footerSectionBottomInner}>
                   <div className={styles.collg4}>
                        <h3>metta muse</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>

                    </div>
                    <div className={styles.collg4}>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>

                    </div>
                    <div className={styles.collg4}>
                        <h3>FOLLOW US</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>

                    </div>
                   </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;