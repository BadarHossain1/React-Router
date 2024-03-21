import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Opsss!!!! Galti se Mistake kuch ho gaya</h1>
            
                <i>{error.statusText || error.message}</i>
            
            {
                error.statusText === 404 && <div> 
                    <h3>Page Not Found</h3>
                    <p>Go back where you came from</p>
                    <Link to="/"><button>Go Back</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;