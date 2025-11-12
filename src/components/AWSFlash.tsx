import type { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Temporary simplified AWSFlash placeholder to keep the project typecheckable.
// Reintroduce the full animated implementation after repository typing is stable.
export default function AWSFlash(): ReactElement {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">AWS / Services (placeholder)</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a simplified placeholder for the AWS flash section. Replace with the full component
        once the type issues are resolved.
      </Typography>
    </Box>
  );
}
