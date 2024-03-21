import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, phone, email} = user;

    const navigate = useNavigate();
    
    const userStyle = {
        border: '2px solid pink',
        padding: '10px',
        borderRadius: '50px'
    }
    const handleShowDetail = () => {
        navigate(`/users/${id}`)
    }
    return (
        <div style={userStyle}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <Link to={`/users/${id}`}>Show Details</Link>
            <Link to={`/users/${id}`}>
                <button>Click Me</button></Link>   
            <button onClick={handleShowDetail}>Click to see Me</button>         
        </div>
    );
};

export default User;