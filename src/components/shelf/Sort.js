import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateSort } from "../../store/actions/sortActions";

import Selectbox from "../Selectbox";

const sortBy = [
  { value: "", label: "Selecciona" },
  { value: "lowestprice", label: "Menor al Mayor Precio" },
  { value: "highestprice", label: "Mayor al Menor Precio" }
];

class Sort extends Component {
  handleSort = value => {
    this.props.updateSort(value);
  };

  render() {
    return (
      <div className="sort">
        Ordenado de{" "}
        <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  sort: state.sort.item
});

export default connect(
  mapStateToProps,
  { updateSort }
)(Sort);
