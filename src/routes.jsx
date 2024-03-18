import { Route, Routes } from "react-router";
import Error from "./page/error/error";
import Main from "./page/main/main";

function AppRoute () {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
};

export default AppRoute;