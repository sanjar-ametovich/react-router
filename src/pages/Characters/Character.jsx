import { Link, useMatch } from "react-router-dom";
import data from "./Data.jsx";
import '/src/css/App.scss'
const Character = () => {
    const match = useMatch('/characters/:id');
    const info = data.find((item) => item.id === match.params.id)
    console.log(match.params.id)
    return (
        <div className={'inner-actors'}>
            <Link to={'/characters'}>Back</Link>
            <h1>Characters</h1>
            <ul className={'inner-actors-block'}>
                <h3>{info.name}</h3>
                <p>{info.text}</p>
            </ul>
        </div>
    );
};

export default Character;
