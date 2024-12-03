import { useState } from 'react';
import './App.css';
import { users } from './Data/users';
import Header from './Header';
import Ternary from './Ternary';
import Footer from './Footer';
import Faqs from './Faqs';
import { tabs } from './Data/tabs';

function App() {

  // UseState, Count
  let [count, setCount] = useState(1);

  // Component rendaring using if else conditional statement 
  let [callDost, setcallDost] = useState(false);

  // password to text using useState 
  let [password, setPassword] = useState(false);

  let [activetabs, setactiveTabs] = useState(0);
  let [activeContent, setActiveConten] = useState(tabs[0]);

  // props 
  let headerInfo = {
    title: 'My App',
    menu1: 'Home',
    menu2: 'About',
    menu3: 'Contact',
    menu4: 'Gallery',
    menu5: 'Product',
    menu6: 'Help',
  };
  console.log(headerInfo);

  // Event Handler 
  let displayData = () => {
    alert("Helooooooooooooooooo");
  };

  let addData = (a, b) => {
    console.log(a + b);
  };


  let displayCount = () => {
    setCount(count + 1);
  };


  let template = '';

  if (callDost) {
    template = (
      <>
        <h1></h1>
        <button onClick={() => setcallDost(!callDost)} className='callDost'>Call</button>
      </>
    );
  } else {
    template = (
      <>
        <DostCall />
        <button onClick={() => setcallDost(!callDost)} className='callDost'>Hide</button>
      </>
    );
  }


  return (
    <div className="App">
      <Header headerInfo={headerInfo}>
        <h3>This is Children props</h3>
      </Header>

      <h1>Hello My App</h1>
      <div className='container'>
        {users.map((user, idx) => (
          <UsersInfo UserName={user} key={idx} />
        ))}
      </div>
      <div className='btns'>
        <button onClick={displayData}>Click me</button>
        <button onClick={() => addData(2, 3)}>Add Number</button>
        <button onClick={displayCount}>Count</button>
      </div>
      <h1 className='count'>Count: {count}</h1>

      <h1>Using if else condition</h1>
      {template}
      <Ternary />

      <input type={password ? 'text' : 'password'} className='password' />
      <button onClick={() => setPassword(!password)}  >
        {password ? 'Hide' : 'Show'}
      </button>
      <Faqs />

      <div className='tabsOuter'>
        <h1>Something About Tabs</h1>
        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li>
                <button>{tabsItems.title}</button>
              </li>
            )

          })}
        </ul>
        <p>
          {activeContent.description}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;

function UsersInfo({ UserName }) {
  return (
    <div className='block'>
      <div className='userName'>Name: {UserName.name}</div>
      <div className='userEmail'>Email: {UserName.email}</div>
      <div className='userAddress'>City: {UserName.address.city}</div>
      <div className='userPhone'>Phone: {UserName.phone}</div>
    </div>
  );
}

function DostCall() {
  return (
    <h2>Dostttttttttttttt</h2>
  );
}
