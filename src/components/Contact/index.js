import React from 'react'
import { ContactSelection, Span, ContactTitle, Form, FormInput, InputText, InputEmail, InputSub, TextArea, InputSubmit } from './style'
import Footer from './../Footer'
const Contact = () => {
    return (
        <React.Fragment>
            <ContactSelection>
                <div className="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText placeholder="Your Name" />
                            <InputEmail placeholder="Your Email" />
                        </FormInput>
                        <InputSub type="text" placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSelection>
            <Footer />
        </React.Fragment>
    )
}
export default Contact;