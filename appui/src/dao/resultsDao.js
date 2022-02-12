//Data aaccess object to perform GET operation to middleware to retrieve data

async function getResultsDAO(){
    let resultsData;
    const options = {
        method: 'GET'
    };
    try{
        const results = await fetch("/expressindex", options);
        resultsData = await results.json();
        return resultsData;
    }catch (error) {
        console.log("Error in resultsDAO getResultsDAO(): "+ error);
        throw error;
    }
}

export const resultsDAO = {
    getResultsDAO
};