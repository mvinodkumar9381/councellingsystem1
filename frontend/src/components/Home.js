import React from 'react';

// import Hello from './Hello';
import Message from './Message';
import Counter from './Counter';
// import ProductList from './ProductList'
// import TodoList from './TodoList';


// import DataFetch from './DataFetch';
// import UserCard from './UserCard';

// import CounterDemo from './CounterDemo';
// import Functiondemo from './Functiondemo';
// import MyForm from './MyForm';

import FetchRegistrations from './FetchRegistrations';


const Home = () => {
  const products = [
    { id: 1, name: 'Salar', price: 200 },
    { id: 2, name: 'Guntur Karam', price: 300 },
    { id: 3, name: 'Na samiiranga', price: 250 },
  ];

  const todos = [
    { id: 1, title: 'Complete task 1', completed: false },
    { id: 2, title: 'Read a book', completed: false },
    { id: 3, title: 'Learn React', completed: false },

  ];
  

  return (
    <div>
      {/* <DataFetch /> 
      <UserCard  Email = "mvinodkumar202@gmail.com" role = "admin"/>
      <Functiondemo name = "Vinod" id = "2200030462"/> */}
     
      
      <FetchRegistrations/>
      {/* <Hello name="Vinod" />
      <Message />
      <Counter />

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <ProductList products={products} />
        </div>

        <div style={{ flex: 1 }}>
          <TodoList todos={todos} />
        </div>
      </div> */}
    </div>
  );
};

export default Home;