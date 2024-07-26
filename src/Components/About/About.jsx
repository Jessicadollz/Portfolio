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
                    
                    src={getImageUrl("About/Me.png")}
                    alt="Me with Laptop" />

                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/cursorIcon.png")}
                             alt="Cursor" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>I'm a skilled Front-End Developer with 2 years of experience, having a strong proficiency 
                                     in modern web technologies such as React, Html, CSS and JavaScript, ensuring seamless user 
                                     experiences and responsive designs.</p>
                             </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/serverIcon.png")}
                             alt="Server" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>I am specialized in building robust and scalable server-side applications. 
                                    With expertise in database management, API development, and server architecture, 
                                    ensuring secure and efficient data handling. 
                                </p>
                             </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("About/uiIcon.png")}
                             alt="Cursor" 
                             />
                             <div className={styles.aboutItemText}>
                                <h3>Dotnet Developer</h3>
                                <p>I have have a strong understanding of C#, ASP.NET, and MVC architecture, 
                                    also to build robust server-side solutions, API development ensuring efficient 
                                    data handling and seamless integration with front-end systems.</p>
                             </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}