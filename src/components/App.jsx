import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyRoutes from '../Routes';

import { current } from "../redux/auth/auth-operations";


const App=()=>{
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current());
  }, [dispatch])
return(
  <div className="App">
  <MyRoutes />
</div>
);
}
export default App;
