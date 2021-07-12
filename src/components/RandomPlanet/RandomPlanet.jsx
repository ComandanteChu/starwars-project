import React, { Component } from 'react';
import swapiService from '../../services';
import { Spinner } from '../Spinner/Spinner';
import { PlanetView } from './PlanetView';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

import './RandomPlanet.css';
import SwapiService from '../../services';

export class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 3000)  
    }

    

    onPlanetLoaded = (planet) => {
        this.setState(
            {
                planet,
                loading: false,
                error: false
            }
        )
    }
    onError(err) {
        this.setState({
            error: true, 
            loading:false
        })
    }
    updatePlanet = (planet) => {
        const id = Math.floor(Math.random() * 20) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;
       

        const errComponent = error ? <ErrorComponent /> : null
        return (
            <div className='random_planet' >
                {loading ? <Spinner /> : <PlanetView planet={planet} />}
                {errComponent}
            </div >


        )
    }

}
