var glob = require("glob")
var fs = require("fs")
 
glob("./music/**/*.*", {}, function (er, files) {
  let result = []
  files.forEach(item => {
    let fileInfo = fs.statSync(item)
    if(fileInfo.size/(1024*1024) < 20) {    // 小于20M
      let arr = item.split('/')
      result.push({
        name: arr[3],
        artist: "专辑-"+arr[2],
        url: 'https://cdn.jsdelivr.net/gh/goldsubmarine/lizhi@master' + item.slice(1),
        cover: 'https://cdn.jsdelivr.net/gh/goldsubmarine/lizhi@master/cover.png',
      })
    }
  })
  fs.writeFileSync('./list.js', "var list = " + JSON.stringify(result))

})