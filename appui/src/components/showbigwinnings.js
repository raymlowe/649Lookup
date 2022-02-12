import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { utils } from '../utils';

const BigWinningsStyled = styled.div`
    background-color:#dddddd;  
`

function ShowBigWinnings({ results, userNumbers }) {

    let bigWinningsArray = [];
    let bigWinningsRenderArray = [];

    if (results.data) {
        //Push big wins into an array
        for (var i = 0; i < results.data.length; i++) {
            let result = results.data[i]
            //we assume that draw 3620 is the last draw
            if (result.draw_number <= 3620) {
                let score = utils.numberMatcher(result, userNumbers)
                if (
                    score === 4 ||
                    score === 5 ||
                    score === 6 ||
                    score === 9
                ) {
                    bigWinningsArray.push([{score},result])
                }
            }
        }
        //Parse big wins array and append output to output array
        for(var j=0; j<bigWinningsArray.length; j++){
            const thisRecord=bigWinningsArray[j];
            const drawDate=thisRecord[1].draw_date.substring(0, 10);
            const amount=utils.getAmountByScore(thisRecord[0].score);
            bigWinningsRenderArray.push(<p key={j}>{drawDate} won: ${amount}</p>);
        }
    }

    return (
        <BigWinningsStyled>
            <div>
                {bigWinningsRenderArray}
            </div>
        </BigWinningsStyled>
    );
};

export default ShowBigWinnings