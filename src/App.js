import './App.css';
import Data from './data';
import { useState } from 'react';
import Menu from './component/Menu';

function App() {

  const [foodmenu, setFoodMenu] = useState(Data);

  function getFilterList(element) {
    if (element == "[]") {
      setFoodMenu(Data)
    } else {
      setFoodMenu(Data.filter((item) => item.category === element))
    }
  }

  return (
    <div className="App">
      <p className='heading'>Our Menu</p><hr />
      <div className='btnBox'>
        <button onClick={() => getFilterList("[]")}>All</button>
        <button onClick={() => getFilterList("breakfast")}>Breakfast</button>
        <button onClick={() => getFilterList("lunch")}>Lunch</button>
        <button onClick={() => getFilterList("shakes")}>shakes</button>
      </div>

      <div className='container'>
        {foodmenu?.map((menu, index) => {
          return <Menu key={menu.id} {...menu} />
        })}
      </div>

    </div>
  );
}

export default App;
