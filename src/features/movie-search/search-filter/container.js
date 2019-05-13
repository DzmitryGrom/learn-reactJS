import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getVisibleFilmsLength } from '../../../core/store/selectors';
import FilterComponent from './component';

class FilterContainer extends Component {
  static propTypes = {
    filmsLength: PropTypes.number,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {
    valueInput: false,
    searchName: false,
    sortBy: false,
  };

  componentDidMount() {
    this.textInput.focus();
    const { location } = this.props;
    const url = location.search;
    const inputs = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < inputs.length; i++) {
      if (url.includes(inputs[i].id)) {
        inputs[i].setAttribute('checked', 'true');
      }
    }
  }

  getInputRef = (node) => {
    this.textInput = node;
  };

  handleButtonClick = () => {
    this.setState({
      valueInput: this.textInput.value,
    });
    const { searchName, sortBy } = this.state;
    const { history } = this.props;
    if (this.textInput.value !== '') {
      if (!sortBy) {
        history.push(`/search/Search?search=${this.textInput.value}&searchBy=${searchName}`);
      } else {
        history.push(`/search/Search?sortBy=${sortBy}&sortOrder=desc&search=${this.textInput.value}&searchBy=${searchName}`);
      }
    }
  };

  handleButtonClickSearch = (event) => {
    this.setState({ searchName: event.target.title });
  };

  handleButtonClickSort = (event) => {
    this.setState({ sortBy: event.target.id });
  };

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
        onButtonClickSort={this.handleButtonClickSort}
        filmsLength={filmsLength}
      />
    );
  }
}

const mapStateToProps = state => ({
  filmsLength: getVisibleFilmsLength(state),
});

export default connect(mapStateToProps)(withRouter(FilterContainer));
