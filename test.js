const fs = require('fs');
const path =require('path')

const safeParseJSON = (json, defaultValue) => {
  let result
  try {
    result = JSON.parse(json)
  } catch (e) {}

  if (!result && defaultValue !== undefined) {
    return defaultValue
  }
  return result
}



const dataStream = fs.readFileSync(path.join(__dirname,'./dist/webpack.assets.json'))
const res = safeParseJSON(dataStream.toString(), {})


