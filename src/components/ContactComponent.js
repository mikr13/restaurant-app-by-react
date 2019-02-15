import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Control, LocalForm, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
// eslint-disable-next-line
const emreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validEmail = (val) => emreg.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     firstname: '',
        //     lastname: '',
        //     telnum: '',
        //     email: '',
        //     agree: false,
        //     contactType: '',
        //     message: '',
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false,
        //         message: false
        //     }
        // };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    // validate(firstname, lastname, telnum, email, message) {

    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: '',
    //         message: ''
    //     };

    //     if (this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'First Name should be >= 3 characters';
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'First Name should be <= 10 characters';

    //     if (this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'Last Name should be >= 3 characters';
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'Last Name should be <= 10 characters';

    //     // eslint-disable-next-line
    //     const reg = new RegExp("/^\d+$/");
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. Number should contain only numbers';

    //     // eslint-disable-next-line
    //     const emreg = new RegExp("\A[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z");
    //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1 && !emreg.test(email)) 
    //         errors.email = 'Email should contain a @ and it should be a valid format email';

    //     if (this.state.touched.message && message.length < 20 && this.state.message !==null)
    //         errors.message = 'Message should be >= 20 characters';

    //     return errors;
    // }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: {...this.state.touched, [field]: true}
    //     });
    // }

    render() {

        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.message);

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>

                                    {/* REPLACING INPUT WITH Control.text to support React-Redux form */}
                                
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                        {/* value={this.state.firstname}
                                            valid={errors.firstname === ''}
                                            invalid={errors.firstname !== ''}
                                            onBlur={this.handleBlur('firstname')}
                                            onChange={this.handleInputChange}   */}
                                        <Errors
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters ',
                                                maxLength: 'Must be 15 characters or less '
                                            }}/>
                                    {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less '
                                        }}/>
                                    {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
                                </Col>                        
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(9), maxLength: maxLength(13), isNumber
                                        }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 9 numbers with country code ',
                                            maxLength: 'Must be 13 characters or less with country code ',
                                            isNumber: 'Must be numbers '
                                        }}/>
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Must be a valid email id '
                                        }}/>
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                className="form-check-input"
                                                name="agree"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                            className="form-control" defaultValue="" required>
                                        <option value="" disabled hidden>Choose here...</option>
                                        <option value="tel">Tel.</option>
                                        <option value="email">Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        className="form-control"
                                        rows="12" placeholder="Your message..."
                                        validators={{
                                            required, minLength: minLength(20), maxLength: maxLength(1000)
                                        }}></Control.textarea>
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 20 characters ',
                                            maxLength: 'Must be maximum 1000 characters '
                                        }}/>
                                    {/* <FormFeedback>{errors.message}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
               </div>
            </div>
        );
    }
}

export default Contact;