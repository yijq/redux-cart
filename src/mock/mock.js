
let Mock = require('mockjs')
Mock.mock(/http:\/\/localhost:3000\/api\/goodsinfo\.json?q=1234/,function(options){
    
    console.log(`hahaha===============`,options)
    alert(`hijack`)
    // return JSON.stringify({ 
        return [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'productName|+1': 'product'+1,
            'productId|+1': 1,
            'productPrice': 100,
            'inventry': 10
        }]
    // })
})