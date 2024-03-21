import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h1>Hey user here</h1>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails;