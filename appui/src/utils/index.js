/*
The number matcher will provide a score value correesponding to the number of matches.
The score value is a numerical representation of matching state. See table below for
matching states:

        2/6  --> 2 two out of six numbers
        3/6  --> 3 three out of the six numbers
        4/6  --> 4 four of the six numbers
        5/6  --> 5 five out of the six numbers
        6/6  --> 6 six out of six numbers

        2/6+ --> 8 two out of six numbers plus bonus
        5/6+ --> 9 five out of the six numbers plus bonus
*/
function numberMatcher(result, userNumbers) {
    var score = 0;
    //We will compare the user numbers to the result numbers
    for (let i = 0; i < userNumbers.length; i++) {
        if (
            userNumbers[i] == result.number_drawn_1 ||
            userNumbers[i] == result.number_drawn_2 ||
            userNumbers[i] == result.number_drawn_3 ||
            userNumbers[i] == result.number_drawn_4 ||
            userNumbers[i] == result.number_drawn_5 ||
            userNumbers[i] == result.number_drawn_6
        ) {
            score++;
        }
    }

    //if we have two numbers, check the bonus number
    if (score == 2) {
        for (let i = 0; i < userNumbers.length; i++) {
            if (
                userNumbers[i] == result.bonus_number
            ) {
                score = 8;
            }
        }
    }

    //if we have five numbers, check the bonus number
    if (score == 5) {
        for (let i = 0; i < userNumbers.length; i++) {
            if (
                userNumbers[i] == result.bonus_number
            ) {
                score = 8;
            }
        }
    }

    //Zero the score if only one number matched
    if (score == 1) {
        score = 0;
    }
    return score;
}



/*
Given a score value, we want to return the prize amount
Prize amount by score table:
    2   (2/6) = $3
    3   (3/6) = $10
    4   (4/6) = $85
    5   (5/6) = $3000
    6   (6/6) = $5,000,000
    8   (2/6+)= $5
    9   (5/6+)= $250,000
*/
function getAmountByScore(score) {
    if (score == 2) {
        return 3;
    } else if (score == 3) {
        return 10;
    } else if (score == 4) {
        return 85;
    } else if (score == 5) {
        return 3000;
    } else if (score == 6) {
        return 5000000;
    } else if (score == 8) {
        return 5;
    } else if (score == 9) {
        return 250000
    } else {
        return 0;
    }
}

export const utils = {
    numberMatcher,
    getAmountByScore
};