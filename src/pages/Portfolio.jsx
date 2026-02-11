import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPortfolioItems } from '../services/portfolioService';

function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await getPortfolioItems();
            setPortfolioItems(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <main className='container'>
            <h1 className='mt-3 mb-4'>My Portfolio</h1>

            {loading ? (
                <p>Loading portfolio items...</p>
            ) : (
                <div className="table-responsive mb-4">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Project Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Repository</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolioItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <a 
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {item.name}
                                        </a>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>
                                        {item.githubUrl && (
                                            <a 
                                                href={item.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                Link To Repository
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </main>
    );
}

export default Portfolio;