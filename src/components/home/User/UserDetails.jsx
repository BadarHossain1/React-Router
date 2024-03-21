import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {postId} = useParams();
    console.log(postId)
    const {name} = user;
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Hey user here</h1>
            <p>{name}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default UserDetails;