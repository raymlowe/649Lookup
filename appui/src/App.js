import React from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { resultsDAO } from "./dao/resultsDao";

//components
import UserInput from "./components/userinput";
import ResultsDisplay from "./components/resultsdisplay";

const AppStyled = styled.div`
  background-color:#eeeeee;
`
function App(){
//Get the data
const[results, setResults] = useState([])
const[userNumbers, setUserNumbers] = useState([])

useEffect(() => {
  resultsDAO
    .getResultsDAO()
    .then(data => {
      if (data != undefined) {
        setResults(data);
      }
    })
    .catch((error) => {
      console.log("error in home index getting data: "+error);
    });
}, []);

return(
  <AppStyled>
    <div>
      <h1>Lotto Draw</h1>
      <UserInput setUserNumbers={setUserNumbers}/>
      <ResultsDisplay results={results} userNumbers={userNumbers}/>
    </div>
  </AppStyled>
)  

}

export default App;