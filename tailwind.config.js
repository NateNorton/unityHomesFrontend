/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      antiqueWhite: '#F4F1DE',
      teracotta: '#E07A5F',
      deepSlate: '#3D405B',
      mutedSage: '#81B29A',
      darkest: '#181816',
      lightest: '#FCFCF8',
      teracottaDark: '#9C5542',
      teracottaLight: '#E9A18F',
      teracottaComp: '#5FC5E0',
      slateComp: '#5B583D',
      slateDark: '#2A2C3F',
      slateLight: '#77798C',
      sageComp: '#B28199',
      sageDark: '#5A7C6B',
      sageLight: '#A6C9B8',
      antiqueWhiteComp: '#DEE1F4',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#181816',
            h1: {
              fontFamily: ['Bad Script', 'cursive'],
            },
            h2: {
              fontFamily: ['Lato', 'sans-serif'],
            },
            h3: {
              fontFamily: ['Lato', 'sans-serif'],
            },
            h4: {
              fontFamily: ['Lato', 'sans-serif'],
            },
            h5: {
              fontFamily: ['Lato', 'sans-serif'],
            },
            h6: {
              fontFamily: ['Lato', 'sans-serif'],
            },
            p: {
              fontFamily: ['Roboto', 'sans-serif'],
            },
            a: {
              fontFamily: ['Roboto', 'sans-serif'],
            },
            ul: {
              fontFamily: ['Roboto', 'sans-serif'],
            },
            ol: {
              fontFamily: ['Roboto', 'sans-serif'],
            },
            blockquote: {
              fontFamily: ['Roboto', 'sans-serif'],
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
