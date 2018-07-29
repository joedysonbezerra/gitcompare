import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body {
  background: #0BB4C1;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smothing: antialiased !important;

}
`;
