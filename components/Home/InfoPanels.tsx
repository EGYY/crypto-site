import React, {useMemo} from "react";
import Image from "next/image";
import InfoPanel from "../InfoPanel/InfoPanel";
import {useAppSelector} from "../../redux/hooks";
import {_api_url} from "../../redux/store";

export const testDataForInfoPanel = [
    {
        id: 1,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40}/>,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
        href: '/',
    },
    {
        id: 2,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40}/>,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
        href: '/',
    },
    {
        id: 3,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40}/>,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
        href: '/',
    },
    {
        id: 4,
        avatar: <Image src="/infoPanelAvatar.png" alt="Аватар" width={40} height={40}/>,
        text: 'Dex Robin Hood - 1 % в сутки, но есть нюансы...',
        href: '/',
    }
]


export default function InfoPanels() {
    const {projects} = useAppSelector(state => state.main);

    const projectsData = useMemo(() => {
        if (projects.length > 0) {
            const arr = projects.map(item => {
                return ({
                    id: item.id,
                    avatar: <img src={`${_api_url}${item.cover}`} alt="Аватар" width={40} height={40}/>,
                    text: item.title,
                    href: `/project/${item.id}`,
                })
            })
            return arr;
        } else {
            return []
        }
    }, [projects])

    return (
        <div>
            <InfoPanel
                icon={<Image src="/new.svg" alt="Кол-во участников блога" width={30} height={30}/>}
                title="свежие статьи"
                data={testDataForInfoPanel}
            />
            <InfoPanel
                icon={<Image src="/idea.svg" alt="Кол-во участников блога" width={30} height={30}/>}
                title="свежие проекты"
                data={projectsData}
            />
            <InfoPanel
                icon={<Image src="/ranks.svg" alt="Кол-во участников блога" width={30} height={30}/>}
                title="фавориты блога"
                data={testDataForInfoPanel}
            />
        </div>
    );
}

