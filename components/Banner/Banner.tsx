import Image from 'next/image';
import React, { FC, useMemo } from 'react'
import styles from './Banner.module.css';

interface BannerProps {
    link: string;
    image: string;
    title?: string;
    description?: string;
    style?: React.CSSProperties;
}

export const Banner: FC<BannerProps> = (props) => {
    const { link, image, style, title, description } = props;

    return (
        <div className={styles.imageContainer}>
            {title && <div className={styles.imageTitle} title={title}>{title}</div>}
            <Image
                src={image}
                alt={title || description || image}
                title={description || title || 'Баннер'}
                style={style}
                width={700}
                height={700}
                onClick={() => {
                    window.open(link, '_blank')
                }}
            />
            {description && <div className={styles.imageDescription} title={description}>{description}</div>}
        </div>

    )
}
