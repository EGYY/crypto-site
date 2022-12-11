import headerStyles from '../../styles/Header/Header.module.css';
import Logo from './Logo';
import SearchPanel from './SearchPanel';
import AuthButtons from './AuthButtons';
import SubHeader from "./SubHeader";
import UserButtons from './UserButtons';

export default function Header() {
    return (
        <>
            <SubHeader />
            <header className={headerStyles.headerContainer}>
                <div className={headerStyles.headerWrapper}>
                    <Logo />
                    <SearchPanel />
                    <UserButtons />
                    {/* <AuthButtons/> */}
                </div>
            </header>
        </>
    );
}
