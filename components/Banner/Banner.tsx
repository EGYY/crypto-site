import Image from 'next/image';
import React, { FC } from 'react'

interface BannerProps {
    link: string;
    image: string;
    style?: React.CSSProperties;
}

export const Banner: FC<BannerProps> = (props) => {
    const { link, image, style } = props;

    return (
        <Image
            src={image}
            alt={image}
            style={style}
            width={700}
            height={700}
            onClick={() => {
                window.open(link, '_blank')
            }}
        />
    )
}
