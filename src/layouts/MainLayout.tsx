import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";

const MainLayout = () => {
    return (
        <div>
            <Menu />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
