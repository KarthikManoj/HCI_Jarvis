import React from 'react';
import { Table } from 'reactstrap';


const Example = (props) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th scope="row"></th>
          {/* <td>Haary Potter</td>
          <td>04/04/2020</td>
          <td>Rs.1000</td> */}
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Beast Quest</td>
          <td>05/05/2020</td>
          <td>Rs.500</td>
        </tr>
        <tr>
          <th scope="row"></th>
          {/* <td>Alice in Wonder land</td>
          <td>10/10/2020</td>
          <td>Rs.750</td> */}
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>The Professional</td>
          <td>Ashok Ferry</td>
          <td>Rs.850</td>
        </tr>
        <tr>
          <th scope="row"></th>
          {/* <td>Beast Quest</td>
          <td>05/05/2020</td>
          <td>Rs.500</td> */}
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Beast Quest</td>
          <td>05/05/2020</td>
          <td>Rs.500</td>
        </tr>
        <tr>
          <th scope="row"></th>
          {/* <td>Beast Quest</td>
          <td>05/05/2020</td>
          <td>Rs.500</td> */}
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;