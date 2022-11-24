import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProperties {
  children?: React.ReactNode;
}

const Title = (props: TitleProperties) => (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </Typography>
  )

export default Title
