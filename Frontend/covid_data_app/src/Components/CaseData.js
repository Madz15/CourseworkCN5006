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

export default Casesdata;