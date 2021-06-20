import { css } from '@emotion/react';
import styled from '@emotion/styled';

const secondaryGroupStyles = (props) =>
  css`
    ${props.variant === 'secondary'
      ? css`
          color: rgb(204, 174, 112);
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          height: 36px;
        `
      : css`
          background-color: rgba(49, 41, 85, 0.85);
          border: 1px solid #3b2d6a;
          border-radius: 0.6rem 0.6rem 0 0;
          box-sizing: border-box;
          display: inline-flex;
          outline: none;
          color: rgb(151, 146, 164);
          box-shadow: ${props.disabled
            ? 'rgb(21 11 37 / 50%) 0px 2px 10px 0px'
            : 'rgba(21, 11, 37, 0.5) 0 2px 10px 0'};
        `};
  `;

const tabGroupStyles = (props) =>
  css`
    opacity: ${props.disabled && '0.8'};
  `;

const tabItemStyles = (props) =>
  css`
    ${
      props.variant === 'secondary'
        ? css`
            position: relative;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin: 0px 2rem;
            box-sizing: content-box;
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 1.6rem;
          `
        : css`
            box-sizing: border-box;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.6rem;
            outline: 0;
            overflow: hidden;
            padding: 1.2rem;
            position: relative;
          `
    }
    &:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 2px;
        background: rgb(203, 172, 111);
      }
    }
  }`;

const tabCursorStyles = (props) =>
  css`
    cursor: ${props.disabled ? 'default' : 'pointer'};
  `;

const TabsGroup = styled.div`
  font-family: Roboto, sans-serif;

  ${tabGroupStyles};
  ${secondaryGroupStyles};
`;

const TabItem = styled.div`
  ${tabCursorStyles};
  ${tabItemStyles};

  &:not(:first-child) {
    border-left: 1px solid rgb(59, 45, 106);
  }

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export { TabsGroup, TabItem };
