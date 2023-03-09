import {useEffect, useState} from 'react';
import axios from 'axios';



const ShowOSInformation = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/os/')
            .then((response) => setData(response.data))
    }, [])

    return (
        <div>
            <h3>Os Information</h3>
            <table className="table table-striped" class="table table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(data).map((property) => (
                                <tr key={property}>
                                    <td>{property.toLocaleUpperCase()}</td>
                                    <td>{JSON.stringify(data[property])}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
        </div>
    )
}

export default ShowOSInformation;