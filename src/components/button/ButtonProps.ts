import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyle = (props) =>
  css`
    ${props.loading
    ? css`
          background-color: ${props.variant === 'primary' && '#986f25'};
          background-color: ${props.variant === 'secondary' && '#3a3c72'};
          background-color: ${props.variant === 'tertiary' && '#1d1936'};
        `
    : css`
          background-color: ${props.variant === 'primary' && '#af8f4d'};
          background-color: ${props.variant === 'secondary' && '#565895'};
          background-color: ${props.variant === 'tertiary' && '#211d41'};
        `}

    border: ${props.variant === 'tertiary' && '1px solid rgb(56, 47, 102)'};

    ${!props.uniformPadding
    ? css`
          ${props.size === 'sm' &&
    css`
            padding: ${(props.icon && props.labelVisible) || (props.loading && props.labelVisible)
      ? '4px 12px 4px 8px'
      : '4px 16px'};
            font-size: 12px;
          `}
          ${props.size === 'md' &&
    css`
            padding: ${(props.icon && props.labelVisible) || (props.loading && props.labelVisible)
      ? '8px 16px 8px 12px'
      : '8px 20px'};
            font-size: 14px;
          `}
      ${props.size === 'lg' &&
    css`
            padding: ${(props.icon && props.labelVisible) || (props.loading && props.labelVisible)
      ? '12px 20px 12px 16px'
      : '12px 24px'};
            font-size: 16px;
          `};
        `
    : css`
          padding: ${props.size === 'sm' ? '8px' : '12px'};
        `}
  `;

const iconStyles = (props) =>
  css`
    ${props.loading
    ? css`
          ${props.size === 'lg'
      ? css`
                height: 24px;
                width: 24px;
              `
      : css`
                height: 16px;
                width: 16px;
              `}
        `
    : css`
          ${props.size === 'lg'
      ? css`
                height: 24px;
                width: 24px;
              `
      : css`
                height: 16px;
                width: 14px;
              `}
        `}

    ${props.icon &&
  props.labelVisible &&
  css`
      margin-right: ${props.icon && props.size === 'lg' ? '12px' : '8px'};
    `}

    ${props.loading &&
  props.labelVisible &&
  css`
      margin-right: ${props.icon && props.size === 'lg' ? '12px' : '8px'};
    `}
  `;

const spinnerStyles = (props) =>
  css`
    ${!props.labelVisible &&
  css`
      padding: ${(props.loading && props.size === 'sm' && '4px 16px') ||
  (props.loading && props.size === 'md' && '8px 20px') ||
  (props.loading && props.size === 'lg' && '12px 24px')};
    `}
  `;

const MobalyticsButton = styled.button<any>`
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  letter-spacing: 0.25px;
  line-height: 24px;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  filter: brightness(1);
  transition: all 0.1s ease-in;
  ${dynamicStyle};

  &:hover {
    filter: brightness(1.1);
  }

  .spinner {
    img {
      animation: 1.4s linear 0s infinite normal none running rotate;
      background: 0 0;
      border-style: none;
      box-sizing: border-box;
      display: block;
      opacity: 1;
      outline: none;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    ${iconStyles};
  }
`;

const Test = styled.div`
  ${props => props.loading ? }
`;

export { MobalyticsButton };
