import React from 'react';
import { ButtonProps } from '../../types';
import { MobalyticsButton } from './Button.css';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  label,
  labelVisible = true,
  icon = false,
  uniformPadding = false,
  ...props
}) => {
  return (
    <MobalyticsButton
      type="button"
      disabled={loading}
      variant={variant}
      size={size}
      labelVisible={labelVisible}
      uniformPadding={uniformPadding}
      icon={icon}
      loading={loading}
      {...props}
    >
      <span className="content-wrapper">
        {icon ? (
          <img src="https://fastcdn.mobalytics.gg/assets/common/icons/all-option.svg" alt="icon" />
        ) : (
          loading && (
            <img
              className="spinner"
              src="https://storage.googleapis.com/cdn.mobalytics.gg/assets/common/icons/spinner.svg"
              alt="loading"
            />
          )
        )}
        {labelVisible && label}
      </span>
    </MobalyticsButton>
  );
};
