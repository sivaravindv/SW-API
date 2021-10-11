import React from 'react';

import styled from 'styled-components';
import { SideBarData } from './SideBarData';

const StyleSidebar = styled.div`

  .sidebar {
    height: 100vh;
    margin-top: 45px;
    width: 4vw;
    background-color: #1a1926;
    
  }
  .sidebarlist {
    height: auto
    margin-top: 10px;
    width: 100%;
    padding: 0;
  }

  .sidebarrow {
    width: 80%;
    height: 50px;
    list-style-type: none;
    color: #d4d3e0;
    margin: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    alighn-items: center;
    
    border-radius: 5px;
    &:hover {
      color: #1a1926;
      background-color: #fcf4e3;
    }


  }
  #active{
      color:#1a1926;
    background-color: #d9b162;
}
  #icon {
      padding: .3rem;
      font-size:2rem;
    place-item: center;
  }
  @media (max-width: 1027px) {
    
    position: fixed;
    transform: ${({ open }) =>
      open ? 'translateX(40%)' : 'translateX(-100%)'};
      
    left: 0;
    height: 100vh;
    width: 100px
    transition: transform 0.3s ease-in-out;
  
  }
`;

export const SideBar = ({ open }) => {
  return (
    <StyleSidebar open={open}>
      <div className="sidebar">
        <ul className="sidebarlist">
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className="sidebarrow"
                id={window.location.pathname === val.path ? 'active' : ''}
                onClick={(window.location.pathname = val.path)}
              >
                <div id="icon">{val.icon}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyleSidebar>
  );
};

export default SideBar;
