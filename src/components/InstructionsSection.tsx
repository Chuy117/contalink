import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { insProps } from '../interfaces/instructionsSectionInterface';

export const InstructionsSection = ({ text }: insProps) => {
    return (
        <View style={styles.section}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
