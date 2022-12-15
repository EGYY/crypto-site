import React from "react";
import Image from "next/image";
import InfoPanel from "../InfoPanel/InfoPanel";

export const testDataForInfoPanel = [
    {
        id: 1,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40} />,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
    },
    {
        id: 2,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40} />,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
    },
    {
        id: 3,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40} />,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
    },
    {
        id: 4,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40} />,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
    }
]


export default function InfoPanels() {
    return (
        <div>
            <InfoPanel
                icon={<Image src="/new.svg" alt="Кол-во участников блога" width={30} height={30} />}
                title="свежие статьи"
                data={testDataForInfoPanel}
            />
            <InfoPanel
                icon={<Image src="/idea.svg" alt="Кол-во участников блога" width={30} height={30} />}
                title="свежие проекты"
                data={testDataForInfoPanel}
            />
            <InfoPanel
                icon={<Image src="/ranks.svg" alt="Кол-во участников блога" width={30} height={30} />}
                title="фавориты блога"
                data={testDataForInfoPanel}
            />
        </div>
    );
}

