import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function TestaddComponant() {
  return (
    <p> testing</p>
  )
}


const games = [
    { title: 'Halo', xboxExclusive: true, id: 1 },
    {title: 'Red Dead', xboxExclusive: false, id: 2}
];

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}
function ProductRow({product}) {
  let name = product.stocked ? product.name :
  <span style={{color: 'red'}}>
    {product.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable ({products}){
  let rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
        category={product.category}
        key={product.category}
        />
      )
    }
    rows.push(
      < ProductRow 
      product={product}
      key={product.name}
      />
    )
  });

  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder='Search...'/>
      <label>
        <input type ="checkbox" />
        {' '}
      </label>
    </form>
  );
}

function FilterableProductTable({products}) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];






function App() {
  function CounterParagrapgh() {
    
    return (
      <p> 
        The button has been clicked {count}
      </p>
    )
  }
  
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  function MyButton({ count, onClick }) {
    
    return (
      <>
      <button onClick={onClick} className='MyBut'>
        Click Me to See a Change in State
      </button>
      <CounterParagrapgh count={count} />
      </>
    );
  }
  console.log('test for console logging')
  const listItems = games.map(game =>
    <li
      key={games.id}
      style={{
        color: game.xboxExclusive ? 'magenta' : 'white'
      }}
    >
      {game.title}
    </li>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{listItems}</ul>
        <p>
          Edit <code>Checking out stuff</code> and save to reload.
        </p>
        <FilterableProductTable products={PRODUCTS} />
        <br />
        <MyButton count = {count} onClick={handleClick} />
        
        < TestaddComponant />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
