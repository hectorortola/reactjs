import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

interface WineItem {
    id: number;
    wine: string;
    winery: string;
    location: string;
    image: string;
    rating: {
        average: string;
        reviews: string;
    };
}

const List: React.FC = () => {
    const [data, setData] = useState<WineItem[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get<WineItem[]>('https://api.sampleapis.com/wines/reds')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <div className="container mt-4">
                <h2>List</h2>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Wine</th>
                            <th>Winery</th>
                            <th>Location</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <div
                                        className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                                        style={{ width: '50px', height: '50px' }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.wine}
                                            className="w-100 h-auto"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/detail/${item.id}`}>{item.wine}</Link>
                                </td>
                                <td>{item.winery}</td>
                                <td>{item.location}</td>
                                <td>{item.rating.average}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
