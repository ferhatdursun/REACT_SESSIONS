import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const  user  = useSelector((state) => state.yetkiSlice.kullanici);
//!yetkiSlice sayfasından kullanici dolu gelirse yönlendirilen sayfaya git 
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
