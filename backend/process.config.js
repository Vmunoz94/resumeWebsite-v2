module.exports = {
  apps: [
    {
      name: 'gateway',
      script: './gateway.js',
      watch: true,
    },
    {
      name: 'download',
      script: './api/downloadResume.js',
      watch: true,
    },
    {
      name: 'send',
      script: './api/sendEmail.js',
      watch: true,
    }
  ]
}