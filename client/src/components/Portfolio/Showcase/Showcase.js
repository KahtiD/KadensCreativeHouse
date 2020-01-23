import React, { useState } from 'react';
import styled from 'styled-components';
import one from '../../../images/new/colorplug.png';
import ImageScroller from 'react-image-scroller';


const Wrapper = styled.div`
.hide {
  display: none;
}
.show {
background-color: pink;
height: 90%;
width: 100%;
position: absolute;
display: inline-block;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 1;
}
`;

const Content = styled.div`
  position: fixed;
  overflow-y: scroll;
  height: 100%;
  background: url('${long}');
`;

const Close = styled.button`
width: 20px;
height: 20px;
background-color: grey;
float: right;
margin: 10px 10px;
`;

const Showcase = () => {
  const [close, setClose] = useState(false);
  return (
  <Wrapper>
    <Content className={close ? 'hide': 'show' }>
      <ImageScroller>
        <img src="one" alt="First" />
        <img src="two" alt="Second" />
        <img src="three" alt="Third" />
        <img src="four" alt="Fourth" />
        <img src="five" alt="Fifth" />
      </ImageScroller>
      <Close onClick={() => setClose(true)}></Close>
    </Content>
  </Wrapper>
)
}



export default Showcase;
