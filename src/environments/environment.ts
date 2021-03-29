// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const API_URL = 'http://onbir.tv:8080/mobile/';
export const environment = {
  production: false,
  ENDPOINTS: {
    NEWS: API_URL + 'getAllPosts',
    NEWS_SINGLE: API_URL + 'single-post/:id',
    LIVE: API_URL + 'getAllMatches',
    ICMAL: API_URL + 'getAllIcmallar',
    LIVE_SINGLE: API_URL + 'getMatchData/:id',
    STANDING: API_URL + 'getStandings'
  }
};

