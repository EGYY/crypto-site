import React from "react";
import headerStyles from '../../styles/Header/Header.module.css';
import Logo from './Logo';
import SearchPanel from './SearchPanel';
import AuthButtons from './AuthButtons';
import SubHeader from "./SubHeader";
import UserButtons from './UserButtons';
import {useAppSelector} from "../../redux/hooks";

export default function Header() {
    const {isAuth} = useAppSelector(state => state.user);

    return (
        <>
            <SubHeader />
            <header className={headerStyles.headerContainer}>
                <div className={headerStyles.headerWrapper}>
                    <Logo />
                    <SearchPanel />
                    {
                        isAuth ? <UserButtons /> : <AuthButtons/>
                    }
                </div>
            </header>
        </>
    );
}
