import React, { Component } from 'react';
import { Card, CardItem, Button } from '../common';
import { connect } from 'react-redux';
import { noteUpdate, noteCreate } from '../../actions';
import NoteForm from  '../NoteForm';
import PropTypes from 'prop-types';

class NoteCreate extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  static propTypes = {
    noteUpdate: PropTypes.func.isRequired,
    noteCreate: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    note: PropTypes.object
  };

  onButtonPress() {
    const { name, task, day } = this.props;

    this.props.noteCreate({ name, task, day: day || 'Monday' });
  }

  render() {

    return (
      <Card>
        <NoteForm
          { ...this.props }
        />

        <CardItem>
          <Button
            buttonText="Create Note"
            handlePress={this.onButtonPress}
          />
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ noteForm }) => {
  const { name, task, day } = noteForm;

  return { name, task, day };
};


export default connect(mapStateToProps, { noteUpdate, noteCreate })(NoteCreate) ;
