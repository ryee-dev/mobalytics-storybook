/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import React, { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import { TabsProps } from '../../types';
import { TabsGroup, TabItem } from './Tabs.css';

const selectedTabStyles: any = css`
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2px;
    background: rgb(203, 172, 111);
  }
`;

export const Tabs: React.FC<TabsProps> = ({
  variant = 'primary',
  icons = false,
  disabled = false,
  ...props
}) => {
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    // @ts-ignore
    <TabsGroup variant={variant} icons={icons} disabled={disabled} {...props}>
      <TabItem
        className={cx({ [selectedTabStyles]: selectedTab === 1 && !disabled })}
        onClick={() => setSelectedTab(1)}
      >
        {icons ? (
          <img
            src="https://fastcdn.mobalytics.gg/assets/lol/images/gpi-icon/normal/fighting.svg"
            alt="fighting"
          />
        ) : (
          <span>Tab Item A</span>
        )}
      </TabItem>
      <TabItem
        className={cx({ [selectedTabStyles]: selectedTab === 2 && !disabled })}
        onClick={() => setSelectedTab(2)}
      >
        {icons ? (
          <img
            src="https://fastcdn.mobalytics.gg/assets/lol/images/gpi-icon/normal/farming.svg"
            alt="farming"
          />
        ) : (
          <span>Tab Item B</span>
        )}
      </TabItem>
      <TabItem
        className={cx({ [selectedTabStyles]: selectedTab === 3 && !disabled })}
        onClick={() => setSelectedTab(3)}
      >
        {icons ? (
          <img
            src="https://fastcdn.mobalytics.gg/assets/lol/images/gpi-icon/normal/vision.svg"
            alt="vision"
          />
        ) : (
          <span>Tab Item C</span>
        )}
      </TabItem>
    </TabsGroup>
  );
};
