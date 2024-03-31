import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';


export default function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>

    </div>
  );
}
