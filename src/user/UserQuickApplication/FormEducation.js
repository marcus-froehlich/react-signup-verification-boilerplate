import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class FormEducation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const {
            values,
            handleChange,
            handleChangeDateEducationDateFrom,
            handleChangeDateEducationDateTo
        } = this.props;
        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <fieldset>
                        <legend>Schulbildung:</legend>
                        <h6>Ihr letzter schulischer Abschluss</h6>
                        <Grid container spacing={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="educationDateFrom"
                                        label="Von:"
                                        format="dd/MM/yyyy"
                                        value={values.educationDateFrom}
                                        onChange={handleChangeDateEducationDateFrom()}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="educationDateTo"
                                        label="Bis:"
                                        format="dd/MM/yyyy"
                                        value={values.educationDateTo}
                                        onChange={handleChangeDateEducationDateTo()}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                    <Grid item xs={6}>
                                        <InputLabel id="shool-select-label">Schulart</InputLabel>
                                        <Select
                                            labelId="shool-select-label"
                                            id="shool-select"
                                            value={values.shool}
                                            onChange={handleChange('shool')}
                                            autoWidth={true}
                                        >
                                            <MenuItem value="Hauptschule">Hauptschule</MenuItem>
                                            <MenuItem value="Realschule">Realschule</MenuItem>
                                            <MenuItem value="Gymnasium">Gymnasium</MenuItem>
                                            <MenuItem value="Fachgymnasium">Fachgymnasium</MenuItem>
                                            <MenuItem value="Fachoberschule">Fachoberschule</MenuItem>
                                            <MenuItem value="Berufsschule">Berufsschule</MenuItem>
                                            <MenuItem value="Studium">Studium</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Schulabschluss</FormLabel>
                                        <RadioGroup aria-label="schulabschluss" name="shool" value={values.education} onChange={handleChange('education')}>
                                            <FormControlLabel value="yes" control={<Radio />} label="Ja" />
                                            <FormControlLabel value="no" control={<Radio />} label="Nein" />
                                        </RadioGroup>
                                    </FormControl>
                                    </Grid>
                            </MuiPickersUtilsProvider>
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

export default FormEducation
