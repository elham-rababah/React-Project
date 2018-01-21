import React from 'react';
import ReactTable from 'react-table';
import axios from "axios";


class Productscomponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      data :[],
      pages :-1,
      loading: false,
      pageSize:20,
      page :0


    };

  }


render() {
  //const data = this.state.products;

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
        columns={columns}
        manual 
        data={this.state.data} // should default to []
        pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
        loading={this.state.loading}
        onFetchData={(state, instance) => {
        // show the loading overlay
        this.setState({loading: true})
        // fetch your data
        axios.get("http://localhost:3000/api/products", {
          page: state.page,
          pageSize: state.pageSize,
        }).then((res) => {
            // Update react-table
            console.log(res.data);
            this.setState({
              data: res.data,
              pages: 10,
              loading: false
            })
          })}}/></div>
    );
  }

}

export default Productscomponent;