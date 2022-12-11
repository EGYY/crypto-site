import { FC, useEffect } from "react";
import styles from "../../styles/UI/Modal.module.css";

interface IModalProps {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode,
    style?: React.CSSProperties;
}

const Modal: FC<IModalProps> = (props) => {
    const {open, onClose, children, style} = props;

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            e.key === 'Escape' && onClose?.();
        }
         
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    return(
        <div className={`${styles.modal} ${open ? styles.modalActive: ''}`} onClick={() => onClose?.()}>
            <div style={style} className={`${styles.modalContent} ${open ? styles.modalContentActive: ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;