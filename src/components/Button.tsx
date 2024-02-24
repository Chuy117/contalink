import { Text, TouchableOpacity } from 'react-native';
import { buttonProps } from '../interfaces/buttonInterface';
import { styles } from '../theme/appTheme';

export const Button = ({ text, disabled, onPress }: buttonProps) => {
    return (
        <>
            <TouchableOpacity
                style={!disabled ? styles.buttonEnabled : styles.buttonDisabled}
                disabled={disabled}
                onPress={onPress}
            >
                <Text style={styles.textButton}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}
