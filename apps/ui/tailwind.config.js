/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#161616',
      darks: {
        100: '#151621',
        200: '#000000',
      },
      gray: {
        100: 'rgba(255, 255, 255, 0.08)', // transparent white
        200: '#f7f8f8', // off white
        300: '#b4bcd0', // primary text
        400: '#858699', // gray
        500: '#222326', // gray dark
      },
      'primary-lighter': '#3D3D3D',
      secondary: '#7B61EF',
      white: '#fff',
      black: '#232325',
      info: '#C4C4C4',
      error: "#7676a7"
    },
    backgroundImage: {
      'glass-gradient':
        'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
      'glow-lines':
        'linear-gradient(var(--direction), #9d9bf2 0.43%, #7877c6 14.11%, rgba(120, 119, 198, 0) 62.95%)',
      'hero-glow':
        'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
      'hero-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15),transparent)',
      'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120, 119, 198, 0.3), transparent)',
      'primary-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      'radial-faded':
        'radial-gradient(circle at bottom center, var(--color), transparent 70%)',
      'base-gradient':
        'url(./base-linear-gradient-bg.png)'
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
      slideDownAndFade: {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: 'translateX(-2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },
    animation: {
      overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
    extend: {},
  },
  plugins: [],
};
