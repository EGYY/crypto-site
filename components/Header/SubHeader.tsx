import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import subHeaderStyles from "../../styles/Header/SubHeader.module.css";

export default function SubHeader() {
    return (
        <div className={subHeaderStyles.subheader}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <Image src="/telegramIcon.svg" alt="telegram" width={20} height={20}/>
                        <span>ТЕЛЕГРАММ</span>
                    </li>
                    <li>
                        <Image src="/whatsAppIcon.svg" alt="telegram" width={20} height={20}/>
                        <span>WHATSAPP</span>
                    </li>
                    <li>
                        <Image src="/youtubeIcon.svg" alt="telegram" width={20} height={20}/>
                        <span>YOUTUBE</span>
                    </li>
                    <li>
                        <Image src="/vkIcon.svg" alt="telegram" width={20} height={20}/>
                        <span>VK</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Image src="/mobile.svg" alt="telegram" width={20} height={20}/>
                        <span>МОБИЛЬНАЯ ВЕРСИЯ</span>
                    </li>
                    <li>
                        <Image src="/contacts.svg" alt="telegram" width={20} height={20}/>
                        <span>КОНТАКТЫ</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
