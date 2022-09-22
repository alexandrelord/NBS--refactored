import { useEffect } from "react";

const LoginSuccess = () => {
    useEffect(() => {
        setTimeout(() => {
            window.close();
        }
        , 1000);
    }, []);

    return <div>Gracias!</div>;
}

export default LoginSuccess;