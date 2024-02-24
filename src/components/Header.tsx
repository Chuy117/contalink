import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string
}

export const Header = ({ title }: Props) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
