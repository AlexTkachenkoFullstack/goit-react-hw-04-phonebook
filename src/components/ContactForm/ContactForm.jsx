
import React from "react";
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
    

function ContactForm({onSubmit}) {
        return (<Formik
                    initialValues={initialValue}
                    onSubmit={onSubmit}
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


export default ContactForm

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues:PropTypes.exact({
            name: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
}



