var glob = require("glob")
var fs = require("fs")
 
// options is optional
glob("./music/**/*.*", {}, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  console.log(files)
  let result = files.map(item => {
    let arr = item.split('/')
    return {
      name: arr[3],
      artist: "专辑-"+arr[2],
      url: item,
      cover: './cover.jpg',
    }
  })
  fs.writeFileSync('./list.js', "var list = " + JSON.stringify(result))

})