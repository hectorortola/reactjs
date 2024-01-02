import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';

import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../redux/slice';
import { RootState } from '../../redux/store';


const List: React.FC = () => {
    const dispatch = useDispatch();
    const myData = useSelector((state: RootState) => state.app.myData);
    const { darkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.sampleapis.com/wines/reds');
            const data = await response.json();
            dispatch(setData(data));
        };

        if (!myData) {
            fetchData();
        }

    }, [dispatch, myData]);

    return (
        <div>
            {myData ? (
                <div className={`container mt-4 ${darkMode ? 'table-dark' : ''}`}>
                    <h2 className='mb-4'>List</h2>
                    <table className={`table ${darkMode ? 'table-dark' : ''}`}>
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
                            {myData.map(item => (
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
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default List;
