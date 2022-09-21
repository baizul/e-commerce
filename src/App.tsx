import { useQuery } from "react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_URLS } from "./config/API_URLS";
import { SET_USER_DATA } from "./redux/Actions/common";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./config/Routes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ErrorBox from "./components/shared/ErrorBox";
import axios from "./utils/Axios/axiosInstance";
import CustomBackDrop from "./components/shared/CustomBackDrop";
import { useSelector } from "react-redux";
import { ILOADER } from "./redux/Protocols/common";
import { useEffect, useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state: ILOADER) => state);
  useQuery(["currentUser"], () => axios.get(API_URLS.authUser), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    enabled: localStorage.getItem("token") !== null,
    onSuccess: (response: any) => {
      dispatch(SET_USER_DATA(response));
    },
  });
  const [loaderState, setLoaderState] = useState(false);
  useEffect(() => {
    setLoaderState(loader?.["loader"]);
  }, [loader]);

  return (
    <Router>
      <ScrollToTop>
        <NavBar />
        <CustomBackDrop open={loaderState} />
        <Routes>
          {routes.map(({ id, path, component, protectedRoute }) =>
            protectedRoute ? (
              <Route
                key={id}
                path={path}
                element={
                  localStorage.getItem("token") ? (
                    component
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            ) : (
              <Route key={id} path={path} element={component} />
            )
          )}
        </Routes>
      </ScrollToTop>
      <Footer />
      <ErrorBox />
    </Router>
  );
};

export default App;
