import React, { Component } from 'react';
import { Card, CardItem, Button, Confirm } from '../common';
import { connect } from 'react-redux';
import { noteUpdate, noteSave, noteDelete } from '../../actions';
import NoteForm from  '../NoteForm';
import _ from 'lodash';
import PropTypes from 'prop-types';

class NoteEdit extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onDecline = this.onDecline.bind(this);
    this.onAccept = this.onAccept.bind(this);
  }

  state = { showModal: false};

  componentWillMount() {
    _.each(this.props.note, (value, prop) => {
      this.props.noteUpdate({ prop, value });
    });
  }

  static propTypes = {
    noteUpdate: PropTypes.func.isRequired,
    noteSave: PropTypes.func.isRequired,
    noteDelete: PropTypes.func.isRequired,
    name: PropTypes.string,
    task: PropTypes.string,
    day: PropTypes.string,
    uid: PropTypes.string,
    note: PropTypes.shape({
      name: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired
    }).isRequired
  };

  onButtonPress() {
    const { name, task, day } = this.props;

    this.props.noteSave({ name, task, day, uid: this.props.note.uid });
  }

  onAccept() {
    const { uid } = this.props.note;

    this.props.noteDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {

    return (
      <Card>
        <NoteForm
          { ...this.props }
        />

        <CardItem>
          <Button
            buttonText="Save Changes"
            handlePress={this.onButtonPress}
          />
        </CardItem>

        <CardItem>
          <Button
            buttonText="Delete Note"
            handlePress={() => this.setState({ showModal: !this.state.showModal }) }
          />
        </CardItem>

        <Confirm
          visible={this.state.showModal}
          onDecline={this.onDecline}
          onAccept={this.onAccept}

        >
          Are you sure you want to delete note?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ noteForm }) => {
  const { name, task, day } = noteForm;

  return { name, task, day };
};


export default connect(mapStateToProps, { noteUpdate, noteSave, noteDelete })(NoteEdit) ;
