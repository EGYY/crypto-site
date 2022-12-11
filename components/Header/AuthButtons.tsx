import Button from "../UI/Button";
import styles from "../../styles/Header/AuthButtons.module.css";
import { useState } from "react";
import Modal from "../UI/Modal";
import Logo from "./Logo";
import Input from "../UI/Input";

export default function AuthButtons() {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegModal, setOpenRegModal] = useState(false);

    //reg inputs
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fio, setFio] = useState('');

    return (
        <div className={styles.authButtonsContainer}>
            <Button text='Регистрация' handleClick={() => setOpenRegModal(true)} />
            <Button text='Войти' handleClick={() => setOpenLoginModal(true)} />

            {/* login modal */}
            <Modal
                open={openLoginModal}
                onClose={() => setOpenLoginModal(false)}
                style={{ backgroundColor: '#FFD600', padding: 32 }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Logo dark={true} />
                    <h2 style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 28, lineHeight: '33px', marginTop: 56, marginBottom: 26 }}>Вход</h2>
                </div>
                <Input value={login} onChange={setLogin} label="Логин" />
                <Input value={email} onChange={setEmail} label="Email" type="email" />
                <Input value={password} onChange={setPassword} label="Пароль" type="password" />
                <button style={{
                    background: '#302147',
                    borderRadius: '5px',
                    padding: '8px 32px',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '16px',
                    float: "right",
                    color: '#fff',
                    textTransform: 'uppercase',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    height: '32px',
                    marginTop: '12px',
                }}>Войти</button>
            </Modal>

            {/* registration modal */}
            <Modal
                open={openRegModal}
                onClose={() => setOpenRegModal(false)}
                style={{ backgroundColor: '#FFD600', padding: '64px 32px 32px 32px' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Logo dark={true} />
                    <h2 style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 28, lineHeight: '33px', marginTop: 56, marginBottom: 26 }}>Регистрация</h2>
                </div>
                <Input value={login} onChange={setLogin} label="Логин" />
                <Input value={email} onChange={setEmail} label="Email" type="email" />
                <Input value={password} onChange={setPassword} label="Пароль" type="password" />
                <Input value={fio} onChange={setFio} label="ФИО" />
                <button style={{
                    background: '#302147',
                    borderRadius: '5px',
                    padding: '8px 32px',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '16px',
                    float: "right",
                    color: '#fff',
                    textTransform: 'uppercase',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    height: '32px',
                    marginTop: '12px',
                }}>Регистрация</button>
            </Modal>
        </div >
    )
}