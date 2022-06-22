const baseTheme = {
  fonts: {
    mono: 'Avenir,Nunito Sans,Helvetica Neue,sans-serif',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#F0F0F0',
    heading: '#000',
    text: '#2C3E50',
    preFormattedText: '#F5F7F9',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#1B2631',
    heading: '#bdccdb',
    text: '#bdccdb',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { lightTheme, darkTheme };
