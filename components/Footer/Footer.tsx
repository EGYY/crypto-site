import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer/Footer.module.css";
import homeStyles from "../../styles/Home.module.css";
import Logo from "../Header/Logo";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={homeStyles.container}>
                <div className={styles.footerContainer}>
                    <div className={styles.logoContaner}>
                        <Logo />
                        <div className={styles.footerSocials}>
                            <Link href={'https://t.me/zarabarahorosho2017'} target={'_blank'}>
                                <Image src="/telegramIcon.svg" alt="telegram" width={20} height={20} />
                            </Link>
                            {/* <Image src="/whatsAppIcon.svg" alt="telegram" width={20} height={20} /> */}
                            <Link href={'https://www.youtube.com/@zarabarapro/featured'} target={'_blank'}>
                                <Image src="/youtubeIcon.svg" alt="telegram" width={20} height={20} />
                            </Link>
                            <Link href={'https://vk.com/zarabarahorosho'} target={'_blank'}>
                                <Image src="/vkIcon.svg" alt="telegram" width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footerMenu}>
                        <ul>
                            <li>Главная страница</li>
                            <li>О нас</li>
                            <li>Контакты</li>
                        </ul>
                        <ul>
                            <li>Топ-5 пользователей</li>
                            <li>Топ-5 инвестиций</li>
                            <li>Свежие новости</li>
                            <li>Свежие проекты</li>
                            <li>Фавориты блога</li>
                        </ul>
                        <ul>
                            <li>Политика конфиденциальности</li>
                            <li>Пользовательское соглашение</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}
