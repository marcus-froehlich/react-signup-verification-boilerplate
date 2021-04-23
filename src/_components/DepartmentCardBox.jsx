import React from 'react';
import { departmentService, alertService } from "@/_services";

const handleSubmit = (event) => {
    const input = document.getElementsByClassName('departmentInput')[0].value;
    departmentService.create(input)
    .then(() => alertService.success('Standort erfolgreich gespeichert'))
    .then(() => location.reload());;
  }

function DepartmentCardBox() {
    return (
        <div className="cardBox">
            <div className="card">
                <div className="iconBox">
                <i className="fa fa-address-card-o" aria-hidden="true"></i>
                </div>
                <div>
                    <div className="header">Stellenausschreibung</div>
                    <div className="cardName">Geben Sie für ihre erste Stellenausschreibung ein Standort an!</div>
                    <div className="input"><input type="text" className="departmentInput"/></div>
                    <div className="btn-submit-department"><button className="btn-sub" onClick={handleSubmit}>Speichern</button></div>
                </div>
            </div>
            <div className="card">
                <div className="iconBox">
                <i className="fa fa-podcast" aria-hidden="true"></i>
                </div>
                <div>
                    <div className="header">DummyCard</div>
                    <div className="cardName">Beschreibung</div>                    
                </div>
            </div>
            <div className="card">
                <div className="iconBox">
                <i className="fa fa-bell" aria-hidden="true"></i>
                </div>
                <div>
                    <div className="header">DummyCard</div>
                    <div className="cardName">Beschreibung</div>                    
                </div>
            </div>
        </div>
        
    );
}

export { DepartmentCardBox };