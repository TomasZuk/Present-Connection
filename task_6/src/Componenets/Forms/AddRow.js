import React, {Component} from  'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


class AddRow extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="addNewRow">
                    <TextField
                        floatingLabelText="id"
                        type="number"
                        min="1"
                    />
                    <TextField
                        floatingLabelText="first_name"
                        type="text"
                    />
                    <TextField
                        floatingLabelText="last_name"
                        type="text"
                    />
                    <TextField
                        floatingLabelText="email"
                        type="text"
                    />
                    <TextField
                        floatingLabelText="ip"
                        type="text"
                    />
                    <RadioButtonGroup name="gender" defaultSelected="non_binary">
                        <RadioButton
                            value="light"
                            label="Male"
                        />
                        <RadioButton
                            value="not_light"
                            label="Female"
                        />
                        <RadioButton
                            value="non_binary"
                            label="Non Binary"
                        />
                    </RadioButtonGroup>
                    <RaisedButton className="addNewRow" label="Add Row"/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AddRow;