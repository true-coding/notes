import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';
import PropTypes from 'prop-types';


const Confirm = ({ children, onAccept, onDecline, visible }) => {

  const { container, text, cardItem } = styles;



  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={container}>
        <CardItem style={cardItem}>
          <Text style={text}>
            {children}
          </Text>
        </CardItem>
        <CardItem >
          <Button
            handlePress={onAccept}
            buttonText="Yes"
          />
          <Button
            handlePress={onDecline}
            buttonText="No"
          />
        </CardItem>
      </View>
    </Modal>
  );
};

const styles = {
  cardItem: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

Confirm.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  children: PropTypes.string
};

export { Confirm };
