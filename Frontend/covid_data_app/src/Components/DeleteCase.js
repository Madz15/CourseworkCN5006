import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
function Func_DeleteCase(props) 
 {
    const [state, setState] = useState({
        Date: "",
        County: "",
        State: "",
        Cases:"",
        Deaths: "",
      
    });
      //let url= "http://localhost:5000/"
    const [IsLoad, setLoad]=useState(false)
    const [IsDeleted,setDelete]=useState(false)
   
    useEffect(()=>{
        console.log("useeff delete"+props.match.params.id)
        axios.post("http://localhost:5000/deleteCase/"+props.match.params.id)
        .then(res => {
            console.log("data deleted "+res.data)
            setDelete(true)
            axios.get("http://localhost:5000/allcases")
            .then(res => {
                // set the state variable from the data received from the axios api
                console.log("data received "+res.data)
                res.data.map(function(currentstate, i){
                    console.log(currentstate)
                //setLoad(true);
            })      
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
            .catch(err => {
              console.log("error has occured")
            })
                      }) 
                      
        .catch(err => {
          console.log("error has occured")
        })
        alert("Case Deleted Succesfully!")
    },[props.match.params.id])

   
    
    function ShowCasesTable() {
        return state.map(function(currentcase, i){
            
            return <Casesdata case={currentcase} key={i} />;
            
        })
    }
    useEffect(() => {
        if (state.length>0)
        setLoad(true)
        
     }, [state]);
     
     

     return (
        <div>
            <h3>Deleted Cases </h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
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
                    { IsLoad ? ShowCasesTable() : console.log("No table data")}
                </tbody>
            </table>
        </div>
    )
    }

export default Func_DeleteCase;