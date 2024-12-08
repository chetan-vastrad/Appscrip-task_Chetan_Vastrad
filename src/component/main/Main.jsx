import { useState } from "react";
import styles from "./Main.module.css";
import ProductList from "../productlist/ProductList";
const Middle = () => {
    const [isListVisible, setIsListVisible] = useState(false);
    const [mainFilterVisible, setMainFilterVisible] = useState(false);
    const recommendedShowHandler = () => {
        setIsListVisible((prevState) => !prevState);
    }
    const hideMainFilterHandler = () => {
        setMainFilterVisible((prevState) => !prevState);
    }
    return (
        <div className={styles.main}>
            <div className={styles.mobileHeaderMenu}>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className={styles.mainHeader}>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus est, <br />nihil nemo officiis labore atque voluptas magni voluptatibus? </p>
            </div>
            <div className={styles.filterSectionHeader}>
                <div className={styles.filterSection}>
                    <div className={styles.innerfilterSection}>
                        <h5 className={styles.itemsLength}>3245 ITEMS</h5>
                        <h5 onClick={hideMainFilterHandler}><i className={`fa-solid fa-angle-left  ${mainFilterVisible ? styles.rotate : ''}`} ></i> {mainFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}</h5>
                    </div>
                    <div className={styles.mobileCenterBar}></div>
                    <div className={styles.recommendedSection}>
                        <h5 onClick={recommendedShowHandler}>RECOMMENDED
                            <i className={`fa-solid fa-angle-down ${isListVisible ? styles.rotated : ''}`}> </i> </h5>
                        {isListVisible && (
                            <div>
                                <ul>
                                    <li>RECOMMENDED</li>
                                    <li>NEWEST</li>
                                    <li>POPULAR</li>
                                    <li>PRICE: HIGH TO LOW</li>
                                    <li>PRICE: LOW TO HIGH</li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <ProductList filterShow={mainFilterVisible} />
        </div>
    )
}
export default Middle;