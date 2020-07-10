import React from 'react';
import { css } from 'styled-components';

// Elements
import { Box } from '../../elements/Box';
import { Text } from '../../elements/Text';
import { Img } from '../../elements/Img';

type CardProps = {
  image: string;
  title?: string;
  description: string;
};

export default ({ image, title, description, ...props }: CardProps) => {
  return (
    <Box styles={extend.wrapper} {...props}>
      <Box styles={extend.img}>
        <Img src={image} alt='card-image' />
      </Box>
      <Box styles={extend.text}>
        {title && <Text styles={extend.title}>{title}</Text>}
        <Text styles={extend.description}>{description}</Text>
      </Box>
    </Box>
  );
};

const colors = {
  darkgray: '#242424',
  gray: '#717171',
};

const extend = {
  wrapper: css`
    border-radius: 16px;
    max-height: min-content;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `,
  img: css`
    object-fit: cover;

    & > img {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  `,
  text: css`
    padding: 0 18px 12px 18px;
  `,
  title: css`
    font-weight: 700;
    color: ${colors.darkgray};
    padding: 4px 0;
  `,
  description: css`
    font-size: 13px;
    font-weight: 300;
    color: ${colors.gray};
    line-height: 1.4;
  `,
};
