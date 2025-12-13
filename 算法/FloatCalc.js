// 实现浮点计算
// 题目描述
// 基本要求：用JS实现一个可用于浮点计算（避免浮点精度问题）
// 背景：JavaScript 中的浮点数运算结果并不准确

class FloatCalc{
    max_multiple = 1
    add(a,b){
        this.maxMultiple(a,b)
        return(a*this.max_multiple+b*this.max_multiple)/this.max_multiple
    }
    subtract(a,b){
        this.maxMultiple(a,b)
        return(a*this.max_multiple-b*this.max_multiple)/this.max_multiple
    }
    multiply(a,b){
        this.maxMultiple(a,b)
        return(a*this.max_multiple*b*this.max_multiple)/this.max_multiple/this.max_multiple
    }
    divide(a,b){
        this.maxMultiple(a,b)
        return((a*this.max_multiple)/(b*this.max_multiple))
    }
    maxMultiple(a,b){
        this.max_multiple = 1;
        const [str_a,str_b] = [String(a),String(b)]
        const len_a = str_a.split(".")[1].length
        const len_b = str_b.split(".")[1].length
        
        let max = Math.max(len_a,len_b)
        this.max_multiple=Math.pow(10,max)
    }
}

console.log(0.1 + 0.2); // 输出为 0.30000000000000004
console.log(2.3 + 2.4); // 输出为 4.699999999999999
console.log(2.13+2.43); // 输出为 4.5600000000000005

// 要求实现
const my_number = new FloatCalc();
console.log("------------------");

console.log(my_number.add(0.1, 0.2)); // 0.3
console.log(my_number.add(2.3, 2.4)); // 4.7
console.log(my_number.add(2.13, 2.43)); // 4.56

console.log(my_number.subtract(0.3, 0.1)); // 0.2
console.log(my_number.multiply(0.1, 0.2)); // 0.02
console.log(my_number.divide(0.3, 0.1)); // 3

