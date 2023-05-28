import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
          <div className="flex justify-center">
            <div>
              <img className="text-center" src="assets/spinner/spinner.gif" alt="" />
            </div>
          </div>
        );
      }
    
      if (user && user.uid) {
        return children;
      }
      return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;