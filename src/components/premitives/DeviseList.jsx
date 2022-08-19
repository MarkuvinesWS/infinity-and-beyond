import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function DeviseList({ title, list }) {
  const listTitle = useRef(null);
  useEffect(() => {
    listTitle.current.innerHTML = title;
  });
  return (
    <StyledDeviseList>
      <h3 ref={listTitle} className="devise-list-title text-style-raleway-title-01">{title}</h3>
      <ul className="devise-list-list">
        {list.map((device) => <li className="text-style-raleway-16-px-regular devise-list-item">{device}</li>)}
      </ul>
    </StyledDeviseList>
  );
}

DeviseList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeviseList;

const StyledDeviseList = styled.ul`
  width: 190px;
  color: var(--color-black-10);
  .devise-list-title {
    text-align: center;
    margin: 0 0 16px 0;
  }
  .devise-list-list {
    text-align: center;
    list-style: none;
  }
  .devise-list-item {
    
  }
`;
