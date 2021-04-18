import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Provider } from 'react-native-paper';

const Toast = ( {propsVisible=true} ) => {
   
  const [visible, setVisible] = React.useState(propsVisible);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
     <Provider>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        >
        Hey All
      </Snackbar>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute', //Here is the trick
    bottom: 0
  },
});

export default Toast;