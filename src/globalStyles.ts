import styled, { createGlobalStyle } from 'styled-components';

export interface IStyledProps {
  margin?: string;
  padding?: string;
  justify?: string;
  align?: string;
  mb?: string;
  mt?: string;
  position?: string;
  width?: string;
  height?: string;
  wrap?: string;
  textAlign?: string;
  fontSize?: string;
  gap?: string;
  display?: string;
  color?: string;
}

const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Montserrat', sans-serif;
}
`;

export const Container = styled.div<IStyledProps>`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  padding: ${({ padding }) => (padding ? padding : '0 50px')};

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Row = styled.div<IStyledProps>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Column = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ align }) => (align ? align : '')};
  gap: ${({ gap }) => (gap ? gap : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  color: ${({ color }) => (color ? color : '')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Typography = styled.p<IStyledProps>`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  color: ${({ color }) => (color ? color : '')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  margin: ${({ margin }) => (margin ? margin : '')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
  margin-top: ${({ mt }) => (mt ? mt : '')};
`;

export default GlobalStyle;
