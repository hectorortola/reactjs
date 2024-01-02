import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import { useNavigate  } from 'react-router-dom';


type DetailProps = {
    id: string;
    wine: string;
    winery: string;
    location: string;
    image: string;
}


const Detail: React.FC = () => {
    const { id } = useParams<DetailProps>();
    const [detail, setDetail] = useState<DetailProps | null>(null);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
    
    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = () => {
        axios.get<DetailProps>(`https://api.sampleapis.com/wines/reds/${id}`)
            .then(response => setDetail(response.data))
            .catch(error => console.error('Error fetching detail data:', error));
    };

    if (!detail) {
        return <div>Loading...</div>;
    }


    return (
        <div className="container mt-4 full-height">
            <h2 className="mb-4">Wine Detail</h2>
            <button className='mb-4 rounded' onClick={goBack}>
                ⬅ Back
            </button>
            <table className={`table ${darkMode ? 'table-dark' : ''}`}>
                <tbody>
                    <tr>
                        <th>ID:</th>
                        <td>{detail.id}</td>
                    </tr>
                    <tr>
                        <th>Wine:</th>
                        <td>{detail.wine}</td>
                    </tr>
                    <tr>
                        <th>Winery:</th>
                        <td>{detail.winery}</td>
                    </tr>
                    <tr>
                        <th>Image:</th>
                        <td>
                            <img src={detail.image} alt={detail.wine} className="img-fluid" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

export default Detail;
