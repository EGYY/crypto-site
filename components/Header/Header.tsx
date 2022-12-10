import headerStyles from '../../styles/Header/Header.module.css';
import Logo from './Logo';
import SearchPanel from './SearchPanel';
import AuthButtons from './AuthButtons';
import SubHeader from "./SubHeader";

export default function Header() {
    return (
        <>
            <SubHeader />
            <header className={headerStyles.headerContainer}>
                <div className={headerStyles.headerWrapper}>
                    <Logo/>
                    <SearchPanel/>
                    <AuthButtons/>
                </div>
            </header>
        </>
    );
}
