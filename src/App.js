import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
  'id' : 1,
  'name' : '홍길동',
  'birthday' : '951122',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
    'name' : '여길동',
    'birthday' : '971225',
    'gender' : '여자',
    'job' : '직장인'
    }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's develop management system.</h2>
        {customer.map(c => {
          return <Customer key={c.id}
              id={c.id}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
        })}
      </header>
      
    </div>
  );
}

export default App;
