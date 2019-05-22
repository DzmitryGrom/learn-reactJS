// @flow

import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { getVisibleFilmsLength } from '../../../core/store/selectors';
import FilterComponent from './component';

type Props = {
  filmsLength: number,
  history: Object,
  location: Object,
};

type State = {
  valueInput: string,
  searchName: string,
  sortBy: string,
};


class FilterContainer extends PureComponent<Props, State> {
  state = {
    valueInput: '',
    searchName: '',
    sortBy: '',
  };

  textInput: any = React.createRef();

  componentDidMount() {
    const { location } = this.props;
    const url = location.search;
    const inputs = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < inputs.length; i += 1) {
      if (url.includes(inputs[i].id)) {
        inputs[i].setAttribute('checked', 'true');
      }
    }
  }

  handleButtonClick = () => {
    const { textInput } = this;
    this.setState({
      valueInput: textInput.current.value,
    });
    const { searchName, sortBy } = this.state;
    const { history } = this.props;
    const val = textInput.current.value;

    if (val !== '') {
      if (!sortBy) {
        history.push(`/search/Search?search=${val}&searchBy=${searchName}`);
      } else {
        history.push(`/search/Search?sortBy=${sortBy}&sortOrder=desc&search=${val}&searchBy=${searchName}`);
      }
    }
  };

  handleButtonClickSearch = (event) => {
    this.setState({ searchName: event.target.id });
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
        getInputRef={this.textInput}
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
