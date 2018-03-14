import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F8F8FA',
    borderRadius: 3,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
  },
  profileButton: {
    height: 31,
    marginTop: 10,
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5
  },
  profileButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold'
  }
});

export default styles;