import React from "react";
import PropTypes from 'prop-types';
import { FilterContainer,FilterLable, FilterInput } from "./Filter.styled";

function Filter({onChangeFilter}) {
         return (<FilterContainer>
                     <FilterLable htmlFor="findContacts">Find contacts by name</FilterLable>
                     <FilterInput type="text" id='findContacts' onChange={onChangeFilter}/>
                 </FilterContainer>
                )
}


export default Filter

Filter.propTypes = {
    onChangeFilter:PropTypes.func.isRequired
}

