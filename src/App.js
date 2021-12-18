import { useDispatch, useSelector } from 'react-redux';
import {
    addCountAction,
    removeCountAction,
} from './store/counterReducer/counterReducer';
// import { getUsersData } from './utils/getUsersData';

import styles from './App.module.css';
import {
    addUsersAction,
    removeUsersAction,
} from './store/usersReducer/usersReducer';

const App = () => {
    const count = useSelector((state) => state.count.count);
    const users = useSelector((state) => state.users.users);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(addCountAction)}>Plus</button>
                <button onClick={() => dispatch(removeCountAction)}>
                    Minus
                </button>
            </div>

            {/* <div>
                <button onClick={() => dispatch(getUsersData())}>Users</button>
            </div> */}

            <div>
                <button onClick={() => dispatch(addUsersAction(prompt()))}>
                    Add User
                </button>
                <button onClick={() => dispatch(removeUsersAction())}>
                    Remove User
                </button>
            </div>
            {users.map((user) => (
                <div key={user}>{user}</div>
            ))}
        </div>
    );
};

export default App;
