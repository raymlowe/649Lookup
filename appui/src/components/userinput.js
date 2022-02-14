import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const UserInputStyled = styled.div`
.inputContainer{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.inputBox{
    flex-shrink: 3;
    padding:3px;
}

.userNumber{
    max-width:75px;
    padding: 5px;
    text-align:center;
}

.submitButton{
    padding: 5px;
}

`
/*
This is the form to handle user inputs.
We want to take in the numbers that the user have inputted
and verify that they are valid
*/
function UserInput({ setUserNumbers, setSubmitHappened}) {

    //Hook for user values
    const [state, setState] = React.useState({
        number1: "",
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
    })

    //on input, update hook
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    //Validate user input against business logic
    function validateNumbers() {
        //Let work with an array
        const inputArray = [state.number1, state.number2, state.number3, state.number4, state.number5, state.number6];

        for (let i = 0; i < inputArray.length; i++) {
            var testValue = inputArray[i];
            if (testValue == '') {
                alert("Please enter 6 values")
                return false
            } if (isNaN(testValue)) {
                alert("Please input numbers only")
                return false
            } if (testValue < 1 || testValue > 49) {
                alert("Please enter a number between 1-49 inclusive")
                return false
            } else {
                //check for duplicate numbers
                let count = 0;
                for (let j = 0; j < inputArray.length; j++) {
                    if (testValue == inputArray[j]) {
                        count++;
                    }
                }
                if (count != 1) {
                    alert("Numbers must be unique")
                    return false;
                }
            }
        }
        //Set use inpug event
        setSubmitHappened(true)
        //If Valid, update userNumbers Hook
        setUserNumbers(inputArray)
    }

    //Handle Submit on form submission
    const handleSubmit = event => {
        event.preventDefault();
        console.log("YOUR NUMBERS: ")
        console.log(state.number1);
        console.log(state.number2);
        console.log(state.number3);
        console.log(state.number4);
        console.log(state.number5);
        console.log(state.number6);
        validateNumbers();
    }

    return (
        <UserInputStyled>
            <div className="input_form">

                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number1" maxLength="2" onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number2" maxLength="2" onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number3" maxLength="2" onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number4" maxLength="2" onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number5" maxLength="2" onChange={handleChange} />
                        </div>
                        <div className="inputBox">
                            <input type="number" className='userNumber' name="number6" maxLength="2" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="submitButton">
                        <button className='submit' type="submit">Submit</button>
                    </div>
                </form>

            </div>

        </UserInputStyled>
    );
};

export default UserInput