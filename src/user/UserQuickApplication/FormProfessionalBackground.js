import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

export class FormProfessionalBackground extends Component {

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
            handleChangeDateBackgroundDateFromOne,
            handleChangeDatebackgroundDateToOne,
            handleChangeDateBackgroundDateFromTwo,
            handleChangeDatebackgroundDateToTwo,
            handleChangeDateBackgroundDateFromThree,
            handleChangeDatebackgroundDateToThree
        } = this.props;
        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <div className="container-modal">
                        <fieldset>
                            <legend>Beruflicher Werdegang:</legend>
                            <Grid container spacing={3}>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateFromOne"
                                            label="Von:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateFromOne}
                                            onChange={handleChangeDateBackgroundDateFromOne()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateToOne"
                                            label="Bis:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateToOne}
                                            onChange={handleChangeDatebackgroundDateToOne()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>

                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="Arbeitgeber"
                                        label="Angestellt bei:"
                                        onChange={handleChange('backgroundFormOne')}
                                        defaultValue={values.backgroundFormOne}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateFromTwo"
                                            label="Von:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateFromTwo}
                                            onChange={handleChangeDateBackgroundDateFromTwo()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateToTwo"
                                            label="Bis:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateToTwo}
                                            onChange={handleChangeDatebackgroundDateToTwo()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>

                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="Arbeitgeber"
                                        label="Angestellt bei:"
                                        onChange={handleChange('backgroundFormTwo')}
                                        defaultValue={values.backgroundFormTwo}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateFromThree"
                                            label="Von:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateFromThree}
                                            onChange={handleChangeDateBackgroundDateFromThree()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="backgroundDateToThree"
                                            label="Bis:"
                                            format="dd/MM/yyyy"
                                            value={values.backgroundDateToThree}
                                            onChange={handleChangeDatebackgroundDateToThree()}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>

                                <Grid item xs={12}>
                                    <TextField
                                        placeholder="Arbeitgeber"
                                        label="Angestellt bei:"
                                        onChange={handleChange('backgroundFormThree')}
                                        defaultValue={values.backgroundFormThree}
                                        margin="normal"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <br />
                        </fieldset>
                        <div className="flexbox-modal">
                            <Button
                                variant="contained"
                                onClick={this.back}
                            >Zurück
                    </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.continue}
                            >Weiter
                    </Button>
                        </div>
                    </div>
                </Dialog>
            </>
        )
    }
}

export default FormProfessionalBackground
