import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  // UNSAFE_componentWillUpdate() {
  //
  // }

  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
      <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
      </CardSection>
      );
    }
  }

  render() {
    //LayoutAnimation.spring();

      const { titleStyle } = styles;
      const { id, title } = this.props.library.item;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.seletedLibrary(id)}
      >
        <View>
          <CardSection>
          <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
