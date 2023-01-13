import React from 'react';
import Wrapper from "../components/Wrapper";
import styles from "../styles/Home.module.css";
import Cards from "../components/Home/Cards";
import TopPanels from "../components/Home/TopPanels";
import SubscribeCards from "../components/SubscribeCards/SubscribeCards";
import AllProjects from "../components/Article/AllProjects";

const Projects = () => {
    return (
        <Wrapper title={'Все свежие проекты'}>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards/>
                        <AllProjects/>
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

export default Projects;
