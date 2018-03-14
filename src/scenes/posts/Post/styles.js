import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lighter,
    borderRadius: 3,
    padding: metrics.padding,
    marginTop: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  postDescription: {
    marginTop: 10,
    color: colors.dark,
  },
});

export default styles;