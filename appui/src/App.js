import React from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { resultsDAO } from "./dao/resultsDao";

//components
import UserInput from "./components/userinput";
import ResultsDisplay from "./components/resultsdisplay";

const AppStyled = styled.div`
  background-color:#eeeeee;
  display:block;
`
function App() {
  //Get the data
  const [results, setResults] = useState([])
  const [userNumbers, setUserNumbers] = useState([])

  useEffect(() => {
    resultsDAO
      .getResultsDAO()
      .then(data => {
        if (data != undefined) {
          setResults(data);
        }
      })
      .catch((error) => {
        console.log("error in home index getting data: " + error);
      });
  }, []);

  let instructions=<p>Enter Six numbers (between 1 and 49) below and we will check them against every 6/49 draw since 1981, and calculate your net winnings (or losings).</p>;

  return (
    <AppStyled>
      <div>
        <h1>649 Historical Lookup Tool</h1>
        <div className="contentBody">
          {instructions}
          <UserInput setUserNumbers={setUserNumbers} />
          <ResultsDisplay results={results} userNumbers={userNumbers} />
        </div>
      </div>
    </AppStyled>
  )

}

export default App;