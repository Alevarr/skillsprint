import { Global } from "@emotion/react";
export default function () {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Visitor TT2 BRK';
        font-style: normal;
        font-weight: 400;
        src: local('Visitor TT2 BRK'), url('https://fonts.cdnfonts.com/s/7338/visitor2.woff') format('woff');
    }
    @font-face {
        font-family: 'Visitor TT1 BRK';
        font-style: normal;
        font-weight: 400;
        src: local('Visitor TT1 BRK'), url('https://fonts.cdnfonts.com/s/7338/visitor1.woff') format('woff');
    }
    /* cyrillic-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcg72j00.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKew72j00.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcw72j00.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfA72j00.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* latin-ext */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcQ72j00.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
    `}
    />
  );
}