import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const UserInputStyled = styled.div`
    background-color:#dddddd;

    .container{
        display:flex;
        flex-direction: row;
    }

    .userNumber{
        max-width:100px;
        justify-content: center;
    }
`

function UserInput({ setUserNumbers }) {

    const [state, setState] = React.useState({
        number1: "",
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    function validateNumbers(){

        //Let work with an array
        const inputArray = [state.number1, state.number2, state.number3, state.number4, state.number5, state.number6];

        for(let i=0; i<inputArray.length; i++){
            var testValue = inputArray[i];
            if(testValue == ''){
                alert("Please enter 6 values")
                return false
            }if(isNaN(testValue)){
                alert("Please input numbers only")
                return false
            }if(testValue < 1 || testValue > 49){
                alert("Please enter a number between 1-49 inclusive")
                return false
            }else{
                //check for duplicate numbers
                let count = 0;
                for(let j=0; j<inputArray.length; j++){
                   if(testValue == inputArray[j]){
                    count++;
                   }
                }
                if(count!=1){
                    alert("Numbers must be unique")
                    return false;
                }
            }        
        }
        setUserNumbers(inputArray)
    }

    const handleSubmit = event => {
        event.preventDefault();
        validateNumbers();
        
    }

    return (
        <UserInputStyled>
            <div className="input_form">
                <Container>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <fieldset className='user_numbers_input' className='container'>
                                <Col>
                                    <input className='userNumber' name="number1" maxLength="2" onChange={handleChange} />
                                </Col>
                                <Col>
                                    <input className='userNumber' name="number2" maxLength="2" onChange={handleChange} />
                                </Col>
                                <Col>
                                    <input className='userNumber' name="number3" maxLength="2" onChange={handleChange} />
                                </Col>
                                <Col>
                                    <input className='userNumber' name="number4" maxLength="2" onChange={handleChange} />
                                </Col>
                                <Col>
                                    <input className='userNumber' name="number5" maxLength="2" onChange={handleChange} />
                                </Col>
                                <Col>
                                    <input className='userNumber' name="number6" maxLength="2" onChange={handleChange} />
                                </Col>
                            </fieldset>
                        </Row>
                        <Row>
                            <button className='submit' type="submit">Submit</button>
                        </Row>
                    </form>
                </Container>
            </div>

        </UserInputStyled>
    );
};

export default UserInput