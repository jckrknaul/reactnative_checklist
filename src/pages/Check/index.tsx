import React, { useState } from "react";
import { /*CheckBox,*/ Text, StyleSheet, View } from "react-native";
import { CheckBox } from 'react-native-elements';

interface Props {
  title: string;
}

const App = (props: Props) => {
  const [isSelected, setSelection] = useState(false);

  function handleOnPressCheck() {
    setSelection(!isSelected);
  }

  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title={props.title}
          checked={isSelected}
          onPress={handleOnPressCheck}
          containerStyle={styles.checkbox}
        />
      </View>  
    </>
  );
};

const styles = StyleSheet.create({
  
  checkboxContainer: {
    flexDirection: "row",
    height: 32
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: 12,
    backgroundColor: '#000',
    borderWidth: 0
  },
  label: {
    margin: 8,
    color: '#fff'
  },
});

export default App;