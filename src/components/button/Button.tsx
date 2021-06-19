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
      loading={loading}
      variant={variant}
      size={size}
      icon={icon}
      disabled={loading}
      labelVisible={labelVisible}
      uniformPadding={uniformPadding}
      {...props}
    >
      {loading ? (
        <span className="spinner">
          <img
            src="https://storage.googleapis.com/cdn.mobalytics.gg/assets/common/icons/spinner.svg"
            alt="loading"
          />
          {labelVisible && label}
        </span>
      ) : (
        <span>
          {icon && <img src="https://fastcdn.mobalytics.gg/assets/common/icons/all-option.svg" alt="icon" />}
          {labelVisible && label}
        </span>
      )}
    </MobalyticsButton>
  );
};
