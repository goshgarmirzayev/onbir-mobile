// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ENDPOINTS: {
    NEWS: 'http://onbir.tv:8080/rest/getAllModifiedPosts',
    LIVE: 'http://onbir.tv:8080/rest/getAllMatches',
    ICMAL: 'http://onbir.tv:8080/rest/getHighlights',
    LIVE_SINGLE: 'http://onbir.tv:8080/rest/getMatchData/:id'
  }
};

