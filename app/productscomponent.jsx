import React from 'react';
import ReactTable from 'react-table';
import axios from "axios";


class Productscomponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

  }


   componentDidMount() { 
    axios.get("http://localhost:3000/api/products")
    .then(result => {               
            this.setState({
                products:result.data
            })
        })
   }

 

render() {
  const data = this.state.products;

  const columns = [{
    Header: 'ID',
    accessor: 'id',
  },{
    Header: 'Face',
    accessor: 'face',
    sortable: false, 
  }, {
    Header: 'Price',
    accessor: 'price',
  },{
    Header: 'Size',
    accessor: 'size' 
  },{
    Header: 'Date',
    accessor: 'date',
    sortable: false,
  },];

  return(
    <div>
    <ReactTable
    data={data} columns={columns} defaultPageSize={10}/>
    </div>
    );
  }

}

export default Productscomponent;