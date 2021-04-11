import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormContact from './FormContact';
import Success from './Success';
import FormProfessionalBackground from './FormProfessionalBackground';
import FormEducation from './FormEducation';
import FormSpecialKnowledgeAndQualifications from './FormSpecialKnowledgeAndQualifications'
import FormConfirm from './FormConfirm'

export class UserForm extends Component {

    // Hält alle Inputs und in welchem Step man sich befindet
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        birthday: new Date(),
        email: '',
        phone: '',
        mobile: '',
        street: '',
        addressnumber: '',
        postcode: '',
        city: '',
        backgroundFormOne: '',
        backgroundDateFromOne: new Date(),
        backgroundDateToOne: new Date(),
        backgroundFormTwo: '',
        backgroundDateFromTwo: new Date(),
        backgroundDateToTwo: new Date(),
        backgroundFormThree: '',
        backgroundDateFromThree: new Date(),
        backgroundDateToThree: new Date(),
        educationDateFrom: new Date(),
        educationDateTo: new Date,
        shool: '',
        education: '',
        languageEnglish: 35,
        languageGerman: 35,
        specialKnowledgeOne: '',
        specialKnowledgeTwo: '',
        specialKnowledgeThree: '',
        specialKnowledgeFour: '',
        specialKnowledgeFive: ''
    };

    // Verarbeitung next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Verarbeitung prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Verabeitung Input changes
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleChangeDateBirthday = input => e => {
        this.setState({ birthday: e });
    };

    handleChangeDateBackgroundDateFromOne = input => e => {
        this.setState({ backgroundDateFromOne: e });
    };

    handleChangeDatebackgroundDateToOne = input => e => {
        this.setState({ backgroundDateToOne: e });
    };

    handleChangeDateBackgroundDateFromTwo = input => e => {
        this.setState({ backgroundDateFromTwo: e });
    };

    handleChangeDatebackgroundDateToTwo = input => e => {
        this.setState({ backgroundDateToTwo: e });
    };

    handleChangeDateBackgroundDateFromThree = input => e => {
        this.setState({ backgroundDateFromThree: e });
    };

    handleChangeDatebackgroundDateToThree = input => e => {
        this.setState({ backgroundDateToThree: e });
    };

    handleChangeDateEducationDateFrom = input => e => {
        this.setState({ educationDateFrom: e });
    };

    handleChangeDateEducationDateTo = input => e => {
        this.setState({ educationDateTo: e });
    };

    handleChangeSliderEnglish = input => (event, newValue) => {
        this.setState({ [input]: newValue });
    };

    handleChangeSliderGerman = input => (event, newValue) => {
        this.setState({ [input]: newValue });
    };

    render() {

        const { step } = this.state;

        const {
            firstName,
            lastName,
            email,
            birthday,
            phone,
            mobile,
            street,
            addressnumber,
            postcode,
            city,
            backgroundFormOne,
            backgroundDateFromOne,
            backgroundDateToOne,
            backgroundFormTwo,
            backgroundDateFromTwo,
            backgroundDateToTwo,
            backgroundFormThree,
            backgroundDateFromThree,
            backgroundDateToThree,
            educationDateFrom,
            educationDateTo,
            shool,
            education,
            languageEnglish,
            languageGerman,
            specialKnowledgeOne,
            specialKnowledgeTwo,
            specialKnowledgeThree,
            specialKnowledgeFour,
            specialKnowledgeFive
        } = this.state;

        const values = {
            firstName,
            lastName,
            email,
            birthday,
            phone,
            mobile,
            street,
            addressnumber,
            postcode,
            city,
            backgroundFormOne,
            backgroundDateFromOne,
            backgroundDateToOne,
            backgroundFormTwo,
            backgroundDateFromTwo,
            backgroundDateToTwo,
            backgroundFormThree,
            backgroundDateFromThree,
            backgroundDateToThree,
            educationDateFrom,
            educationDateTo,
            shool,
            education,
            languageEnglish,
            languageGerman,
            specialKnowledgeOne,
            specialKnowledgeTwo,
            specialKnowledgeThree,
            specialKnowledgeFour,
            specialKnowledgeFive
        };

        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleChangeDateBirthday={this.handleChangeDateBirthday}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormContact
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <FormProfessionalBackground
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangeDateBackgroundDateFromOne={this.handleChangeDateBackgroundDateFromOne}
                        handleChangeDatebackgroundDateToOne={this.handleChangeDatebackgroundDateToOne}
                        handleChangeDateBackgroundDateFromTwo={this.handleChangeDateBackgroundDateFromTwo}
                        handleChangeDatebackgroundDateToTwo={this.handleChangeDatebackgroundDateToTwo}
                        handleChangeDateBackgroundDateFromThree={this.handleChangeDateBackgroundDateFromThree}
                        handleChangeDatebackgroundDateToThree={this.handleChangeDatebackgroundDateToThree}
                        values={values}
                    />
                );
            case 4:
                return (
                    <FormEducation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangeDateEducationDateFrom={this.handleChangeDateEducationDateFrom}
                        handleChangeDateEducationDateTo={this.handleChangeDateEducationDateTo}
                        values={values}
                    />
                );
            case 5:
                return (
                    <FormSpecialKnowledgeAndQualifications
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleChangeSliderEnglish={this.handleChangeSliderEnglish}
                        handleChangeSliderGerman={this.handleChangeSliderGerman}
                        values={values}
                    />
                );
            case 6:
                return (
                    <FormConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );

            case 7:
                return <Success />;
            default:
                (console.log(''))
        }
    }

}

export default UserForm
