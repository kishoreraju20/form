/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Grid = (props) => {

  const { data } = props;
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
  

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <table >
        <thead>
          <tr>
            <th onClick={() => handleSort('input1')}>Input 1</th>
            <th onClick={() => handleSort('input2')}>Input 2</th>
            <th onClick={() => handleSort('input3')}>Input 3</th>
          </tr>
        </thead>
        <tbody className="container">
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.input1}</td>
              <td>{item.input2}</td>
              <td>{item.input3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a onClick={() => handlePageChange(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;