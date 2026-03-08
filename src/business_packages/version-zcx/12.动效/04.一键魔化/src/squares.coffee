# CoffeeScript - 一行代码完成映射
#numbers = [1, 2, 3, 4]
#squares = (num * num for num in numbers)
#
#console.log(squares)

numbers = [1, 2, 3, 4]
# 读起来像英语："n 的平方，对于 numbers 中的每个 n，如果 n 是偶数"
squares = (n * n for n in numbers when n % 2 == 0)

exports.squares = squares
