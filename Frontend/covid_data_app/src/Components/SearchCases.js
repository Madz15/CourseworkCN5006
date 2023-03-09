import {useEffect, useState} from 'react';
import axios from 'axios';
import Casesdata from './CaseData';

const SearchCases = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        date: '',
        number: 0,
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

        axios.get('http://localhost:5000/search', {
            params: filters
        })
            .then((response) => setData(response.data))
    }

    return (
        <div>
            <h3>Search cases</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <lable className="label">
                        <span>Date</span>
                        <input className="form-control" onChange={onChange} type="text" name="date" placeholder="Date"/>
                    </lable>
                </div>

                <div>
                    <lable className="label">
                        <span>Number of cases</span>
                        <input className="form-control" onChange={onChange} type="number" name="number" placeholder="Number of cases"/>
                    </lable>
                </div>

                <div>
                    <lable className="label">
                        <span>State</span>
                        <input className="form-control" onChange={onChange} type="text" name="state" placeholder="State"/>
                    </lable>
                </div>
                <div>
                    <label>
                        <button className="btn btn-primary" >Search</button>
                    </label>
                </div>
            </form>
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
                            data.map((item) => <Casesdata key={item._id} case={item}/>)
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default SearchCases;