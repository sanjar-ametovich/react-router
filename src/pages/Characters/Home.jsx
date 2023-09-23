import React from 'react';
import { Link } from 'react-router-dom';
import data from './Data.jsx';

const Home = () => {
    return (
        <div className={'actors'}>
            <div className={'back'}>
                <Link to={'/'}>Back</Link>
            </div>
            <div className={'actors-block'}>
                <h1>Characters</h1>
                <div className={'actors-block-item'}>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link to={`/characters/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
