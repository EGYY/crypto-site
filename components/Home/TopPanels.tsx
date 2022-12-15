import React from "react";
import Image from "next/image";
import TopPanel from "../TopPanel/TopPanel";

const topUsers = [
    {
        id: 1,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'НИКНЕЙМ',
    },
    {
        id: 2,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'НИКНЕЙМ',
    },
    {
        id: 3,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'НИКНЕЙМ',
    },
    {
        id: 4,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'НИКНЕЙМ',
    },
    {
        id: 5,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'НИКНЕЙМ',
    }
]

const topInvests = [
    {
        id: 1,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'ИНВЕСТИЦИЯ',
    },
    {
        id: 2,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'ИНВЕСТИЦИЯ',
    },
    {
        id: 3,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'ИНВЕСТИЦИЯ',
    },
    {
        id: 4,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'ИНВЕСТИЦИЯ',
    },
    {
        id: 5,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={30} height={30} />,
        name: 'ИНВЕСТИЦИЯ',
    }
]

export default function TopPanels() {
    return (
        <div style={{marginLeft: 20, marginTop: 30}}>
            <TopPanel
                icon={<Image src="/flag.svg" alt="Аватар" width={40} height={40} />}
                title="топ-5 Самых активных пользователей"
                items={topUsers}
            />

            <TopPanel
                icon={<Image src="/moneyChart.svg" alt="Аватар" width={40} height={40} />}
                title="топ 5 “Моих инвестиций” "
                items={topInvests}
            />
        </div>
    )
}
