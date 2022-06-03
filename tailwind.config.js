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
        'lt-blue': '#277bba',
        'gainsboro': '#dce1e9',
        'neutral-red': '#ad9baa',
        'red': '#b31e23'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
  