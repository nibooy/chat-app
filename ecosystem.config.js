module.exports = {
    apps:[{
        name: 'chat-app',
        script: './chat.js',
        instances: 0,
        exec_mode: 'cluster'
    }]
}