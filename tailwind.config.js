module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {content: ''},
            "code::after": {content: ''}
          }
        }
      },
      colors: {
        'blue': '#392aa3',
        'lt-blue': {
          DEFAULT: '#277bba',
          500: '#21689E'
        },
        'gainsboro': '#dce1e9',
        'neutral-red': '#ad9baa',
        'red': '#a13034'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
  