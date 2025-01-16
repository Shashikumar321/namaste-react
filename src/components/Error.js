import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {

    const err = useRouteError();
    return (

        <div className="error-page">
          <Header />
            <h1 className="error-msg">Oops!</h1>
            <h2>Something went wrong. Please try again</h2>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
}

export default Error;