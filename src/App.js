import logo from './logo.svg';
import './App.css';
import Usereducer from './components/usereducer';
import Complexreducer from './components/complexreducer';
import Contexta from './components/contexta';
import React from 'react';
import { createContext } from 'react';
import Themechange from './components/counterchanger';
import Counter from './components/useEffect';
import Fetching from './components/fetch';



export const UserContext = createContext()
export const NameContext = createContext()
export const ChannelContext = createContext()
function App() {
  return (
    <div className="App">
      <Usereducer />
      <Complexreducer />


      <UserContext.Provider value={'salim'}>
        <NameContext.Provider value={'zid salim'}>
          <ChannelContext.Provider value={'abc limited'}>
                <Contexta />
          </ChannelContext.Provider>
        </NameContext.Provider>
      </UserContext.Provider>

      <Themechange />
      {/* <Counter /> */}
      <Fetching />

  

    
    
    </div>
  );
}

export default App;
