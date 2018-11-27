// @flow

const fs = require('fs')
const env = require('./env.json')
const jsonFormat = require('json-format')
const jsonConfig = {
  type: 'space',
  size: 2
}
const path = `./env.json`
if (fs.existsSync(path)) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }
    console.log('This is my enviornment', data)
    env.server = 'api_server_development'
    console.log('env', env)
    const out = jsonFormat(env, jsonConfig)
    fs.writeFileSync(path, out)
  })
  //
}
