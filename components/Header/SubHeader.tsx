import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import subHeaderStyles from "../../styles/Header/SubHeader.module.css";
import Link from "next/link";

export default function SubHeader() {
    return (
        <div className={subHeaderStyles.subheader}>
            <div className={styles.container}>
                <ul>
                    <li>
                        <Link href={'https://t.me/zarabarahorosho2017'} target={'_blank'}>
                            <Image src="/telegramIcon.svg" alt="telegram" width={20} height={20} />
                            <span>ТЕЛЕГРАММ</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Image src="/whatsAppIcon.svg" alt="telegram" width={20} height={20}/>
                        <span>WHATSAPP</span>
                    </li> */}
                    <li>
                        <Link href={'https://www.youtube.com/@zarabarapro/featured'} target={'_blank'}>
                            <Image src="/youtubeIcon.svg" alt="telegram" width={20} height={20} />
                            <span>YOUTUBE</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://vk.com/zarabarahorosho'} target={'_blank'}>
                            <Image src="/vkIcon.svg" alt="telegram" width={20} height={20} />
                            <span>VK</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    {/*<li>*/}
                    {/*    <Image src="/mobile.svg" alt="telegram" width={20} height={20}/>*/}
                    {/*    <span>МОБИЛЬНАЯ ВЕРСИЯ</span>*/}
                    {/*</li>*/}
                    {/* <li>
                        <Image src="/contacts.svg" alt="telegram" width={20} height={20} />
                        <span>КОНТАКТЫ</span>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}
