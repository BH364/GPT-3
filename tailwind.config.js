module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)',
        'gradient-text':'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
         

      },
      boxShadow :{
        'custom-shadow' : '0px 4px 4px 0px #00000040',
      },

      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    
      keyframes: {
        'scale-up-center': {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      colors: {
        customBlue: '#031B34',
      },
      screens: {
        'max-1050' :{'max':'1050px'},
        'max-700': {'max': '700px'},
        'max-550' : { 'max': '550px'}, 
        'max-850': {'max': '850px'}, 
        'max-650' : {'max':'650px'},
        'max-350' :{'max':'350px'},
         'max-990':{'max':'990px'},
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

