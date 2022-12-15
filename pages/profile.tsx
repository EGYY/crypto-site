import Image from "next/image";
import { testDataForInfoPanel } from "../components/Home/InfoPanels";
import TopPanels from "../components/Home/TopPanels";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import InfoStatisticPanel from "../components/InfoPanel/InfoStatisticPanel";
import ProfileCards from "../components/Profile/ProfileCards";
import Button from "../components/UI/Button";
import Wrapper from "../components/Wrapper";
import styles from '../styles/Home.module.css';

export default function Profile() {
    return (
        <Wrapper no_index={true} title="Личный кабинет">
            <div className={styles.container} style={{marginBottom: '66px'}}>
                <div className='row'>
                    <div className='col-16'>
                        <ProfileCards />
                        <div style={{ marginTop: '64px' }}>
                            <InfoPanel
                                icon={<Image src="/star.svg" alt="Избранное" width={30} height={30} />}
                                title="Избранное"
                                data={testDataForInfoPanel}
                                showAll={true}
                            />
                            <InfoStatisticPanel  icon={<Image src="/statistic.svg" alt="Статистика" width={30} height={30} />}
                                title="Статистика" />
                        </div>
                    </div>
                    <div className='col-8'>
                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', marginBottom: '92px' }}>
                            <Button text="Обращение к администратору" />
                        </div>
                        <TopPanels />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}