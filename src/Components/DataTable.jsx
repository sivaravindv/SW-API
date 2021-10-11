import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useTable, useGlobalFilter } from 'react-table';
import { SearchFilter } from './SearchFilter';
const TableStyle = styled.div`
  table {
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 95vw;
    position: absolute;
    top: 20vh;
    left: 4vw;
    @media (max-width: 1027px) {
      width: 100vw;
      left: 0;
    }
    td,
    th {
      padding: 1rem;
      text-align: left;
      text-transform: capitalize;
    }

    tr:nth-child(even) {
      background-color: #fafafc;

      &:hover {
        background-color: #fcf4e3;
      }
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: 0.8rem;
      border-right: 1px solid rgb(184, 176, 176);
      text-align: left;
      text-transform: uppercase;
      background-color: #d4d3e0;
      color: #000;
    }

    td:nth-child(1) {
      color: rgb(72, 72, 228);
    }

    tbody {
      width: 90vw;
    }
  }
`;

const TableContent = ({ columns, fetchPeopleData, peopleData: data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { searchFilter } = state;

  useEffect(() => {
    fetchPeopleData();
  }, [fetchPeopleData]);

  return (
    <>
      <SearchFilter filter={searchFilter} setFilter={setGlobalFilter} />
      <TableStyle>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, headerIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
                {headerGroup.headers.map((columns, columnIndex) => {
                  return (
                    <th key={columnIndex} {...columns.getHeaderProps()}>
                      {columns.render('header')}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => {
                    return <td key={cellIndex}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableStyle>
    </>
  );
};

export const DataTable = () => {
  const [peopleData, setPeopleData] = useState([]);

  let fetchPeopleData = useCallback(() => {
    let fetchPeople = async () => {
      try {
        let response = await axios.get(`https://swapi.dev/api/people/`);
        setPeopleData(response.data.results);
      } catch (err) {
        // eslint-disable-next-line no-undef
        console.log('Error:', err);
      }
    };
    fetchPeople();
  }, []);

  const columns = useMemo(
    () => [
      { header: 'Name', accessor: 'name' },
      { header: 'Height', accessor: 'height' },
      { header: 'Mass', accessor: 'mass' },
      { header: 'Hair Color', accessor: 'hair_color' },
      { header: 'Eye Color', accessor: 'eye_color' },
      { header: 'Skin Color', accessor: 'skin_color' },
      { header: 'Birth Year', accessor: 'birth_year' },
      { header: 'Gender', accessor: 'gender' },
    ],
    []
  );

  return (
    <TableContent
      columns={columns}
      fetchPeopleData={fetchPeopleData}
      peopleData={peopleData}
    />
  );
};
export default DataTable;
