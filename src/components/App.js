import  React, { useContext, useState }  from 'react';
import  '../styles/App.css';
import {CurrentContext} from '../context/CurrentContext'

const CURRENCIES={
  Dollar:{
    code: 'USD',
    symbol: '$',
    label: 'Dollar',
    conversionRate:1
  },
  Rub:{
    code: 'RUB',
    symbol: 'P',
    label: 'RUB',
    conversionRate:80
  }
  
};
const DATA = [
    {
      id: '1',
      title: 'The Road to React',
      price: 19.99,
    },
    {
      id: '2',
      title: 'The Road to GraphQL',
      price: 29.99,
    },
  ];
const App= ()=> {
   const [currency, setCurrency]=useState(CURRENCIES.Dollar)
        return (
         
             <CurrentContext.Provider value={currency}>
                  <CurrencyButtons onChange={setCurrency} />

          
             <Books list={DATA}/>
             </CurrentContext.Provider>
        
        )
};
const CurrencyButtons = ({ onChange }) => {
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};


const Books = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Book = ({ item }) => {
  const currency = React.useContext(CurrentContext);
  const price = new Intl.NumberFormat('US-RU', {
    style: 'currency',
    currency: currency.code,
  }).format(item.price * currency.conversionRate);
  return (
    <li>
      {item.title} - {price} 
    </li>
  );
};


export default App;