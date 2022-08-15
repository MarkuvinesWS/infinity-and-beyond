import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContentCard from './ContentCard';

function ContentBlock({ contentCards }) {
  return (
    <StyledContentBlock>
      {contentCards.map(({
        id,
        src,
        title,
        subText,
        tagText,
      }) => <ContentCard key={id} subTitle={subText} src={src} tagText={tagText} title={title} />)}
    </StyledContentBlock>
  );
}

ContentBlock.propTypes = {
  contentCards: PropTypes.arrayOf(PropTypes
    .objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])))
    .isRequired,
};

export default ContentBlock;

const StyledContentBlock = styled.div`
  display: flex;
  gap: 20px;
`;
