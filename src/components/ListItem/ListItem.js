import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from '../common';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';


class ListItem extends Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  static propTypes = {
    note: PropTypes.object.isRequired
  };

  onRowPress() {
    Actions.noteEdit({ note: this.props.note });
  }

  render() {
    const { name } = this.props.note;
    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress}
      >
        <View>
          <CardItem>
            <Text style={styles.title}>{ name }</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 16,
    paddingLeft: 14
  }
};


export default ListItem;
