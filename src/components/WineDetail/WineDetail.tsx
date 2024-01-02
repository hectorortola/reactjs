import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext/DarkModeContext';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setItemData } from '../../redux/slice';
import { RootState } from '../../redux/store';

type DetailProps = {
    id: string;
    wine: string;
    winery: string;
    location: string;
    image: string;
}

const Detail: React.FC = () => {
    const { id } = useParams<DetailProps>();
    const dispatch = useDispatch();
    const detail = useSelector((state: RootState) => state.app.itemData);
    const {darkMode} = useDarkMode();
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
    
    useEffect(() => {
        fetchData();
    }, [id]);


    const fetchData = async () => {
        const response = await fetch(`https://api.sampleapis.com/wines/reds/${id}`);
        const data = await response.json();
        dispatch(setItemData(data));
    };


    return (
        <div>
            { detail ? ( <div className="container mt-4 full-height">
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
        </div>) : (
            <div className='loader'>Loading...</div>
        )}
        </div>
       
    );

};

export default Detail;
