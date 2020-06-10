import React from "react";
import { withRouter , Redirect } from "react-router-dom";

function Posts({ match: { params: { id } } }) {

    const goodId = parseInt(id);

    if(goodId != 0 && !goodId){
        return <Redirect to={{pathname: "/404"}} />;
    }

    return (
        <div>
            <h1>Number of your Post: {goodId}</h1>
        </div>
    )
};

export default withRouter(Posts);