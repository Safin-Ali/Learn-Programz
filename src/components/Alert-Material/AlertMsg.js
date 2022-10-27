import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertMsg({errTxt}) {
  return (
    <Stack sx={{ width: '60%', position:'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)'}} spacing={2}>
      <Alert severity="error">{errTxt}</Alert>
    </Stack>
  );
}
