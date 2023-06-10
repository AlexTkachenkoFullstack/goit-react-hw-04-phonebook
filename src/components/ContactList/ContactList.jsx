import React from "react";
import PropTypes from 'prop-types';
import { IoPersonCircleSharp   } from "react-icons/io5";
import { ContactListContainer, ContactListItem, ContactListItemInfo, ContactListItemText, ButtonDeliteContact } from "./ContactList.styled";


function ContactList({filter, onDeleteContact}) {
     return (
            <ContactListContainer >
                {filter().map(({ id, name, number })=>{
                    return (
                        <ContactListItem key={id}>
                            <IoPersonCircleSharp />
                            <ContactListItemInfo>
                                <ContactListItemText>{name}: {number}</ContactListItemText>
                                <ButtonDeliteContact
                                    type="button"
                                    onClick={() => {onDeleteContact(id) }}>
                                    Delete
                                </ButtonDeliteContact> 
                            </ContactListItemInfo>   
                        </ContactListItem>
                    )
                })}
            </ContactListContainer>
        )
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