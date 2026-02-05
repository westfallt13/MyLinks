import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <main className='container'>
            <h1 className='mt-3'>My Portfolio</h1>

            <ul className="list-group mb-4">

                <li className="list-group-item mb-1 rounded">
                    <a href="https://forgeonapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Forgeon Game Planner
                    </a>
                </li>

                <li className="list-group-item mb-1 rounded">
                    <a href="https://multiaccountexpensetracker.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Multi Account Budget Tracker
                    </a>
                </li>

                <li className="list-group-item mb-1 rounded">
                    <a href="https://pokemonapidemoapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Pokemon API Demo App
                    </a>
                </li>

                <li className="list-group-item mb-1 rounded">
                    <a href="https://latlonweather1.netlify.app/" target="_blank" rel="noopener noreferrer">
                        Simple Latitude/Longitude Temperature Checker
                    </a>
                </li>

            </ul>

            <Link to="/" className="btn btn-secondary">
                ← Back to Links
            </Link>
        </main>
    );
}

export default Portfolio;