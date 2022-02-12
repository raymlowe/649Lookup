function numberMatcher(result, userNumbers) {
    /*we are going to score the results according to the following score sheet:
        2/6  --> 2 two out of six numbers
        3/6  --> 3 three out of the six numbers
        4/6  --> 4 four of the six numbers
        5/6  --> 5 five out of the six numbers
        6/6  --> 6 six out of six numbers

        2/6+ --> 8 two out of six numbers plus bonus
        5/6+ --> 9 five out of the six numbers plus bonus
    */

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
    if(score ==1){
        score = 0;
    }
    return score;
}

export const utils = {
    numberMatcher
};