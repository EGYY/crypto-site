import React, { FC } from "react";
import styles from "../../styles/UI/Select.module.css";

interface ISelectProps {
    options: any[],
    placeholder?: string,
    value: any,
    onChange: (value: any) => void,
    label?: string,
}

const Select: FC<ISelectProps> = (props) => {
    const { options, placeholder, value, onChange, label } = props;
    return (
        <div className={styles.selectContainer}>
            {label && (
                <label className={styles.selectLabel}>{label}</label>
            )}
            <select className={styles.select} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} >
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.value}>{option.title}</option>
                    )
                })}
            </select>
        </div>

    )
}

export default Select;