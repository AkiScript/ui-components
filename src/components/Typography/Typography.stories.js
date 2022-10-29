
import React from 'react';

import Typography from './Typography';

export default {
  component: Typography,
  title: 'Typography',
};

const Template = args => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Typography example with default args'
};

export const Heading = Template.bind({});
Heading.args = {
    inline: true,
    type: 'h1',
    fontWeight: '900',
    children: 'H1 Type Typography Example With Custom Font Weight'
};
