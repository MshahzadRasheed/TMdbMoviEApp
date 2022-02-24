// @flow
import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,

    borderTopRightRadius: 40,
    padding: Metrics.baseMargin,

    // width: Metrics.screenWidth - 80,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  settingContainer: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    paddingVertical: Metrics.doubleBaseMargin,
    justifyContent: 'center',
  },
  notiContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});
