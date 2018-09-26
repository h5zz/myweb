//local
module.exports = {
    apps:[
        {
            name: 'myweb',
            script: 'app.js',
            cwd: './',
            watch: true,
            exec_mode: 'cluster',
            instances: 'max',
            max_memory_restart: '50M',
            ignore_watch:[
                'node_modules',
                'logs'
            ],
            error_file: './logs/app-err.log',
            out_file: './logs/app-out.log',
            env:{
                //
                NODE_ENV: 'development'
            },
            env_prod:{
                NODE_ENV: 'production'
            }
        }
    ],
    deploy:{
        prod:{
            user:'root',
            host:['47.94.19.240'],
            port:'80',
            path:'./myweb',
            repo:'git@github.com:h5zz/myweb.git',
            ref:'origin/master',
            ssh_options:'StrictHostKeyChecking=no',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env prod',
            env:{
                NODE_ENV:'production'
            }
        }
    }
}