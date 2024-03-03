import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}) => {
       
    const location = useLocation();

       useEffect(() => {
          window.scrollTo(0, 0);
          console.log('ScrollToTop useEffect called');
        }, [location.pathname]);
   
        return children; 
}

export default ScrollToTop