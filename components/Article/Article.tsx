import Button from "../UI/Button";
import styles from "../../styles/Article/Article.module.css";
import Modal from "../UI/Modal";
import {FC, useState} from "react";
import Input from "../UI/Input";
import Select from "../UI/Selecet";
import {_api_url} from "../../redux/store";

const Article:FC<any> = ({data}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className={styles.article}>
                <div className={styles.articleHeader}>
                    <img src={data?.cover ? `${_api_url}${data.cover}` : '/articleBG.png'} alt="article background" />
                    <ul>
                        <li><div></div>кол.просмотров</li>
                        <li><div></div>кол.коментариев</li>
                        <li><div></div>дата публикации</li>
                    </ul>
                    <div>
                        <Button text="Поделиться" style={{ marginRight: 20 }} />
                        <Button text="В избранное" />
                    </div>
                </div>
                <div className={styles.articleContent}>
                    <h2>{data?.title}</h2>
                    <ul>
                        <li>Работает уже <span>{data?.how_many_days}</span> дней</li>
                        <li><div></div><span>{data?.user_review}</span> оценка пользователей</li>
                        <li><div></div>статус: {data?.is_active ? 'Актуален' : 'Не актуален'}</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div>
                        <div>
                            <Button style={{ marginRight: 15 }} text="Перейти на сайт" />
                            <Button text="В портфель" handleClick={() => setOpenModal(true)} />
                        </div>
                        <p>Нашли ошибку?</p>
                    </div>
                </div>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <h2 style={{
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '38px',
                    textTransform: 'uppercase',
                }}>Altana Digital Currency Fund</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px'  }}>
                    <Input value="12 000 111 000 222" label="Сумма внесенная в проект" onChange={() => console.log(1)} />
                    <Select
                        label="Валюта"
                        value={"₽"}
                        options={[{ id: 1, value: '₽', title: '₽' }, { id: 2, value: '$', title: '$' }]}
                        onChange={(value) => console.log(value)}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Input value="100 000 000 000 000 000 000" label="Сумма снятия из проекта" onChange={() => console.log(1)} />
                    <Select
                        label="Валюта"
                        value={"$"}
                        options={[{ id: 1, value: '₽', title: '₽' }, { id: 2, value: '$', title: '$' }]}
                        onChange={(value) => console.log(value)}
                    />
                </div>
                <div style={{ display: 'flex', marginTop: 64 }}>
                    <Button text="Сохранить" style={{ marginRight: 16 }} handleClick={() => setOpenModal(false)}/>
                    <Button text="Отменить" handleClick={() => setOpenModal(false)}/>
                </div>
            </Modal>
        </>

    );
}

export default Article;
