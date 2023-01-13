import React from 'react';
import Wrapper from "../components/Wrapper";
import styles from "../styles/Home.module.css";
import Cards from "../components/Home/Cards";
import TopPanels from "../components/Home/TopPanels";
import SubscribeCards from "../components/SubscribeCards/SubscribeCards";
import AllArticles from "../components/Article/AllArticles";

const Articles = () => {
    return (
        <Wrapper title={'Все статьи'}>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards/>
                        <AllArticles/>
                    </div>
                    <div className='col-8'>
                        <TopPanels/>
                    </div>
                </div>
                <SubscribeCards/>
            </div>
        </Wrapper>
    );
};

export default Articles;
