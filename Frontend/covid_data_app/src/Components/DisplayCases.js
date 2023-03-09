import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Casesdata = props => (
    <tr>
        <td>{props.case.Date}</td>
        <td>{props.case.County}</td>
        <td>{props.case.State}</td>
        <td>{props.case.Cases}</td>
        <td>{props.case.Deaths}</td>
        <td>
            <Link to={"/edit/"+props.case._id}><img src="https://www.pinclipart.com/picdir/big/164-1646319_ewsully-com-img-activities-icons-edit-icon-png.png" alt="Edit Case" className="icon"></img></Link>
        </td>
        <td>
            <Link to={"/delete/"+props.case._id}><img src="https://icons.iconarchive.com/icons/icojam/blue-bits/256/symbol-delete-icon.png" alt="Delete Case" className="icon"></img></Link>
        </td>
    </tr>
)


export default class ShowCasesList extends Component {

    constructor(props) {
        super(props);
        this.state = {cases: []}; 
        
        
    }    componentDidMount() {
        axios.get('http://localhost:5000/allcases/')
        
            .then(response => {
                console.log("response.data",response.data)
                this.setState({ cases: response.data });  
                console.log("Received data",this.state.todos)
            })
            .catch(function (error){
                console.log(error);
            })
            
    }

    Show_Cases() {
        return this.state.cases.map(function(currentcase, i){
            console.log("currentodo object-->"+currentcase +"  i is "+i)
            return <Casesdata case={currentcase} key={i} />;
            
        })
    }

    render() {
        return (
            <div>
                <h3>Case List</h3>
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
                        { this.Show_Cases() }
                    </tbody>
                </table>
            </div>
        )
    }
}