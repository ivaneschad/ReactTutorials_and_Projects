import React, { Children } from "react";
import { BrowserRouter as Router, Link, Switch, Route, useParams } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/launch"> Launch</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/launch" component={Launch}>
                    <Route exact path="/launch" component={LaunchIndex} />
                    <Route path="/launch/:id" component={LaunchCar} />
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

function NotFound() {
    return (
        <div>
            <h2>Error 404!</h2>
            <p>We couldn't find your car</p>
        </div>
    )
}

function Home() {
    return <div> <h1>Welcome Home!</h1> </div>
}

function Launch() {
    return (<div>
        <h1>Launch</h1>
        {this.props.children}
    </div>)
}

function LaunchIndex() {
    return (<div>
        <ul>
            {Object.entries(cars).map(([id, { name, img }]) => <li key={id}>
                <Link to={`/launch/${id}`}>
                    <h2>{name}</h2>
                    <img src={img} alt={name} />
                </Link>
            </li>)}
        </ul>
    </div>)
}

function LaunchCar() {
    const { id } = useParams();
    const car = cars[id];
    const { name, img } = car;

    if (!car) {
        return <h2>Car not found</h2>
    }

    return (
        <div>
            <h2>Detailed Page of the    </h2>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}


const cars = {
    "mitsubishi-lancer-2015": {
        name: "MITSUBISHI LANCER",
        img: "https://cdn.jdpower.com/Models/640x480/2015-Mitsubishi-Lancer-ES.jpg"
    },
    "ford-mustang-shelby-2020": {
        name: "MUSTANG SHELBY GT500",
        img: "https://www.kinselford.com/inventoryphotos/5121/1fa6p8sj3l5500709/ip/4.jpg?height=400"
    },
    "mercedez-benz-cla-2017": {
        name: "MERCEDEZ-BENZ CLA",
        img: "https://images.carandbike.com/car-images/large/mercedes-benz/cla-class/mercedes-benz-cla-class.jpg?v=6"
    }
};