import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes} from 'react-router-dom';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {

  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div className="App">
      <Header />
      <h3>Safety on the ship</h3>
      <Routes>
        <Route index element={<List />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
