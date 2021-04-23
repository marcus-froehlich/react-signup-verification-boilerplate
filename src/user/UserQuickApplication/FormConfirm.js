import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Moment from 'moment'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { documentService, accountService, alertService } from "@/_services";

export class FormConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleClick = e => {
        const user = accountService.userValue;
        const dataSet = this.props.values;
        if (confirm('Sind Sie sicher, dass Ihre Daten alle richtig sind?')) {
            documentService.create(dataSet, user.id)
                .then(() => { alertService.success("Eintragung erfolgreich") })
                .then(() => location.href = '.');
        }
    }

    render() {
        const {
            values
        } = this.props;

        function setLanguage(value) {
            switch (value) {
                case 10:
                    return 'Grundkenntnisse'
                case 35:
                    return 'Gut'
                case 65:
                    return 'Fließend'
                case 90:
                    return 'Muttersprache'
            }
        }

        return (
            <div className="container-xl">
                <div className="grid-container">
                    <div className="persName"><h4>{values.firstName} {values.lastName}</h4></div>
                    <div className="persAdr">Anschrift:</div>
                    <div className="persBirth">Geboren:</div>
                    <div className="persTel">Tel.:</div>
                    <div className="persMobile">Mobil:</div>
                    <div className="persEmail">Email:</div>
                    <div className="personalDataTitle"><h2>Persönliche Daten</h2></div>
                    <div className="persDataAdr">{values.street} {values.addressnumber}, {values.postcode} {values.city}</div>
                    <div className="persDataBirth">{Moment(values.birthday).format("DD.MM.YYYY")}</div>
                    <div className="persDataTel">{values.phone}</div>
                    <div className="persDataMobile">{values.mobile}</div>
                    <div className="persDataEmail">{values.email}</div>
                    <div className="backgroundTitle"><h4>Beruflicher Werdegang</h4></div>
                    <div className="backgroundDateOne">
                        <div className="backgroundDateFromOne">{Moment(values.backgroundDateFromOne).format("DD.MM.YYYY")}</div>
                        <div className="backgroundDateToOne">{Moment(values.backgroundDateToOne).format("DD.MM.YYYY")}</div>
                    </div>
                    <div className="backgroundFormTwo">
                        <div className="backgroundDateFromTwo">{Moment(values.backgroundDateFromTwo).format("DD.MM.YYYY")}</div>
                        <div className="backgroundDateToTwo">{Moment(values.backgroundDateToTwo).format("DD.MM.YYYY")}</div>
                    </div>
                    <div className="backgroundFormThree">
                        <div className="backgroundDateFromThree">{Moment(values.backgroundDateFromThree).format("DD.MM.YYYY")}</div>
                        <div className="backgroundDateToThree">{Moment(values.backgroundDateToThree).format("DD.MM.YYYY")}</div>
                    </div>
                    <div className="backgroundFormOneName">{values.backgroundFormOne}</div>
                    <div className="backgroundFormTwoName">{values.backgroundFormTwo}</div>
                    <div className="backgroundFormThreeName">{values.backgroundFormThree}</div>
                    <div className="educationTitle"><h4>Schulbildung</h4></div>
                    <div className="educationFromTo">
                        <div className="educationDateFrom">{Moment(values.educationDateFrom).format("DD.MM.YYYY")}</div>
                        <div className="educationDateTo">{Moment(values.educationDateTo).format("DD.MM.YYYY")}</div>
                    </div>
                    <div className="shoolMain">{values.shool} Mit Abschluss: {values.education}</div>
                    <div className="specialKnowledge"><h4>Besondere Kenntnisse und Qualifikationen</h4></div>
                    <div className="specialKnowledgeOne">{values.specialKnowledgeOne}</div>
                    <div className="specialKnowledgeTwo">{values.specialKnowledgeTwo}</div>
                    <div className="specialKnowledgeThree">{values.specialKnowledgeThree}</div>
                    <div className="specialKnowledgeFour">{values.specialKnowledgeFour}</div>
                    <div className="specialKnowledgeFive">{values.specialKnowledgeFive}</div>
                    <div className="language"><h4>Sprachen</h4></div>
                    <div className="german">Deutsch:</div>
                    <div className="english">Englisch:</div>
                    <div className="languageEnglish">{setLanguage(values.languageGerman)}</div>
                    <div className="languageGerman">{setLanguage(values.languageEnglish)}</div>
                </div>
                <div>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleClick}
                    >Dokument Speichern
                    </Button>
                    <Button
                        variant="contained"
                        onClick={this.back}
                    >Zurück
                    </Button>
                </div>
            </div>
        )
    }
}

export default FormConfirm



