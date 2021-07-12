import React from 'react';
import './HeroContainer.css';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';

export const HeroContainer = () => {
    return (
        <div className='hero_container'>
            <RandomPlanet />
        </div>
    )
}
