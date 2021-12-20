import { useDispatch, useSelector } from 'react-redux';
// import {
//     addCountAction,
//     removeCountAction,
// } from './store/counterReducer/counterReducer';
// import { getUsersData } from './utils/getUsersData';s

// import {
//     addUsersAction,
//     removeUsersAction,
// } from './store/usersReducer/usersReducer';
// import {
//     addCount,
//     removeCount,
// } from './toolkitstore/counterToolkitReducer/counterToolkitReducer';
import {
    addCount,
    removeCount,
} from './toolkitstore/counterToolkitReducer/counterToolkitSlice';

// import {
//     addUser,
//     removeUser,
// } from './toolkitstore/usersToolkitReducer/usersToolkitReducer';
import {
    addUser,
    removeUser,
} from './toolkitstore/usersToolkitReducer/usersToolkitSlice';

import styles from './App.module.css';

const App = () => {
    // const count = useSelector((state) => state.count.count);
    // const users = useSelector((state) => state.users.users);
    // const count = useSelector((state) => state.toolkitCounter.count);
    // const users = useSelector((state) => state.toolkitUsers.users);
    const count = useSelector((state) => state.sliceCounter.count);
    const users = useSelector((state) => state.sliceUsers.users);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <h1>{count}</h1>
            <div>
                {/* <button onClick={() => dispatch(addCountAction)}>Plus</button>
                <button onClick={() => dispatch(removeCountAction)}>
                    Minus
                </button> */}
                <button onClick={() => dispatch(addCount())}>Plus</button>
                <button onClick={() => dispatch(removeCount())}>Minus</button>
            </div>

            {/* <div>
                <button onClick={() => dispatch(getUsersData())}>Users</button>
            </div> */}

            {/* <div>
                <button onClick={() => dispatch(addUsersAction(prompt()))}>
                    Add User
                </button>
                <button onClick={() => dispatch(removeUsersAction())}>
                    Remove User
                </button>
            </div> */}
            <div>
                <button onClick={() => dispatch(addUser(prompt()))}>
                    Add User
                </button>
                <button onClick={() => dispatch(removeUser())}>
                    Remove User
                </button>
            </div>
            {users.map((user) => (
                <div className={styles.user} key={user}>
                    {user}
                </div>
            ))}
        </div>
    );
};

export default App;
