import styles from '../../styles/Home.module.css';
import headerStyles from '../../styles/Header/Header.module.css';
import Logo from './Logo';
import SearchPanel from './SearchPanel';
import AuthButtons from './AuthButtons';

export default function Header() {
    return (
        <header className={headerStyles.headerContainer}>
            <Logo />
            <SearchPanel />
            <AuthButtons />
        </header>
    );
}