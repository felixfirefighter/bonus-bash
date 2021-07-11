
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['pcZHqzSd8NPTDF4K7QSuRP'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  