// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  AWS: {
    region: 'us-west-2',
    identityPoolId: 'us-west-2:1923ed5f-b76c-4daa-8598-13011aff165e',
    userPoolId: 'us-west-2_969JpsBxu',
    clientId: '29ahu54vur39lmubibr0r5bkvd',
    rekognitionBucket: 'rekognition-pics',
    albumName: "usercontent",
    bucketRegion: 'us-west-2',
    ddbTableName: 'LoginTrailhappyguestdev'

  },

};
