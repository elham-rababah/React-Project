import React from 'react';
import ReactTable from 'react-table';
import { Grid } from 'react-redux-grid';


class Productscomponent extends React.Component {

  constructor(props) {
    super(props);


    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('http://localhost:3000/api/products')
    .then((result) => {
      console.log("result",result)
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      this.data = jsonResult
      console.log(jsonResult);
    })
  }


 

render() {
  
  const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },
  {
    name: 'eee Linsley',
    age: 86,
    friend: {
      name: 'rrr Maurer',
      age: 93,
    }
  }

  ]

  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }];
  return(
    <div>
    <ReactTable
    data={data} columns={columns} defaultPageSize={10}/>
    </div>
    );
  }

}

export default Productscomponent;