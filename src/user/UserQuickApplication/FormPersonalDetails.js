import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange, handleChangeDateBirthday } = this.props;
        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <fieldset>
                        <legend>Ihre Persönlichen Daten:</legend>
                        <TextField
                            placeholder="Ihr Vorname"
                            label="Vorname"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Ihr Nachname"
                            label="Nachname"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Ihre Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                        />
                        <br /><br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Ihr Geburtsdatum"
                                format="dd/MM/yyyy"
                                value={values.birthday}
                                onChange={handleChangeDateBirthday()}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </fieldset>
                    <br />

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >Weiter
                    </Button>
                    <br />
                    <Button
                        variant="contained"                        
                        href="."
                    >Abbrechen
                    </Button>
                </Dialog>
            </>

        )
    }
}

export default FormPersonalDetails
