import type { Theme } from '@mui/material/styles';
import 'styled-components';

// Make styled-components' DefaultTheme compatible with MUI Theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
