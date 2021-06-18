import { css } from '@emotion/react';
import styled from '@emotion/styled';

const dynamicStyle = (props) =>
  css`
    padding: ${(props.size === 'sm' && '4px 16px') ||
    (props.size === 'md' && '8px 20px') ||
    (props.size === 'lg' && '12px 24px')};
    font-size: ${(props.size === 'sm' && '12px') ||
    (props.size === 'md' && '14px') ||
    (props.size === 'lg' && '16px')};
    background-color: ${(props.variant === 'primary' && '#af8f4d') ||
    (props.variant === 'secondary' && '#565895') ||
    (props.variant === 'tertiary' && '#211d41') ||
    (props.variant === 'primary' && props.loading && '#986f25') ||
    (props.variant === 'secondary' && props.loading && '#3a3c72') ||
    (props.variant === 'tertiary' && props.loading && '#1d1936')};
    // box-shadow: ${props.variant && 'inset 0 0 0 1px rgba(0, 0, 0, 0.15)'};
  `;

const buttonStyles = (props) =>
  css`
    padding: ${(props.loading && props.size === 'sm' && '4px 12px 4px 8px') ||
    (props.loading && props.size === 'md' && '8px 16px 8px 12px') ||
    (props.loading && props.size === 'lg' && '12px 20px 12px 16px')};
  `;

const iconStyles = (props) =>
  css`
    height: ${props.size === 'lg' ? '24px' : '16px'};
    width: ${props.size === 'lg' ? '24px' : '14px'};
  `;

const spinnerStyles = (props) =>
  css`
    padding: ${(props.loading && props.size === 'sm' && '4px 16px') ||
    (props.loading && props.size === 'md' && '8px 20px') ||
    (props.loading && props.size === 'lg' && '12px 24px')};
  `;

const MobalyticsButton = styled.button<any>`
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
  ${buttonStyles};

  &:hover {
    filter: brightness(1.1);
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    ${spinnerStyles};

    img {
      animation: 1.4s linear 0s infinite normal none running rotate;
      background: 0 0;
      border-style: none;
      box-sizing: border-box;
      display: block;
      opacity: 1;
      outline: none;
      ${iconStyles};
    }
  }

  .icon > img {
    ${iconStyles};
    margin-right: ${(props) => (props.size === 'lg' ? '12px' : '8px')};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export { MobalyticsButton };
