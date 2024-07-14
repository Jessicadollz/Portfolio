import React from 'react';
import { getImageUrl } from "../../utils"; 
import styles from "./MainBody.module.css";

export const MainBody = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Hi, I'm Jessica</h1>
                    <p className={styles.description}>I'm a Full-Stack Developer with 2 years of experience. Reach out if you'd like to learn more!</p>
                    <a href="mailto:jesssicadollz@gmail.com"
                    className={styles.contactBtn}
                    >Contact Me!</a>
                </div>
                <img src={getImageUrl("MainBody/1.png")} 
                className={styles.MainBodyImage}
                alt="JD" />
                <div className={styles.topBlur} />

                <div className={styles.bottomBlur} />
            </section>
        </>
    );
}