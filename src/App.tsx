import store from '@/store';
import { Provider } from 'react-redux';

import Home from '@/pages/Home';

import '@/styles/reset.scss';

function App() {
    return (
        <Provider store={store}>
            <Home></Home>;
        </Provider>
    );
}

export default App;
