// 1-ЫЙ ВЫРИАНТ С БИБЛИОТЕКАМИ FORMIK И YUP

import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton, ErrorText } from "./ContactForm.styled";
import { Formik, ErrorMessage } from 'formik';
import *as yup from 'yup'

 const schame = yup.object({
  name: yup.string("It should be string").required("It shouldn't be empty").max(30).trim().matches(),
  number: yup.number("It shold be number").required().positive()
 });


 const initialValue = {
        name: '',
        number:''
}

const FormError = ({name}) => {
    return (<ErrorMessage
        name={name}
        render={message =>(<ErrorText> {message}</ErrorText>)}
    />)
}
    

class ContactForm extends Component{

    render() {
        return (<Formik
                    initialValues={initialValue}
                    onSubmit={this.props.onSubmit}
                    validationSchema={schame}
                >
                        <FormContainer autoComplete="off">
                            <FormLabelName >Name
                                <FormInputName 
                                    type="text"
                                    name="name" 
                                />
                                <FormError name="name"/>
                            </FormLabelName>
                                
                            <FormLabelName>Number
                                <FormInputTel
                                    type="number"
                                    name="number"
                                />
                                <FormError name="number"/>
                            </FormLabelName>
                            <FormButton type='submit'>Add contact</FormButton>
                        </FormContainer>
                </Formik>)    
            }
}

export default ContactForm

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues:PropTypes.exact({
            name: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
}



// 2-ОЙ ВАРИАНТ БЕЗ ИСПОЛЬЗОВАНИЯ БИБЛИОТЕК FORMIK И YUP

// import React, { Component } from "react";
// import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types';
// import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton } from "./ContactForm.styled";
// class ContactForm extends Component{
//     state = {
//          name: '',
//         number: '',
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const contactId = nanoid()
//         if (this.props.contacts.some(item => item.name === event.target.name.value)) {
//             alert(`${event.target.name.value} is already in contacts`)
//             return
//         }  
//            this.props.onSubmit({ ...this.state, id: contactId })
//             event.target.name.value = ''
//             event.target.number.value=''
//             this.reset()   
//     }
    
//      reset = () => {
//     this.setState({
//       name: '',
//       number: ''
//    })
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.name]: event.target.value})
//     }
    
//     render() {
//         return (<FormContainer onSubmit={this.handleSubmit}>
//                     <FormLabelName htmlFor="name">Name</FormLabelName>
//                     <FormInputName
//                         type="text"
//                         id="name"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         onChange={this.handleChange}/>
//                     <FormLabelName htmlFor="number">Number</FormLabelName>
//                     <FormInputTel
//                         type="tel"
//                         name="number"
//                         id="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         onChange={this.handleChange}
//                         required />
//                     <FormButton type='submit'>Add contact</FormButton>
//                 </FormContainer>)
// }
// }

// export default ContactForm

// ContactForm.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.exact({
//             name: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//             number:PropTypes.string.isRequired
//                 })
//     ),
//     onSubmit:PropTypes.func.isRequired
// }