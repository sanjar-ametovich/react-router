import {Link} from "react-router-dom";

const Links = () => {
    return (<div>
        <div>
            <div className="app">
                <div className="app-block">
                    <div className="app-btns">
                        <h2>The Simpsons</h2>
                    </div>
                    <div className={'simpson'}>
                        <Link className={'links'} to={'/characters'}>
                            <li>
                                Characters
                            </li>
                            >
                        </Link>
                        <Link className={'links'} to={'/episodes'}>
                            <li>
                                Episodes
                            </li>
                            >
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    </div>);
};

export default Links;