import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { notesFetch } from '../../actions';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ListItem from '../ListItem';


class NoteList extends Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  static propTypes = {
    notesFetch: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      uid: PropTypes.string.isRequired
    }))
  };

  componentWillMount() {
    this.props.notesFetch();
    this.createListSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createListSource(nextProps);
  }

  createListSource({ notes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(notes);
  }

  renderRow(note) {
    return <ListItem note={note} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}

      />
    );
  }
}

const mapStateToProps = (state) => {
  const notes = _.map(state.notes, (val, uid) => {
    return { ...val, uid };
  });

  return { notes };
};

export default connect(mapStateToProps, { notesFetch } )(NoteList);
