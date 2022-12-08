import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import Cards from '../components/Home/Cards';
import InfoPanels from '../components/Home/InfoPanels';
import TopPanels from '../components/Home/TopPanels';
import SubscribeCards from '../components/SubscribeCards/SubscribeCards';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>БЛОГ О ZАRАБОТКЕ ZARABARAHOROSHO</title>
        <meta name="description" content="БЛОГ О ZАRАБОТКЕ ZARABARAHOROSHO" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <div className={styles.container}>
        <div className='row'>
          <div className='col-16'>
            <Cards />
            <InfoPanels />
          </div>
          <div className='col-8'>
            <TopPanels/>
          </div>
        </div>
        <SubscribeCards />
      </div>

      <Footer />
    </>
  );
}
