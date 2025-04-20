import React from 'react';
import { FaPlus } from 'react-icons/fa'; 
import '../style/Button.sass'

const Home = () => {
  return (
    <div>
<div className="btn-container">
  <button>
    <span className="text"><FaPlus/></span>
   
  </button>
</div>
    </div>
  );
}

export default Home;
