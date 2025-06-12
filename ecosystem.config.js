module.exports = {
    apps: [{
      name: 'eclat-du-nord.fr',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_SITE_URL: 'https://eclat-du-nord.fr',
        NODE_TLS_REJECT_UNAUTHORIZED: '1',
        NODE_OPTIONS: '--tls-min-v1.2',
      },
      error_file: '/var/log/pm2/eclat-du-nord-error.log',
      out_file: '/var/log/pm2/eclat-du-nord-out.log',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 3000,
      watch: false,
      autorestart: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      time: true
    }]
  }