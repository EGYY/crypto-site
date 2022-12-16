import { FC, useMemo } from "react";

interface IComponentProps {
    value: number,
    onChange?: (number: number) => void,
    type?: 'small' | 'large',
}

const Rate: FC<IComponentProps> = ({ value, onChange, type = 'large' }) => {
    const sizes = useMemo(() => {
        if (type === 'large') {
            return {
                width: 26,
                height: 26
            }
        } else {
            return {
                width: 16,
                height: 16,
            }
        }
    }, [type])
    return (
        <div>
            {
                [...Array(5)].map((e, idx) => {
                    return (
                        <svg style={{ cursor: type === 'small' ? 'default' : 'pointer' }}
                            onClick={() => type === 'large' && onChange?.(idx + 1)}
                            key={idx}
                            width={sizes.width}
                            height={sizes.height}
                            viewBox="0 0 26 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.6177 0L16.5163 7.90022L25.2349 9.16742L18.926 15.3165L20.4153 24L12.6177 19.9005L4.81958 24L6.30884 15.3165L0 9.16742L8.71863 7.90022L12.6177 0Z" fill={idx + 1 <= value ? "#EFCE4A" : '#d1d1d1'} />
                        </svg>
                    )
                })
            }
        </div>
    );
}

export default Rate;