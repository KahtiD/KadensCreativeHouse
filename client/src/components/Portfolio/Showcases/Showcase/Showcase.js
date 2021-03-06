import React, { useState } from 'react';

import styled from 'styled-components';
import ImageScroller from 'react-image-scroller';

const Wrapper = styled.div`
&&&.hide {
  display: none !important;
}
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const Content = styled.div`
&&&.hide {
  display: none !important;
}
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-color: white;
  margin-top: 25px;
`;

const Button = styled.button`
  position: absolute;
  margin: 5px 5px;
  right: 0;
  z-index: 100;
`;

const one = 'https://drive.google.com/uc?id=1WrvRzGerL7pE-HQmgPr-ELhQp47p9ILG';
const two = 'https://drive.google.com/uc?id=1A0YgbPeGua6sljuets_CbJWeSTWJe6VM';
const three = 'https://drive.google.com/uc?id=1YAQJ4hG6J1wXMt_9LszJd_pmnkeKnBLK';
const four = 'https://drive.google.com/uc?id=1h6ul07FEuGVLmkVE6F7e8ie4Zr_NMsOI';
const five = 'https://drive.google.com/uc?id=1MGm-KMRbej4UvDkBB7hT6Xh9xkd1GHgq';
const six = 'https://drive.google.com/uc?id=1Nd4_LXtwbRtDcvl_wZ8lP02LmA86XGQ-';
const seven = 'https://drive.google.com/uc?id=1cupweqEwsLqR-akOYn6U9gF7mx8itY0k';
const eight = 'https://drive.google.com/uc?id=1lpu2U4MygSyrCbIei3DWnV9m6ZceNAn5';


const Showcase = (work) => {
  const [close, setClose] = useState(false);
  return (
    <>
    <Wrapper className={close && 'hide'}></Wrapper>
    <Content className={close && 'hide'}>
        <Button onClick={() => setClose(true)}>Close</Button>
        <ImageScroller style={{width: 'inherit', height: '95%'}}
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
        </ImageScroller>
    </Content>
    </>
)
}



export default Showcase;
