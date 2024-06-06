import React, { useEffect, useRef, useState } from 'react';
import "./style.css";
import Card from './Card';
import Modal from './Modal';

/*
Так как CRA открывает фронтовое приложение по 3000 порту, в package.json сменил порт для запуска на 8080
*/ 

function App() {
  
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentTargetInfo, setCurrentTargetInfo] = useState({});

  useEffect(
    () => {
        fetch(`http://127.0.0.1:3000?term=${search}`)
        .then(res => res.json())
        .then(data => setData([...data])) 
    }, [search]
  );

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }

  const showModalWindow = (user) => {
    setCurrentTargetInfo(user);
    setShowPopUp(!showPopUp);
  }

  const closeModal = () => {
    showPopUp && showModalWindow();
  }

  return (
    <div className='main'>
      <div className='search-field'>
        <input className='search-bar' value={search} onChange={handleInputChange}></input>
        <button className='search-button'></button>
      </div>
      <div className='content'>
        {data.map((user, index) => <Card onClick={() => showModalWindow({...user})} key={index} {...user}/>)}
      </div>
      {showPopUp && <Modal close={closeModal} {...currentTargetInfo}/>}
    </div>
  );
}


export default App;
