import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
        <header>
            <h1 style={{cursor: "pointer"}} onClick={() => navigate('/')}>My notes app</h1>
        </header>
        <Outlet />
        </div>

    )
}

export default Layout;