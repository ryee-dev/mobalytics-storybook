import React from 'react';
import { css } from '@emotion/react';
import { ButtonProps } from '../../types';

import { MobalyticsButton, IconWrapper } from './Button.css';

const iconStyles = (size, loading) => css`
  margin-right: ${loading && size === 'lg' ? '12px' : '8px'};

  ${size === 'md'
    ? `
    height: 24px;
    width: 24px;    
  `
    : undefined}

  ${size !== 'lg'
    ? `
    height: 16px;
    width: 14px;    
  `
    : undefined}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  label,
  icon = false,
  ...props
}) => {
  console.log(size);
  return (
    <MobalyticsButton type="button" variant={variant} size={size} loading={loading} icon={icon} {...props}>
      <IconWrapper>
        {(loading && (
          <img
            css={iconStyles(size, loading)}
            src="https://storage.googleapis.com/cdn.mobalytics.gg/assets/common/icons/spinner.svg"
            alt="loading"
          />
        )) ||
          (icon && (
            <img
              css={iconStyles(size, loading)}
              src="https://fastcdn.mobalytics.gg/assets/common/icons/all-option.svg"
              alt="icon"
            />
          ))}
      </IconWrapper>
      {label}
    </MobalyticsButton>
  );
};
