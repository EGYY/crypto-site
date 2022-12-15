import React, {MouseEventHandler} from "react";
import Button from "../UI/Button";
import styles from "../../styles/Header/AuthButtons.module.css";
import { useState } from "react";
import Modal from "../UI/Modal";
import Logo from "./Logo";
import Input from "../UI/Input";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {login as Login, registration, setError} from "../../redux/user/userSlice";

export default function AuthButtons() {
    const dispatch = useAppDispatch();
    const {loading, error} = useAppSelector(state => state.user);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegModal, setOpenRegModal] = useState(false);

    //reg inputs
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fio, setFio] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        dispatch(Login({username: login, password: password}));
    }

    const handleRegistration = (e: any) => {
        e.preventDefault();
        dispatch(registration({
            username: login,
            email,
            password,
            full_name: fio,
        }));
    }

    const handleCloseLoginModal = () => {
        setOpenLoginModal(false)
        dispatch(setError(''))
    }

    const handleCloseRegistrationModal = () => {
        setOpenRegModal(false)
        dispatch(setError(''))
    }

    return (
        <div className={styles.authButtonsContainer}>
            <Button text='Регистрация' handleClick={() => setOpenRegModal(true)} />
            <Button text='Войти' handleClick={() => setOpenLoginModal(true)} />

            {/* login modal */}
            <Modal
                open={openLoginModal}
                onClose={handleCloseLoginModal}
                style={{ backgroundColor: '#FFD600', padding: 32 }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Logo dark={true} />
                    <h2 style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 28, lineHeight: '33px', marginTop: 56, marginBottom: 26 }}>Вход</h2>
                </div>

                <form onSubmit={handleLogin} >
                    <Input value={login} onChange={setLogin} label="Логин" required={true} />
                    {/*<Input value={email} onChange={setEmail} label="Email" type="email" />*/}
                    <Input value={password} onChange={setPassword} required={true} label="Пароль" type="password" />
                    {error && (
                        <div className='error-msg'>{error}</div>
                    )}
                    <button
                        type={'submit'}
                        disabled={loading}
                        style={{
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
                        }}>
                        {loading ? 'Загрузка...' : 'Войти'}
                    </button>
                </form>
            </Modal>

            {/* registration modal */}
            <Modal
                open={openRegModal}
                onClose={handleCloseRegistrationModal}
                style={{ backgroundColor: '#FFD600', padding: '64px 32px 32px 32px' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Logo dark={true} />
                    <h2 style={{ textTransform: 'uppercase', fontWeight: 700, fontSize: 28, lineHeight: '33px', marginTop: 56, marginBottom: 26 }}>Регистрация</h2>
                </div>
                <form onSubmit={handleRegistration}>
                    <Input value={login} onChange={setLogin} label="Логин" required={true} />
                    <Input value={email} onChange={setEmail} label="Email" type="email" required={true} />
                    <Input value={password} onChange={setPassword} label="Пароль" type="password" required={true} />
                    <Input value={fio} onChange={setFio} label="ФИО" />
                    {error && (
                        <div className='error-msg'>{error}</div>
                    )}
                    <button disabled={loading} style={{
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
                    }}>{loading ? 'Загрузка...' : 'Регистрация'}</button>
                </form>
            </Modal>
        </div >
    )
}
