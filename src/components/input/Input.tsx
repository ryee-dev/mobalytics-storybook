/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import React from 'react';
import { InputProps } from '../../types';
import { InputContainer } from './Input.css';

export const Input: React.FC<InputProps> = ({
  variant = 'primary',
  icon = false,
  disabled = false,
  placeholder = 'Search...',
  ...props
}) => {
  return (
    <InputContainer
      // @ts-ignore
      variant={variant}
      icon={icon}
      disabled={disabled}
      {...props}
    >
      <span>{placeholder}</span>
    </InputContainer>
  );
};
