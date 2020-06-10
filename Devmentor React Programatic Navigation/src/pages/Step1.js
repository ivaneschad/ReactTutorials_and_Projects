import React from "react";
import { withRouter } from "react-router-dom"

function Step1( {history} ){

    function goto(number){
        history.push(`/step${number}`);
    }

    return(
        <div>
            <h1>Step1</h1>
            <button onClick={() => goto(2)}>Step 2</button>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default withRouter(Step1);