import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import TopPanels from "../components/Home/TopPanels";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import InfoStatisticPanel from "../components/InfoPanel/InfoStatisticPanel";
import ProfileCards from "../components/Profile/ProfileCards";
import Button from "../components/UI/Button";
import Wrapper from "../components/Wrapper";
import withAuth from "../hoc/withAuth";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Profile as IProfile } from "../redux/interfaces/user";
import { _api_url } from "../redux/store";
import { useGetProfileQuery } from "../redux/user/userApi";
import { setProfile } from "../redux/user/userSlice";
import styles from '../styles/Home.module.css';

function Profile() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {isAuth} = useAppSelector(state => state.user);
    const {data = {} as IProfile, isLoading} = useGetProfileQuery('', {refetchOnFocus: true});

    useEffect(() => {
        if (data?.message === 'ok') {
            dispatch(setProfile(data));
        }
    }, [data, dispatch]);

    const favoritesData = useMemo(() => {
        if (data?.favourites?.length > 0) {
            const arr = data?.favourites.map(item => {
                return ({
                    id: item.id_project,
                    avatar: <img
                        src={`${_api_url}${item.cover}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "/infoPanelAvatar.png";
                        }}
                        width={40}
                        height={40}
                        alt="Обложка проекта"
                    />,
                    text: item.title_project,
                    href: `/project/${ item.id_project}`,
                })
            })
            return arr;
        } else {
            return []
        }
    }, [data?.favourites])

    if (!isAuth) {
        router.replace('/');
        return null;
    }

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
                                data={favoritesData ?? []}
                                showAll={favoritesData?.length > 5 || false}
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

export default withAuth(Profile);
