// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  AWS: {
    region: 'us-west-2',
    identityPoolId: 'us-west-2:297225d3-0cf6-4637-951b-a3796d331a1c',
    userPoolId: 'us-west-2_g416lREjb',
    clientId: '8sqnmt4qjhmct1mp1i83mq6il',
    rekognitionBucket: 'rekognition-pics',
    albumName: "usercontent",
    bucketRegion: 'us-west-2',
    ddbTableName: 'LoginTrailhappyguestdev'

  },

};
