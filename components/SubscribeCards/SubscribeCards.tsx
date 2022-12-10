import SubscribeEmailCard from "./SubscribeEmailCard";
import SubscribeTelegramCard from "./SubscribeTelegramCard";

export default function SubscribeCards() {
    return(
        <div style={{display: 'flex', gap: 50, marginBottom: 60, marginTop: 50}}>
            <SubscribeTelegramCard />
            <SubscribeEmailCard />
        </div>
    );
}
