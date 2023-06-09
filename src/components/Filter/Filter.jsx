import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FilterContainer,FilterLable, FilterInput } from "./Filter.styled";

class Filter extends Component{
  
    render() {
        return (<FilterContainer>
                    <FilterLable htmlFor="findContacts">Find contacts by name</FilterLable>
                    <FilterInput type="text" id='findContacts' onChange={this.props.onChangeFilter}/>
                </FilterContainer>
                )
            }
}

export default Filter

Filter.propTypes = {
    onChangeFilter:PropTypes.func.isRequired
}