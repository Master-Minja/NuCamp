import { Formik, Form, Field, ErrorMessage } from "formik"
import { Col, FormGroup, Label, Button } from "reactstrap"
import {validateContactForm} from "../utils/validateContactForm";


const ContactForm = () => {

    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        console.log('In Json: ', JSON.stringify(values));
        resetForm();
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor="firstName" md='2'>First Name</Label>
                    <Col md='10'>
                        <Field name='firstName' placeholder='First Name' className='form-control' />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lastName" md='2'>Last Name</Label>
                    <Col md='10'>
                        <Field name='lastName' placeholder='Last Name' className='form-control' />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    </FormGroup>

                <FormGroup row>
                    <Label htmlFor="phoneNumber" md='2'>Phone</Label>
                    <Col md='10'>
                      <Field name='phoneNumber' placeholder='Phone' className='form-control' />
                      <ErrorMessage name='phoneNumber'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                      </ErrorMessage>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md='2'>Email</Label>
                    <Col md='10'>
                        <Field name='email' placeholder="Email" type='email' className='form-control' />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label check htmlFor="agree" md={{size:4, offset:2}}>
                        <Field name='agree' type='checkbox' className='form-check-input'/>
                        {' '}May we contact you?
                    </Label>
                    <Col md='4'>
                        <Field name='contactType' as='select' className='form-control'>
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md='2'>Your Feedback</Label>
                    <Col md='10'>
                        <Field className='form-control' name='feedback' as='textarea' rows='12'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm;