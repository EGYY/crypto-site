import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import Cards from '../components/Home/Cards';
import InfoPanels from '../components/Home/InfoPanels';
import TopPanels from '../components/Home/TopPanels';
import SubscribeCards from '../components/SubscribeCards/SubscribeCards';
import styles from '../styles/Home.module.css';
import Wrapper from "../components/Wrapper";

export default function Home() {
    return (
        <Wrapper>
            <div className={styles.container}>
                <div className='row'>
                    <div className='col-16'>
                        <Cards/>
                        <InfoPanels/>
                    </div>
                    <div className='col-8'>
                        <TopPanels/>
                    </div>
                </div>
                <SubscribeCards/>
            </div>
        </Wrapper>
    );
}
