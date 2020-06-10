import React from "react";
import { withRouter } from "react-router-dom"

function Step2( {history} ){

    function goto(number){
        history.push(`/step${number}`);
    }

    return(
        <div>
            <h1>Step2</h1>
            <button onClick={() => goto(1)}>Step 1</button>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default withRouter(Step2);