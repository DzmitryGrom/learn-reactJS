import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from './actions';

import { getVisibleFilmsLength } from '../../../core/store/selectors';
import FilterComponent from './component';

class FilterContainer extends Component {
  state = {
    valueInput: false,
    searchName: false,
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
    const { setSearchText, setSearch } = this.props;
    const { searchName } = this.state;
    if (this.textInput.value !== '') {
      setSearchText(this.textInput.value);
      searchName && setSearch(searchName);
    }
  }

  handleButtonClickSearch = (event) => {
    this.setState({ searchName: event.target.title });
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
    const { filmsLength } = this.props;
    const { valueInput } = this.state;
    if (valueInput.length > 15) {
      throw new Error('I crashed!');
    }
    return (
      <FilterComponent
        getInputRef={this.getInputRef}
        onButtonClick={this.handleButtonClick}
        onButtonClickSearch={this.handleButtonClickSearch}
        onButtonClickRelease={this.handleButtonClickRelease}
        onButtonClickRating={this.handleButtonClickRating}
        filmsLength={filmsLength}
      />
    );
  }
}

FilterContainer.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSortByRelease: PropTypes.func.isRequired,
  setSortByRating: PropTypes.func.isRequired,
  filmsLength: PropTypes.number,
};

const mapStateToProps = state => ({
    filmsLength: getVisibleFilmsLength(state),
});

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(FilterContainer);
