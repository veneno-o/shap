// 实现数组的flat
// 实现数组的flat方法，支持传入递归深度
// 代码模板：
function flat(arr, depth=100) {
    let result = []
    // 实现代码    
    if(depth === 0) return arr;
    for(const item of arr){
        if(!Array.isArray(item)){
            result.push(item);
        }else{
            
            result = [...result, ...item]
        }
    } 
    return flat(result,depth-1)
}
// 要求输出：
console.log(flat([1,2,3,[4],[5,[6,7,[8],9,10],11],12])) // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(flat([1,2,3,[4],[5,[6,7,[8],9,10],11],12], 1)) // [1,2,3,4,5,[6,7,[8],9,10],11,12]