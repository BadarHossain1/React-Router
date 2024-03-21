import { useLoaderData } from "react-router-dom";
import User from "./User/User";


const Users = () => {
    const userStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
    };
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users</h2>
            <h2>Ayo wagwan we {users.length} lads out here</h2>
            <div style={userStyles}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                    
                }
            </div>
        </div>
    );
};

export default Users;