import {useEffect, useState} from 'react';
import axios from 'axios';
import Casesdata from './CaseData'

const Search1 = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);
    const [filters, setFilters] = useState({
        county: '',
        state: ''
    })

    const onChange = (e) => {
        const {value, name} = e.target;

        setFilters({
            ...filters,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.get('http://localhost:5000/statistics', {
            params: filters
        }).then((response) => setData(response.data))

        axios.get('http://localhost:5000/search', {
            params: filters
        }).then((response) => setRecords(response.data))
    }

    return (
        <div>
            <h3>Statistics by state and county</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <lable className="label">
                        <span>County</span>
                        <input className="form-control" onChange={onChange} type="text" name="county" placeholder="County"/>
                    </lable>
                </div>

                <div>
                    <lable className="label">
                        <span>State</span>
                        <input className="form-control"  onChange={onChange} type="text" name="state" placeholder="State"/>
                    </lable>
                </div>
                <div>
                    <label>
                        <button className="btn btn-primary" >Search</button>
                    </label>
                </div>
            </form>

            {!!data[0] && (
                <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
                <tbody>
                    <tr>
                        <td>Cases: </td>
                        <td>{data[0].total}</td>
                    </tr>
                    <tr>
                        <td>Deaths: </td>
                        <td>{data[0].deaths}</td>
                    </tr>
                </tbody>
    
            </table>
            )}

            
            <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>COUNTY</th>
                            <th>STATE</th>
                            <th>CASES</th>
                            <th>DEATHS</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((item) => <Casesdata key={item._id} case={item}/>)
                        }
                    </tbody>
                </table>
            
        </div>
    )
}

export default Search1;