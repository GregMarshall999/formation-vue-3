module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  testMatch: [
    '**/tests/**/*.spec.[jt]s?(x)',
  ],
}
