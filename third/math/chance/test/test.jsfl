require(["chance"], function(Chance) {

    // import Chance from 'chance';

    // seed
    // const chance = new Chance('my-seed');
    const chance = new Chance();

// 基础概率判断（需自己写）
    if (chance.bool({ likelihood: 30 })) {
        console.log("30% 概率成功");
    }

// 更多内置功能
    console.log(chance.name());           // "Emma Lopez"
    console.log(chance.email());          // "xexom@example.org"
    console.log(chance.d10());            // 1~10 的整数
    console.log(chance.weighted(["A", "B", "C"], [5, 3, 2])); // 按权重选
});
