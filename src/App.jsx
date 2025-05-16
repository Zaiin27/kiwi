import { useEffect } from 'react';
import KiwiRoutes from './routes/KiwiRoutes';

function App() {
  
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    
  }, [])
  
  return <KiwiRoutes />;
}

export default App;