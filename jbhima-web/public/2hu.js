//make a module that finds a random image of a Touhou Project character from safebooru and display it on an html document with a div with the class "touhou" and a img tag with the class "touhou-img"
import booru from 'booru';
const booru = require('booru')

booru.search('touhou', { limit: 1, random: true }, function (err, posts) {
  if (err) {
    console.error(err)
    return
  }
  console.log(posts[0].file_url)
  document.querySelector('.touhou').innerHTML = `<img class="touhou-img" src="${posts[0].file_url}">`
})