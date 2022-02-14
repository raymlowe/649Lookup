import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { utils } from '../utils';

const ShowTotalStatsStyled = styled.div`
    background-color:#dddddd;  
`

function ShowTotalStats({ results, userNumbers, submitHappened }) {

    //Compute Total Winnings / Spendings
    let winnings = 0;
    let spendings = 0;
    let nettings = 0;
    if (results.data) {
        //Look at each historical result and compute winnings
        for (var i = 0; i < results.data.length; i++) {
            let result = results.data[i]
            //Match our defined set of results (only to result 3620)
            //we only want to check against sequenceNumber='0'
            if (result.draw_number <= 3620 && result.sequence_number == '0') {
                //calculate our winnings
                let score = utils.numberMatcher(result, userNumbers)
                const amount = utils.getAmountByScore(score)
                winnings += amount;

                //Compute Total Spent
                //We assume that the user did not miss a draw
                //AND has only purchased one draw
                if (result.draw_number >= 1 && result.draw_number <= 2124) {
                    spendings = spendings + 1;
                } else if (result.draw_number >= 2125 && result.draw_number <= 2989) {
                    spendings = spendings + 2;
                } else if (result.draw_number >= 2990 && result.draw_number <= 3620) {
                    spendings = spendings + 3;
                }
            }
        }
        //net win/loss
        nettings = winnings - spendings;
    }

    return (
        <ShowTotalStatsStyled>
            <div>
                <p>Total won: ${winnings}</p>
                <p>Total Spent: ${submitHappened ? spendings : 0}</p>
                <p>Total won/loss: ${submitHappened ? nettings : 0}</p>
            </div>
        </ShowTotalStatsStyled>
    );
};

export default ShowTotalStats