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
    if (this.textInput.value !== '') {
      setSearchText(this.textInput.value);
      this.textInput.value = '';
    }
  }

  handleButtonClickTitle = () => {
    const { setSearchByTitle } = this.props;
    setSearchByTitle();
  }

  handleButtonClickGenre = () => {
    const { setSearchByGenre } = this.props;
    setSearchByGenre();
  }

  handleButtonClickRelease = () => {
    const { setSortByRelease } = this.props;
    setSortByRelease();
  }

  handleButtonClickRating = () => {
    const { setSortByRating } = this.props;
    setSortByRating();
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
  setSearchText: PropTypes.func.isRequired,
  setSearchByTitle: PropTypes.func.isRequired,
  setSearchByGenre: PropTypes.func.isRequired,
  setSortByRelease: PropTypes.func.isRequired,
  setSortByRating: PropTypes.func.isRequired,
};

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(null, mapDispathToProps)(FilterContainer);
