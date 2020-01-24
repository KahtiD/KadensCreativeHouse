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

const one = 'https://drive.google.com/uc?id=1WrvRzGerL7pE-HQmgPr-ELhQp47p9ILG';
const two = 'https://drive.google.com/uc?id=1A0YgbPeGua6sljuets_CbJWeSTWJe6VM';
const three = 'https://drive.google.com/uc?id=1k-P8zxHbnAti0lVxwXPr29DZeFBqd-jh';
const four = 'https://drive.google.com/uc?id=1YAQJ4hG6J1wXMt_9LszJd_pmnkeKnBLK';
const five = 'https://drive.google.com/uc?id=1h6ul07FEuGVLmkVE6F7e8ie4Zr_NMsOI';
const six = 'https://drive.google.com/uc?id=1MGm-KMRbej4UvDkBB7hT6Xh9xkd1GHgq';
const seven = 'https://drive.google.com/uc?id=1-pVao4p0SkWEj7pAlwic5QluRlQWkVit';
const eight = 'https://drive.google.com/uc?id=1zAH0XPckOycfbKVPKHiNKRujmsJ6jBhM';
const nine = 'https://drive.google.com/uc?id=1RQy8_GAwM0QAegKNJWo1hCaGcML13tXP';
const ten = 'https://drive.google.com/uc?id=1lz5ow0MeaS1qaULG40e75-_yRnkAyxVy';
const eleven = 'https://drive.google.com/uc?id=1lpu2U4MygSyrCbIei3DWnV9m6ZceNAn5';

const Showcase = (work) => {
  const [close, setClose] = useState(false);
  return (
  <Wrapper onClick={() => setClose(true)}>
    <Content className={close ? 'hide': 'show' }>

        <ImageScroller style={{width: 'inherit', height: '100%'}}
          hideScrollbar={false}
        >
        <img src={one} alt="First" />
        <img src={two} alt="Second" />
        <img src={three} alt="Third" />
        <img src={four} alt="Fourth" />
        <img src={five} alt="Fifth" />
        <img src={six} alt="Sixth" />
        <img src={seven} alt="Seven" />
        <img src={eight} alt="Eight" />
        <img src={nine} alt="Nine" />
        <img src={ten} alt="Ten" />
        <img src={eleven} alt="Eleven" />
        </ImageScroller>

    </Content>
  </Wrapper>
)
}



export default Showcase;
