import { css } from '@emotion/react';
import styled from '@emotion/styled';

const defaultStyles = (props) =>
  css`
    padding: ${(props.size === 'sm' ? '4px 16px' : undefined) ||
    (props.size === 'md' ? '8px 20px' : undefined) ||
    (props.size === 'lg' ? '12px 24px' : undefined)};
  `;

const buttonStyles = (props) =>
  css`
    padding: ${(props.size === 'sm' && !props.icon ? '4px 16px' : undefined) ||
    (props.size === 'md' && !props.icon ? '8px 20px' : undefined) ||
    (props.size === 'lg' && !props.icon ? '12px 24px' : undefined) ||
    (props.size === 'sm' && props.icon ? '4px 12px 4px 8px' : undefined) ||
    (props.size === 'md' && props.icon ? '8px 16px 8px 12px' : undefined) ||
    (props.size === 'lg' && props.icon ? '12px 20px 12px 16px' : undefined)};

    font-size: ${(props.size === 'sm' ? '12px' : undefined) ||
    (props.size === 'md' ? '14px' : undefined) ||
    (props.size === 'lg' ? '16px' : undefined)};

    background-color: ${(props.variant === 'primary' ? '#af8f4d' : undefined) ||
    (props.variant === 'secondary' ? '#565895' : undefined) ||
    (props.variant === 'tertiary' ? '#211d41' : undefined) ||
    (props.variant === 'primary' && props.loading ? '#986f25' : undefined) ||
    (props.variant === 'secondary' && props.loading ? '#3a3c72' : undefined) ||
    (props.variant === 'tertiary' && props.loading ? '#1d1936' : undefined)};

    border: ${props.variant === 'tertiary' ? '1px solid rgb(56, 47, 102)' : undefined};
  `;

const withSpinner = (props) =>
  css`
    padding: ${(props.loading && props.size === 'sm' ? '4px 16px' : undefined) ||
    (props.loading && props.size === 'md' ? '8px 20px' : undefined) ||
    (props.loading && props.size === 'lg' ? '12px 24px' : undefined)};
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
  ${buttonStyles};

  &:hover {
    filter: brightness(1.1);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${defaultStyles};

  img {
    &.spinner {
      animation: 1.4s linear 0s infinite normal none running rotate;
      background: 0 0;
      border-style: none;
      box-sizing: border-box;
      display: block;
      opacity: 1;
      outline: none;
      ${withSpinner};
    }
  }
`;

export { MobalyticsButton, IconWrapper, withSpinner, defaultStyles };
