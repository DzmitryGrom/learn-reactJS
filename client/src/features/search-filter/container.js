import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from './actions';

import FilterComponent from './component';

class FilterContainer extends Component {
  state = {
    valueInput: false,
  };

  componentDidMount() {
    this.textInput.focus();
  }

  getInputRef = (node) => {
    this.textInput = node;
  };

  handleButtonClick = () => {
    this.setState({
      valueInput: this.textInput.value,
    });
    const { setSearchText } = this.props;
    setSearchText(this.textInput.value);
  }

  handleButtonClickTitle = () => {
    const { searchByTitle } = this.props;
    searchByTitle();
  }

  handleButtonClickGenre = () => {
    const { searchByGenre } = this.props;
    searchByGenre();
  }

  handleButtonClickRelease = () => {
    const { sortByRelease } = this.props;
    sortByRelease();
  }

  handleButtonClickRating = () => {
    const { sortByRating } = this.props;
    sortByRating();
  }

  render() {
    const { valueInput } = this.state;
    if (valueInput.length > 15) {
      throw new Error('I crashed!');
    }
    return (
      <FilterComponent
        getInputRef={this.getInputRef}
        onButtonClick={this.handleButtonClick}
        onButtonClickGenre={this.handleButtonClickGenre}
        onButtonClickTitle={this.handleButtonClickTitle}
        onButtonClickRelease={this.handleButtonClickRelease}
        onButtonClickRating={this.handleButtonClickRating}
      />
    );
  }
}

FilterContainer.propTypes = {
  setSearchText: PropTypes.func,
  searchByTitle: PropTypes.func,
  searchByGenre: PropTypes.func,
  sortByRelease: PropTypes.func,
  sortByRating: PropTypes.func,
};

FilterContainer.defaultProps = {
  setSearchText: null,
  searchByTitle: null,
  searchByGenre: null,
  sortByRelease: null,
  sortByRating: null,
};

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(null, mapDispathToProps)(FilterContainer);
