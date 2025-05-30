import React from 'react';
import styles from "../../styles/InfoPanel/IntroBlock.module.css";
import Image from 'next/image';

const IntroBlock = () => {
    return (
        <div className={styles.container}>
            <Image src={'/intro-photo.jpg'} alt="Владимир Сушков" className={styles.avatar} width={720} height={720} />
            <div className={styles.textBlock}>
                <p>
                    <em>Меня зовут Владимир Сушков. Я в интернете бизнесе более 10 лет, что позволило мне в своё время уйти с наемной работы и полностью обеспечивать себя и свою семью с помощью инвестиций.</em>
                </p>
                <p>
                    <em>На данный момент я живу в Сочи в огромном доме, имею недвижимость на побережье и больше никогда не планирую возвращаться на работу.</em>
                </p>
                <p>
                    <em>Инвестирую во всё, что может приносить доход: криптовалюта, стартапы, хайп проекты, консервативные финансовые инструменты и многое другое.</em>
                </p>
                <p>
                    <em>На своём блоге размещаю все инструменты, которые есть в моем финансовом портфеле.</em>
                </p>
                <p>
                    <em>Вы можете следовать за мной и начать зарабатывать, имея всего 10 долларов на счету.</em>
                </p>
                <p><em>Добро пожаловать на блог!</em></p>
                <div className={styles.quoteMark}>
                    <svg width="75" height="49" viewBox="0 0 75 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.9809 48.5445L42.9833 36.2945C46.3583 36.2952 48.9001 35.8165 50.6086 34.8585C52.3588 33.8172 53.4424 32.6299 53.8593 31.2967C54.3179 29.9634 54.5892 27.3176 54.6733 23.3593L42.9858 23.357L42.9903 0.544541L74.1778 0.550615L74.174 19.9881C74.1726 27.0298 73.9217 31.8214 73.4212 34.363C72.9207 36.9462 71.4618 39.5084 69.0447 42.0496C66.6275 44.5075 63.6897 46.2152 60.2312 47.1729C56.856 48.0889 51.1059 48.5461 42.9809 48.5445ZM0.79342 48.5363L0.795806 36.2863C4.12914 36.287 6.65007 35.8083 8.35859 34.8503C10.1504 33.8506 11.2548 32.6634 11.6718 31.2884C12.1304 29.9135 12.3809 27.2677 12.4233 23.3511L0.798326 23.3488L0.802769 0.536324L31.9278 0.542386L31.924 19.9799C31.9226 27.0216 31.6717 31.8132 31.1712 34.3547C30.6707 36.938 29.2118 39.5002 26.7947 42.0414C24.3775 44.4993 21.4397 46.207 17.9812 47.1647C14.606 48.0807 8.87675 48.5379 0.79342 48.5363Z" fill="#555555" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default IntroBlock;