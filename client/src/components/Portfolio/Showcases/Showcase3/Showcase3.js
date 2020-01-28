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

const one = 'https://drive.google.com/uc?id=1Nz-mQdt-fj4D54y_mHInv96Z3u0o-31Q';
const two = 'https://drive.google.com/uc?id=1yMTYZaWVgW-RipdZlvj_KLNcLJCoLcCj';

const Showcase3 = (work) => {
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
        </ImageScroller>
    </Content>
    </>
)
}



export default Showcase3;
