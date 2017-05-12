module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'mtg-league-api',
      script    : 'dist/server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      watch: [ "dist/server" ]
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'orwel',
      host : 'vps',
      ref  : 'origin/master',
      repo : 'https://github.com/AurelieV/mtg-league.git',
      path : '/home/orwel/mtg-league',
      'post-deploy' : 'yarn install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
