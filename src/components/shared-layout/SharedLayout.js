import "./SharedLayout.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../loading/Loading";

const SharedLayout = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
