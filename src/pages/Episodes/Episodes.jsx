import {Link} from 'react-router-dom';
import data from '../Characters/Data.jsx';

const Episodes = () => {
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
                            <a>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Episodes;
