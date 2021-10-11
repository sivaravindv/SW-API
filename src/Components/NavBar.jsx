import React from 'react';

import styled from 'styled-components';

import { FaOctopusDeploy } from 'react-icons/fa';
import Hamburger from './Hamburger';

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  height: 3rem;
  justify-content: flex-end;
  align-items: center;
  background-color: #1a1926;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  button {
    cursor: pointer;
    text-align: center;
    margin-left: 3.5rem;
    padding: 0.3rem;
    font-size: 0.8rem;
    background-color: #1a1926;
    color: #8c8c92;
    border: 0;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
      padding: 3px;
    }
    @media (max-width: 1027px) {
      margin-left: 0.5rem;
      span {
        display: none;
      }
    }
  }
`;

export const NavBar = () => {
  return (
    <>
      <Hamburger />
      <Nav>
        <button>
          <FaOctopusDeploy />
          <span>Report Bug</span>
        </button>
        <button>
          <span>Matt</span>
          <img
            src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
            alt="pr0filepic"
          ></img>
        </button>
      </Nav>
    </>
  );
};
