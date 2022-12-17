import React from "react";
import SubscribeEmailCard from "./SubscribeEmailCard";
import SubscribeTelegramCard from "./SubscribeTelegramCard";
import style from "../../styles/SubscribeCards/SubscribeCards.module.css";

export default function SubscribeCards() {
    return(
        <div className={style.subscribeContainer}>
            <SubscribeTelegramCard />
            <SubscribeEmailCard />
        </div>
    );
}
