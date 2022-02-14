import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

//components
import ShowBigWinnings from './showbigwinnings';
import ShowTotalStats from './showtotalstats';

const ResultsDisplayStyled = styled.div`
    background-color:#dddddd;  
`

function ResultsDisplay({results, userNumbers, submitHappened}) {

    return (
        <ResultsDisplayStyled>
            <div>
                <ShowBigWinnings results={results} userNumbers={userNumbers}/>
                <hr></hr>
                <ShowTotalStats results={results} userNumbers={userNumbers} submitHappened={submitHappened}/>
            </div>
        </ResultsDisplayStyled>
    );
};

export default ResultsDisplay