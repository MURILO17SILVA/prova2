import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'tvmaze',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  env: {
    API_URL: 'https://api.tvmaze.com/search/shows',
  },
})
