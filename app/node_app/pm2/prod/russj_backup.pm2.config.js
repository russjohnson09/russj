let index = __dirname + './../../index.js';

module.exports = {
    apps: [
        {
            name: 'russj_backup_1',
            "script": index,
            min_uptime: "1m",
            max_restarts: "10",
            restart_delay: (1000 * 10), //ten second delay for restarts

            "kill_timeout": (1000 *  60), //ten seconds to complete exiting
            "listen_timeout": 1000 * 60, //five seconds to start up
            // "wait_ready": true,
            env: {
                COMMON_VARIABLE: 'true',
                "NODE_ENV": "prod",
                "RUSSJ_PORT": "8106"

            },
        },
        {
            name: 'russj_backup_2',
            "script": index,
            min_uptime: "1m",
            max_restarts: "10",
            restart_delay: (1000 * 10), //ten second delay for restarts

            "kill_timeout": (1000 *  60), //ten seconds to complete exiting
            "listen_timeout": 1000 * 60, //five seconds to start up
            // "wait_ready": true,
            env: {
                COMMON_VARIABLE: 'true',
                "NODE_ENV": "prod",
                "RUSSJ_PORT": "8107"

            },
        }
    ]

};