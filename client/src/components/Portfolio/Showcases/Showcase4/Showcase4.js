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

// const Close = styled.button`
// width: 20px;
// height: 20px;
// left: 95%;
// background-color: grey;
// margin: 15px 10px;
// position: absolute;
// z-index: 5000;
// `;

const one = 'https://drive.google.com/uc?id=18FDOV29U4zSXGREEWNLaOQS5ewN5tJDS';
const two = 'https://drive.google.com/uc?id=1cBhJgm9_u5lDbuzEXkEihL6lf9-lM-6p';

const Showcase4 = (work) => {
  const [close, setClose] = useState(false);
  return (
  <Wrapper onClick={() => setClose(true)}>
    <Content className={close ? 'hide': 'show' }>
        <ImageScroller style={{width: 'inherit', height: '100%'}}
          hideScrollbar={false}
        >
          <img src={one} alt="First" />
          <video controls autoplay>
            <source src={two} alt="Second" type="video/mp4" />
          </video>
        </ImageScroller>
    </Content>
  </Wrapper>
)
}



export default Showcase4;
