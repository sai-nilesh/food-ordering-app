// import './App.css';

import { Provider} from "react-redux";
import appStore from "./utils/appStore";

import Main from "./Components/Main";

function App() {
 
  return (
    <Provider store={appStore}>
        <div className="App">
          <Main/>
        </div>
    </Provider>
  );
}


export default App;
