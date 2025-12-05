/*
    题目一: 
    有一个变量 obj , 值为 {"a": {"n1": 1, "n2": 3 },  "b": {"n1": 2, "n2": 4},  "c": { "n1": 3,"n2": 5}}
    要求写一个方法遍历 obj, 并将其转换成  {"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}
*/
const obj = { a: { n1: 1, n2: 3 }, b: { n1: 2, n2: 4 }, c: { n1: 3, n2: 5 } };
function transform(outObj){
    const result = {};
    for(const outKey in outObj){
        const innerObj = outObj[outKey];
        for(const innerKey in innerObj){
            if(result[innerKey]===undefined){
                result[innerKey]={}
            }
            result[innerKey][outKey]=outObj[outKey][innerKey];
        } 
    }
    return result;
}
console.log(transform(obj));

// 错误1：for in 作用域补全const声明    错误2：明确变量定义


/*
    题目二: let arr = [1, 2, 3, 5, 7, 8, 10];
    要求写一个方法遍历arr, 当有相邻的数是连续数时, 中间要加上 ~ 输出, 如果相邻的数没有连续数, 直接输出
    例如: [1, 2, 3, 5, 7, 8, 10] 输出: '1~3 5 7~8 10'
*/

let arr = [1, 2, 3, 5, 7, 8, 10];
function printContinue(array){
    let result = [];
    let start = 0, end = 1
    for(;end<array.length;end++){
        const [pre,cur] = [array[end-1] ,array[end]]
        // 1. 多区间
        if(end!==start+1&&cur>pre+1){
            result.push(`${array[start]}~${array[end-1]}`)
            start=end
        }
        // 3. 单区间
        if(end==start+1&&cur>pre+1){
            result.push(`${array[start]}`)
            start=end
        }
        // 最后一个元素
        if(end === array.length-1){
            if(cur===pre+1){
                result.push(`${array[start]}~${array[end]}`)
            }else{
                result.push(`${array[end]}`)
            }
        }
    }
    return result.join(' '); 
}
console.log(printContinue(arr));


/*
    题目三: 实现一个函数 deepMerge(obj1, obj2)，递归合并两个对象的属性（包括嵌套对象）
*/
function deepMerge(obj1, obj2) {
    const result = {};
    // 基本类型合并
    for(const key in obj1){
        if(typeof obj1[key] !== 'object'){
            result[key] = obj1[key]
        }
    }
    for(const key in obj2){
        if(typeof obj2[key] !== 'object'){
            result[key] = obj2[key]
        }
    }
    // 复杂类型合并
    for(const key in obj1){
        if(typeof obj1[key] === 'object'){
            result[key] = deepMerge(obj1[key],obj2[key])
        }
    }

    return result;
}

let a = {
  name: "xiaoming",
  info: {
    address: "ShenZhen",
    age: 15,
  },
};

let b = {
  info: {
    height: 170,
    weight: 100,
  },
  skill: "game",
};

let obj_ = deepMerge(a, b);
console.log(obj_);
