import { AppTheme } from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
