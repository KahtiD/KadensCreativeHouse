import React, { useState } from 'react';
import styled from 'styled-components';
import ImageScroller from 'react-image-scroller';


const Wrapper = styled.div`
.hide {
  display: none;
}
.show {
height: 90%;
width: 100%;
position: absolute;
display: inline-block;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 1;
background-color: white;
}
.index-buttons {
  width: 100%;
    display: flex;
    margin: 1em;
    flex-wrap: wrap;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    bottom: 0;
    .index-button {
      padding: 0.5em;
    border-radius: 50%;
    }
}
`;

const Content = styled.div`

`;

const one = 'https://drive.google.com/uc?id=1hDs6_LC2f1jEOtiVNLJg8QC6VK3UAk-8';
const two = 'https://drive.google.com/uc?id=1S-0jDTP9NTUmzg4igoWXMt-JtgxORNdW';

const Showcase2 = (work) => {
  const [close, setClose] = useState(false);
  return (
  <Wrapper onClick={() => setClose(true)}>
    <Content className={close ? 'hide': 'show' }>
      *Tap here to close
      <ImageScroller style={{width: 'inherit', height: '100%'}}
        hideScrollbar={false}
      >
        <img data-src={one} alt="First" />
        <img data-src={two} alt="Second" />
      </ImageScroller>
    </Content>
  </Wrapper>
)
}



export default Showcase2;
