import React, { Component } from 'react';
import { CardItem, Input } from '../common';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { noteUpdate } from '../../actions';

class NoteForm extends Component {

  static propTypes = {
    noteUpdate: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    note: PropTypes.object
  };


  render() {

    const { name, task, day } = this.props;

    return (
      <View>
        <CardItem>
          <Input
            label="Name"
            placeholder="Note Name"
            value={name}
            onChangeText={(value) => this.props.noteUpdate({ prop: 'name', value })}
          />
        </CardItem>

        <CardItem>
          <Input
            label="Task"
            placeholder="Task Description"
            value={task}
            onChangeText={(value) => this.props.noteUpdate({ prop: 'task', value })}
          />
        </CardItem>

        <CardItem style={{ flexDirection: 'column'}}>
          <Text
            style={styles.pickerLabel}
          >
            Select Day
          </Text>
          <Picker
            styles={{ flex: 1 }}
            selectedValue={day}
            onValueChange={(value) => this.props.noteUpdate({ prop: 'day', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>

      </View>
    );
  }
}


const styles = {
  pickerLabel: {
    fontSize: 16,
    paddingLeft: 18
  }
};

const mapStateToProps = ({ noteForm }) => {
  const { name, task, day } = noteForm;

  return { name, task, day };
};


export default connect(mapStateToProps, { noteUpdate })(NoteForm);
