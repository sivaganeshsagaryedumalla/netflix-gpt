import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';
import GptSearch from './components/GptSearch';


function App() {
  return (

    <Provider store={appStore}>
      <GptSearch></GptSearch>
      <Body></Body>
    </Provider>
  );
}

export default App;
