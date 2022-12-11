import Button from "../UI/Button";
import styles from "../../styles/Article/Article.module.css";

const Article = () => {
    return (
        <div className={styles.article}>
            <div className={styles.articleHeader}>
                <img src="/articleBG.png" alt="article background" />
                <ul>
                    <li><div></div>кол.просмотров</li>
                    <li><div></div>кол.коментариев</li>
                    <li><div></div>дата публикации</li>
                </ul>
                <div>
                    <Button text="Поделиться" style={{marginRight: 20}} />
                    <Button text="В избранное" />
                </div>
            </div>
            <div className={styles.articleContent}>
                <h2>Altana Digital Currency Fund</h2>
                <ul>
                    <li>Работает уже <span>17</span> дней</li>
                    <li><div></div><span>4.7</span> оценка пользователей</li>
                    <li><div></div>статус: Актуален</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div>
                    <div>
                        <Button style={{marginRight: 15}} text="Перейти на сайт"/>
                        <Button text="В портфель"/>
                    </div>
                    <p>Нашли ошибку?</p>
                </div>
            </div>
        </div>
    );
}

export default Article;