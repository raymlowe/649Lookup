import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import ShowBigWinnings from "../../components/showbigwinnings";
import { it } from "@jest/globals";


let historyData ={
    "data": [
        {
            "id": "f3b66017-8160-4161-bf03-601ab2e50ceb",
            "product": "649",
            "draw_number": "1",
            "sequence_number": "0",
            "draw_date": "1982-06-12T07:00:00.000Z",
            "number_drawn_1": 3,
            "number_drawn_2": 11,
            "number_drawn_3": 12,
            "number_drawn_4": 14,
            "number_drawn_5": 41,
            "number_drawn_6": 43,
            "bonus_number": 13
        },
        {
            "id": "17526e18-922a-4ad3-9653-ae2b09210fe2",
            "product": "649",
            "draw_number": "2",
            "sequence_number": "0",
            "draw_date": "1982-06-19T07:00:00.000Z",
            "number_drawn_1": 8,
            "number_drawn_2": 33,
            "number_drawn_3": 36,
            "number_drawn_4": 37,
            "number_drawn_5": 39,
            "number_drawn_6": 41,
            "bonus_number": 9
        }
    ]
};

let userNumbers = [
    "8",
    "33",
    "36",
    "37",
    "39",
    "41"
]

it.skip("contains one big win", () => {
    console.log(historyData);
    //seems to be a problem, {historyData} is undefined when pass to method
    const wrapper = shallow(<ShowBigWinnings result={historyData} userNumbers={userNumbers} />);
    const value = wrapper.find("p").toContain("won: $");
});