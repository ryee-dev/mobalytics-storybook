import { css } from '@emotion/react';
import styled from '@emotion/styled';

const primaryStyles = (props) => css`
  background-color: ${props.loading ? '#986F25' : '#AF8F4D'};
  border: hidden;
`;

const secondaryStyles = (props) => css`
  background-color: ${props.loading ? '#3A3C72' : '#565895'};
  border: hidden;
`;

const tertiaryStyles = (props) => css`
  background-color: ${props.loading ? '#1D1936' : '#211D41'};
  border: 1px solid rgb(56, 47, 102);
`;

const smallStyles = (props) => css`
  font-size: 12px;
  padding: ${(props.labelVisible && props.icon) || (props.labelVisible && props.loading)
    ? '4px 12px 4px 8px'
    : '4px 16px'};
`;

const mediumStyles = (props) => css`
  font-size: 14px;
  padding: ${(props.labelVisible && props.icon) || (props.labelVisible && props.loading)
    ? '8px 16px 8px 12px'
    : '8px 20px'};
`;

const largeStyles = (props) => css`
  font-size: 16px;
  padding: ${(props.labelVisible && props.icon) || (props.labelVisible && props.loading)
    ? '12px 20px 12px 16px'
    : '12px 24px'};
`;

const uniformPaddingStyles = (props) => css`
  padding: ${props.size === 'lg' ? '12px' : '8px'};
`;

const loadingIconStyles = (props) => css`
  margin-right: ${props.size === 'lg' ? '12px' : '8px'};
`;

const iconStyles = (props) => css`
  ${props.size === 'lg'
    ? css`
        height: 24px;
        width: 24px;
      `
    : css`
        height: 16px;
        width: ${props.loading ? '16px' : '14px'};
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

  ${(props) => props.variant === 'primary' && primaryStyles};
  ${(props) => props.variant === 'secondary' && secondaryStyles};
  ${(props) => props.variant === 'tertiary' && tertiaryStyles};
  ${(props) => !props.uniformPadding && props.size === 'sm' && smallStyles};
  ${(props) => !props.uniformPadding && props.size === 'md' && mediumStyles};
  ${(props) => !props.uniformPadding && props.size === 'lg' && largeStyles};
  ${(props) => props.uniformPadding && uniformPaddingStyles};

  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 900;
  letter-spacing: 0.25px;
  line-height: 24px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  display: inline - block;
  text-transform: uppercase;
  filter: brightness(1);
  transition: all 0.1s ease-in;

  &:hover {
    filter: brightness(1.1);
  }

  img {
    ${iconStyles};
    ${(props) => props.labelVisible && loadingIconStyles};
  
    &.spinner {
      animation: 1.4s linear 0s infinite normal none running rotate;
      background: 0;
      border-style: none;
      box-sizing: border-box;
      display: block;
      opacity: 1;
      outline: none;
    }
  }
  
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { MobalyticsButton };
