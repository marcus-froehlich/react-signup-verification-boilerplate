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
        documentService.create(dataSet, user.id).then(() => { alertService.success("Eintragung erfolgreich")})
    }

    // printDocument(e) {
    //     e.preventDefault();
    //     const input = document.getElementById("grid-container");  
    //     html2canvas(input, {
    //         scrollX: 5,
    //         scrollY: -window.scrollY,
    //     })  
    //     .then((canvas) => {  
    //       var imgWidth = 200;  
    //       var pageHeight = 200;  
    //       var imgHeight = canvas.height * imgWidth / canvas.width;  
    //       var heightLeft = imgHeight;
    //       const imgData = canvas.toDataURL('image/png');
    //       const pdf = new jsPDF('p', 'mm', 'a4');  
    //       var position = 0;  
    //       pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
    //       pdf.save("download.pdf");   
    //       });  
    //   }  

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
            <div className="grid-container" id="grid-container">
                <div className="personal">
                    <div><h4>{values.firstName} {values.lastName}</h4></div>
                    <hr />
                    <div>
                        Anschrift:
                    </div>
                    <div>
                        Geboren:
                    </div>
                    <div>
                        Tel.:
                    </div>
                    <div>
                        Mobil:
                    </div>
                    <div>
                        Email:
                    </div>
                </div>
                <div className="personal-data">
                    <div><h4>Persönlich Daten</h4></div><hr />
                    <div>{values.street} {values.addressnumber}, {values.postcode} {values.city}</div>
                    <div>{Moment(values.birthday).format("DD.MM.YYYY")}</div>
                    <div>{values.phone}</div>
                    <div>{values.mobile}</div>
                    <div>{values.email}</div>
                </div>

                <div className="bw">
                    <div>
                        <h4>Beruflicher Werdegang</h4>
                        <hr />
                    </div>
                    <div className="bw1-f">
                        {Moment(values.backgroundDateFromOne).format("DD.MM.YYYY")}
                    </div>
                    <div className="bw1-t">
                        {Moment(values.backgroundDateToOne).format("DD.MM.YYYY")}
                    </div>
                    <div className="bw2-f">
                        {Moment(values.backgroundDateFromTwo).format("DD.MM.YYYY")}
                    </div>
                    <div className="bw2-t">
                        {Moment(values.backgroundDateToTwo).format("DD.MM.YYYY")}
                    </div>
                    <div className="bw3-f">
                        {Moment(values.backgroundDateFromThree).format("DD.MM.YYYY")}
                    </div>
                    <div className="bw3-t">
                        {Moment(values.backgroundDateToThree).format("DD.MM.YYYY")}
                    </div>
                </div>

                <div className="bw-data">
                    <div>
                        {values.backgroundFormOne}
                    </div>
                    <div>
                        {values.backgroundFormTwo}
                    </div>
                    <div>
                        {values.backgroundFormThree}
                    </div>
                </div>

                <div className="sh">
                    <div>
                        <h4>Schulbildung</h4>
                        <hr />
                    </div>
                    <div className="sh-f">
                        {Moment(values.educationDateFrom).format("DD.MM.YYYY")}
                    </div>
                    <div className="sh-t">
                        {Moment(values.educationDateTo).format("DD.MM.YYYY")}
                    </div>
                </div>
                <div className="sh-data">
                    <div className="sh-sn">
                        <div>
                            {values.shool}
                        </div>

                    </div>
                    <div className="sh-yn">
                        <div>
                            Mit Abschluss: {values.education}
                        </div>
                    </div>
                </div>

                <div className="bkq">
                    <div>
                        <div>
                            <h4>Besondere Kenntnisse und Qualifikationen</h4>
                            <hr />
                        </div>
                        {values.specialKnowledgeOne}
                    </div>
                    <div>
                        {values.specialKnowledgeTwo}
                    </div>
                    <div>
                        {values.specialKnowledgeThree}
                    </div>
                    <div>
                        {values.specialKnowledgeFour}
                    </div>
                    <div>
                        {values.specialKnowledgeFive}
                    </div>
                    <div>
                        <hr />
                        <h4>Sprachen</h4>
                        <hr />
                    </div>
                </div>
                <div className="lang">
                    <div>
                        Deutsch:
                    </div>
                    <div>
                        Englisch:
                    </div>
                </div>
                <div className="lang-data">
                    <div>
                        {setLanguage(values.languageGerman)}
                    </div>
                    <div>
                        {setLanguage(values.languageEnglish)}
                    </div>
                </div>
                <div className="btn-dg">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.handleClick}
                    >Dokument Speichern
                            </Button>
                </div>
                <div className="btn-back">
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
