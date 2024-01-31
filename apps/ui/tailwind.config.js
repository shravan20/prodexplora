/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#161616',
      'primary-lighter': '#3D3D3D',
      secondary: '#7B61EF',
      white: '#fff',
      black: '#232325',
      info: '#4A4A4D'
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
    },
    extend: {},
  },
  plugins: [],
};
