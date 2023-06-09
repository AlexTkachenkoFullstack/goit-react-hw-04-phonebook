import React, { Component } from "react";
import PropTypes from 'prop-types';
import { IoPersonCircleSharp   } from "react-icons/io5";
import { ContactListContainer, ContactListItem, ContactListItemInfo, ContactListItemText, ButtonDeliteContact } from "./ContactList.styled";
class ContactList extends Component{
  
 

    render() {
        return (
            <ContactListContainer >
                {this.props.filter().map(({ id, name, number })=>{
                    return (
                        <ContactListItem key={id}>
                            <IoPersonCircleSharp />
                            <ContactListItemInfo>
                                <ContactListItemText>{name}: {number}</ContactListItemText>
                                <ButtonDeliteContact
                                    type="button"
                                    onClick={() => { this.props.onDeleteContact(id) }}>
                                    Delete
                                </ButtonDeliteContact> 
                            </ContactListItemInfo>
                                
                        </ContactListItem>
                        
                    )
                })}
            </ContactListContainer>
        )
    }
}

export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
    ),
    onDeleteContact: PropTypes.func.isRequired
}