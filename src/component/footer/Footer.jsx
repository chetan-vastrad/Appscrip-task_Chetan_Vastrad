import { useState } from "react";
import styles from "./Footer.module.css";
import UsaImage from "../../assets/usa.png"
import Gpay from "../../assets/gpay.png"
import Applepay from "../../assets/apple-pay.png"
import Paypal from "../../assets/paypal.png"
import Mastercard from "../../assets/card.png"
import Amex from "../../assets/amex.png"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    return (
        <div>
            <div className={styles.footerSection}>
                <div className={styles.footerSectionTop}>
                    <div className={`${styles.collg6} ${styles.footerSectionTop_1}`}>
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from metta musa</p>
                        <div className={`${styles.collg12}`}>
                            <input type="text" placeholder="Enter your email" className={`${styles.collg6}`} />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className={`${styles.collg6} ${styles.footerSectionTop_2}`}>
                        <h3>CONTACT US</h3>
                        <div className={styles.contactUsSection}>
                            <p>+91 9090909090</p>
                            <p>customercare@mettamuse.com</p>
                        </div>
                        <h3>CURRENCY</h3>
                        <div className={`${styles.collg12}`}>
                            <img src={UsaImage} />
                            <span>USD</span>
                        </div>
                        <p className={styles.footerSectionCurrency}>Transactions will be completed in Euros and a currency reference is available on hove</p>
                    </div>
                </div>
                <div className={styles.footerSectionBottom}>
                    <div className={styles.footerSectionBottomInner}>
                        <div className={styles.collg4}>
                            <div
                                className={styles.footerHeader}
                                onClick={() => toggleSection("mettaMuse")}
                            >
                                <h3>metta muse</h3>
                                <i
                                    className={`fa-solid fa-angle-${expandedSection === "mettaMuse" ? "up" : "down"
                                        }`}
                                ></i>
                            </div>
                            <ul
                                className={`${styles.footerContent} ${expandedSection === "mettaMuse" ? styles.visible : styles.hidden
                                    }`}
                            >
                                <li>About Us</li>
                                <li>Stories</li>
                                <li>Artisans</li>
                                <li>Boutiques</li>
                                <li>Contact Us</li>
                                <li>EU Compliances Docs</li>
                            </ul>
                        </div>
                        <div className={styles.collg4}>
                            <div
                                className={styles.footerHeader}
                                onClick={() => toggleSection("quickLinks")}
                            >
                                <h3>QUICK LINKS</h3>
                                <i
                                    className={`fa-solid fa-angle-${expandedSection === "quickLinks" ? "up" : "down"
                                        }`}
                                ></i>
                            </div>
                            <ul
                                className={`${styles.footerContent} ${expandedSection === "quickLinks" ? styles.visible : styles.hidden
                                    }`}
                            >
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
                           <div className={styles.followus}>
                           <div
                                className={`${styles.footerHeader}`}
                                onClick={() => toggleSection("followus")}
                            >
                                <h3>FOLLOW US</h3>
                                <i
                                    className={`fa-solid fa-angle-${expandedSection === "followus" ? "up" : "down"
                                        }`}
                                ></i>
                            </div>
                            <ul
                                className={`${styles.footerContent} ${expandedSection === "followus" ? styles.visible : styles.hidden
                                    }`}
                            >
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-linkedin"></i></li>
                            </ul>
                           </div>
                            <div className={styles.paymentSection}>
                                <h3>metta muse ACCEPTS</h3>
                                <ul className={styles.paymentCard}>
                                    <li><img src={Gpay} alt="G Pay Logo" /></li>
                                    <li><img src={Applepay} alt="G Pay Logo" /></li>
                                    <li><img src={Paypal} alt="G Pay Logo" /></li>
                                    <li><img src={Amex} alt="G Pay Logo" /></li>
                                    <li><img src={Mastercard} alt="G Pay Logo" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <p style={{ textAlign: "center" }}>Copright: @ {currentYear} metta muse. All rights reservesed </p>
            </div>
        </div>
    )
}
export default Footer;