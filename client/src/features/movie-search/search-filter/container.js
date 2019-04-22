import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from './actions';

import { getVisibleFilmsLength } from '../../../core/store/selectors';
import FilterComponent from './component';

class FilterContainer extends Component {
  static propTypes = {
    setSearchText: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
    setSortByRelease: PropTypes.func.isRequired,
    setSortByRating: PropTypes.func.isRequired,
    filmsLength: PropTypes.number,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  
  state = {
    valueInput: false,
    searchName: false,
  };

  componentDidMount() {
    this.textInput.focus();
    const { history } = this.props;
    let url = history.location.pathname;
    url = url.substring(url.length - 6);
    url = url.replace(/=/g, '');
    const input = document.getElementById(url);
    input && input.setAttribute('checked', 'true');
  };

  getInputRef = (node) => {
    this.textInput = node;
  };

  handleButtonClick = () => {
    this.setState({
      valueInput: this.textInput.value,
    });
    const { searchName } = this.state;
    const { history } = this.props;
    if (this.textInput.value !== '') {
      history.push({
        pathname:  `search/Search=${this.textInput.value}&searchBy=${searchName}`,
      });
    }
  };

  handleButtonClickSearch = (event) => {
    this.setState({ searchName: event.target.title });
  };

  handleButtonClickRelease = () => {
    const { setSortByRelease } = this.props;
    setSortByRelease();
  };

  handleButtonClickRating = () => {
    const { setSortByRating } = this.props;
    setSortByRating();
  };

  render() {
    const { filmsLength } = this.props;
    const { valueInput, idSelect } = this.state;
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

const mapStateToProps = state => ({
  filmsLength: getVisibleFilmsLength(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispathToProps)(FilterContainer));
