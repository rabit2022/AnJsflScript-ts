
class B extends Array{
    get width(): number {
        return 20;
    }
    toString(): string {
        return "class B";
    }
}


const b1 = new B();

b1.push("kkkkk")
console.log(b1.toString());
console.log(b1.width);