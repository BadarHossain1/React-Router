import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, phone, email} = user;
    const userStyle = {
        border: '2px solid pink',
        padding: '10px',
        borderRadius: '50px'
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
        </div>
    );
};

export default User;