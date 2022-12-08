import SubscribeEmailCard from "./SubscribeEmailCard";
import SubscribeTelegramCard from "./SubscribeTelegramCard";

export default function SubscribeCards() {
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 60}}>
            <SubscribeTelegramCard />
            <SubscribeEmailCard />
        </div>
    );
}