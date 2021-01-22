
import Taro from '@tarojs/taro'

// 根据当前页面获取页面url（带参数）
function getPageUrlWithArgs(currentPage) {
  var url = currentPage.route    //当前页面url
  var options = currentPage.options    //如果要获取url中所带的参数可以查看options
  //拼接url的参数
  var urlWithArgs = '/' + url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }        
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
  return urlWithArgs
}
//获取当前页url (不带参数)
function getCurrentPageUrl(){
  var pages = Taro.getCurrentPages()
  var currentPage = pages[pages.length-1] //获取当前页面的对象
  var url = currentPage.route //当前页面url
  return '/' + url
}
export {
  getPageUrlWithArgs,
  getCurrentPageUrl
}