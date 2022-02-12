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

/*we are going to score the results according to the following score sheet:
        2/6  --> 2 two out of six numbers
        3/6  --> 3 three out of the six numbers
        4/6  --> 4 four of the six numbers
        5/6  --> 5 five out of the six numbers
        6/6  --> 6 six out of six numbers

        2/6+ --> 8 two out of six numbers plus bonus
        5/6+ --> 9 five out of the six numbers plus bonus
    */

function ShowBigWinnings({ results, userNumbers }) {

    let bigWinningsArray = [];
    let bigWinningsRenderArray = [];

    if (results.data) {
        console.log(results.data)
        //Push big wins into an array
        for (var i = 0; i < results.data.length; i++) {
            let result = results.data[i]
            //we assume that draw 3620 is the last draw
            if (result.draw_number >= 3620) {
                let score = utils.numberMatcher(result, userNumbers)
                console.log(score)
                if (
                    score === 4 ||
                    score === 5 ||
                    score === 6 ||
                    score === 9
                ) {
                    bigWinningsArray.push(result)
                }
            }
        }
        //Parse big wins array and append output to output array
        for(var j=0; j<bigWinningsArray.length; j++){
            console.log("HELLO WORLD")
            console.log(bigWinningsArray[j])
            const drawDate = bigWinningsArray[j].draw_date.substring(0, 10);
            console.log(drawDate)
        }
    }



    //https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react
    //   let bigWinnings = results.data.map((result) => {
    //     //we assume that draw 3620 is the last draw
    //     if (result.draw_number >= 3620) {
    //         let score = utils.numberMatcher(result, userNumbers)
    //         console.log(score)
    //         if (
    //             score === 4 ||
    //             score === 5 ||
    //             score === 6 ||
    //             score === 9
    //         ){
    //             //bigWinningsArray.push(result)
    //         }
    //     }

    // console.log(bigWinningsArray);

    //     for(let i=0; i<bigWinningsArray.length; i++){
    //         console.log(bigWinningsArray);
    //         return(
    //             <p>results</p>
    //         )
    //     }

    //  })

    return (
        <BigWinningsStyled>
            <div>
                sometjing here
            </div>
        </BigWinningsStyled>
    );
};

export default ShowBigWinnings