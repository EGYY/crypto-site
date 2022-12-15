import { FC } from "react";
import styles from "../../styles/UI/Input.module.css";

interface IInputProps {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    label?: string,
    name?: string,
    type?: 'text' | 'password' | 'email',
    error?: string,
    required?: boolean,
}

const Input: FC<IInputProps> = (props) => {
    const { value, onChange, placeholder, label, name, type, error, required } = props;

    return (
        <div className={styles.inputContainer}>
            {label && (
                <label className={styles.inputLabel} htmlFor={name}>{label}</label>
            )}
            <input
                className={`${styles.input} ${error && styles.inputError}`}
                name={name}
                value={value}
                required={required ?? false}
                type={type ?? 'text'}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}

            />
            {error && (
                <p>{error}</p>
            )}
        </div>
    );
}

export default Input;
