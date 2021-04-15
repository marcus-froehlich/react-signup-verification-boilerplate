import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

export class FormSpecialKnowledgeAndQualifications extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {

        function valuetext(value) {
            return `${value}`;
        }

        function valueLabelFormat(value) {
            return marks.findIndex((mark) => mark.value === value) + 1;
        }

        const marks = [
            {
                value: 10,
                label: 'Grundkenntnisse',
            },
            {
                value: 35,
                label: 'Gut',
            },
            {
                value: 65,
                label: 'Fließend',
            },
            {
                value: 90,
                label: 'Muttersprache',
            },
        ];

        const { values, handleChange, handleChangeSliderEnglish, handleChangeSliderGerman } = this.props;

        return (
            <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <div className="container-modal">
                        <fieldset>
                            <legend>Besondere Kenntnisse und Qualifikationen:</legend>
                            <h6><strong>Hier können Sie ihre Besonderen Kenntnisse eintragen</strong></h6>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange('specialKnowledgeOne')}
                                    defaultValue={values.specialKnowledgeOne}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange('specialKnowledgeTwo')}
                                    defaultValue={values.specialKnowledgeTwo}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange('specialKnowledgeThree')}
                                    defaultValue={values.specialKnowledgeThree}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange('specialKnowledgeFour')}
                                    defaultValue={values.specialKnowledgeFour}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange('specialKnowledgeFive')}
                                    defaultValue={values.specialKnowledgeFive}
                                    margin="normal"
                                    fullWidth
                                />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <h6><strong>Deutsch</strong></h6>
                                <Slider
                                    key={`slider-${values.languageEnglish}`}
                                    defaultValue={values.languageEnglish}
                                    valueLabelFormat={valueLabelFormat}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-restrict"
                                    step={null}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    onChange={handleChangeSliderEnglish('languageEnglish')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <h6><strong>Englisch</strong></h6>
                                <Slider
                                    key={`slider-${values.languageGerman}`}
                                    defaultValue={values.languageGerman}
                                    valueLabelFormat={valueLabelFormat}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-restrict"
                                    step={null}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    onChange={handleChangeSliderGerman('languageGerman')}
                                />
                            </Grid>
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

export default FormSpecialKnowledgeAndQualifications
