const json1 = require('./a.json')


for(let prop in json1['responses'][0]['textAnnotations']){
    console.log(json1['responses'][0]['textAnnotations'][prop]['description'])
}