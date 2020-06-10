import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts"
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./navbar";

export default function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/aboutUs" component={AboutUs} />
                <Route path="/posts/:id" component={Posts} />
                <Route path="/step1" component={Step1} />
                <Route path="/step2" component={Step2} />
                <Route path="/404" component={PageNotFound} />
            </Switch>
        </Router>
    )
}