import { Container, Radio, TextField } from '@material-ui/core';
import React, { useState } from 'react';

// Define the properties that can be passed into the Control Group
type ControlGroupProps = {
    selectionCriteria: string,
    input1: string,
    input2: string
};

export const ControlGroup = ({ selectionCriteria, input1, input2 }: ControlGroupProps) => {
    // These will control the state of the radios and the input values
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValue, setInputValue] = useState({ input1, input2 });

    // Handle Radio Changes to make sure only a single radio can be selected
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    // Handle Input Changes to make sure the inputs can be retyped
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        (event.target.id === `${input1}_1`) ? setInputValue({ input1: event.target.value, input2: inputValue.input2 }) : setInputValue({ input1: inputValue.input1, input2: event.target.value });
    };

    // If we have empty inputs, do not execute the component and instead return an error message
    if ((input1 === '' || input2 === '') || !input1 || !input2) return console.error('Please make sure that all properties are filled in order to use the ControlGroup component.');

    return (
        <Container className='control_group--container'>
            <label title={selectionCriteria}>{selectionCriteria}:</label>
        
            <Radio
                checked={selectedValue === input1 }
                onChange={handleRadioChange}
                value={inputValue.input1}
                title={`Select ${inputValue.input1}`}
            />
            <TextField id={`${input1}_1`} label='Option 1' variant='outlined' value={inputValue.input1} onChange={handleInputChange} title={inputValue.input1} />

            <Radio
                checked={selectedValue === input2 }
                onChange={handleRadioChange}
                value={inputValue.input2}
                title={`Select ${inputValue.input2}`}
            />
            <TextField id={`${input2}_1`} label='Option 2' variant='outlined' value={inputValue.input2} onChange={handleInputChange} title={inputValue.input2} />
        </Container>
    );
};