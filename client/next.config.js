module.exports = {
  publicRuntimeConfig: {
    NEXT_API_URL: process.env.NEXT_API_URL    
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/auth/logout',
  //       destination: '/logout',
  //       permanent: true,
  //     },
  //   ]
  // },
};
