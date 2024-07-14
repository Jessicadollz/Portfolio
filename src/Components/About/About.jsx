import React from "react";
import { getImageUrl } from "../../utils"; 
import styles from "./About.module.css";

export const About = () => {
    return (
        <>
            <section className={styles.container} id="about">
                <h1 className={styles.title}>About</h1>
                <div className={styles.content}>
                    <img className={styles.aboutImage}
                    
                    src={getImageUrl("About/Me-transformed.png")}
                    alt="Me with Laptop" />

                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/cursorIcon.png")}
                             alt="Cursor" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>I'm a frontend developer with Experience in building and optimising websites.</p>
                             </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/serverIcon.png")}
                             alt="Server" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>I have experience developing fast and optimised websites and API's</p>
                             </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/uiIcon.png")}
                             alt="Cursor" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Dotnet Developer</h3>
                                <p>I have experience developing loading pages and API's</p>
                             </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}