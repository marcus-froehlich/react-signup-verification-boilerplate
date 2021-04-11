import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class FormContact extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <fieldset>
                        <legend>Ihre Kontakt Daten:</legend>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    placeholder="Ihre Festnetz Telefonnummer"
                                    label="Festnetz"
                                    onChange={handleChange('phone')}
                                    defaultValue={values.phone}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                                <TextField
                                    placeholder="Ihre Handynummer"
                                    label="Handynummer"
                                    onChange={handleChange('mobile')}
                                    defaultValue={values.mobile}
                                    margin="normal"
                                    fullWidth
                                /></Grid>
                            <br />
                            <Grid item xs={6}>
                                <TextField
                                    placeholder="Ihre Anschrift"
                                    label="Straße"
                                    onChange={handleChange('street')}
                                    defaultValue={values.street}

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    placeholder="Hausnummer"
                                    label="Hausnummer"
                                    onChange={handleChange('addressnumber')}
                                    defaultValue={values.addressnumber}
                                />
                            </Grid>
                            <br />
                            <Grid item xs={6}>
                                <TextField
                                    placeholder="PLZ"
                                    label="Postleitzahl"
                                    onChange={handleChange('postcode')}
                                    defaultValue={values.postcode}
                                    margin="normal"

                                /></Grid>
                            <Grid item xs={6}>
                                <TextField
                                    placeholder="Ihr Wohnort"
                                    label="Wohnort"
                                    onChange={handleChange('city')}
                                    defaultValue={values.city}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
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
                        onClick={this.back}
                    >Zurück
                            </Button>
                </Dialog>
            </>
        )
    }
}

export default FormContact
