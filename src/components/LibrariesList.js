import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibrariesList extends Component {
 renderItem(library) {
   return <ListItem library={library} />;
 }

render() {
   return (
    <FlatList
      data={this.props.libraries}
      renderItem={this.renderItem}
      keyExtractor={(library) => library.id.toString()}
    />
    );
 }
}

const mapStateToProps = state => {
  // console.log(state);
return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibrariesList);
