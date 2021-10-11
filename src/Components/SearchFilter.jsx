import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useAsyncDebounce } from 'react-table';

const Styles = styled.div`
  .form-center {
    top: 0.25rem;
    position: absolute !important;
    left: 7%;
    width: 60%;

    @media (max-width: 1027px) {
      left: 12%;
    }
  }

  .search-area {
    font-size: 1rem;
    line-height: 2.5rem;
    padding: 0;
    width: 100%;
    background-color: #2d2b3d;
    border: 0px;
    border-radius: 5px;
    &:focus {
      outline: none;
      background-color: #d4d3e0;
    }
  }

  @media (max-width: 1027px) {
  }
`;

export const SearchFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <Styles>
      <span className="form-center">
        <input
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Search People..."
          className="search-area"
        />
      </span>
    </Styles>
  );
};
