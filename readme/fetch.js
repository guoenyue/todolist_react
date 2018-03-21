// fetch API
// //参考地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

// fetch 是一种基于新web标准的新型数据请求接口，同老的XMLHttpRequest有相似也有一些差别

// 使用fetch，它提供了两个辅助对象：Headers和Request
// 通过Headers我们可以定义头部信息，通过设置Request我们可以对fetch进行配置
// Headers的方法API:
//     Headers.append()
//     给现有的header添加一个值, 或者添加一个未存在的header并赋值.
//     Headers.delete()
//     从Headers对象中删除指定header.
//     Headers.entries()
//     以 迭代器 的形式返回Headers对象中所有的键值对.
//     Headers.get()
//     从Headers对象中返回指定header的第一个值.
//     Headers.getAll()
//     以数组的形式从Headers对象中返回指定header的全部值.
//     Headers.has()
//     以布尔值的形式从Headers对象中返回是否存在指定的header.
//     Headers.keys()
//     以迭代器的形式返回Headers对象中所有存在的header名.
//     Headers.set()
//     替换现有的header的值, 或者添加一个未存在的header并赋值.
//     Headers.values()
//     以迭代器的形式返回Headers对象中所有存在的header的值.

// 使用方法如下：
// let headers = new Headers();
// headers.append('Content-Type', 'text/xml');

// let fetchConfig = {headers,method:"get",mode:"cors",cache:false};

// let myRequest = new Request(url,fetchConfig);

// fetch(myRequest).then(response=>response.json()).then(res=>{//do}).catch(catchErr);

// //注意此处的response。并不是实际的返回值，而是返回状态对象，可以通过其api将真实的返回值通过then函数获取到，即第二个then方法
// 中拿到的才是真实的网络请求返回值。response有一些自己的方法来来决定处理返回值的类型。方法如下：

//     Response.clone()
//     创建一个Response对象的克隆
//     Response.error()
//     返回一个绑定了网络错误的新的Response对象
//     Response.redirect()
//     用另一个URL创建一个新的 response.

//     Response 实现了 Body, 所以以下方法同样可用:
//     Body.arrayBuffer()
//     读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次） ,并返回一个被解析为ArrayBuffer格式的promise对象
//     Body.blob()
//     读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次） ,并返回一个被解析为Blob格式的promise对象
//     Body.formData()
//     读取Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次） ,并返回一个被解析为FormData格式的promise对象
//     Body.json()
//     读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次） ,并返回一个被解析为JSON格式的promise对象
//     Body.text()
//     读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次） ,并返回一个被解析为USVString格式的promise对象
//     解析完整的 Response ,并返回一个USVString对象的promise。
