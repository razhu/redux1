import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter'
import { getUser } from './redux/ducks/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user)
  return (
    <div className="App">
      {user && <h2>{user.name}</h2>}
      <Counter/>
    </div>
  );
}

export default App;
