import React from 'react';

export const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;
   
    return (
        <>
            <div className='img_wrapper'>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planets" />
            </div>
            <div className='random_planet_detailes_wrapper'>
                <h4>{name}</h4>
                <ul className='planets_detailes'>
                    <li key={id} className='planets_detailes_item'>
                        <span>Rotation period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li key={id} className='planets_detailes_item'>
                        <span>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li key={id} className='planets_detailes_item'>
                        <span>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
