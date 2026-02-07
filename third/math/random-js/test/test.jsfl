require(["random-js"], function(random) {
//     const {MersenneTwister19937,integer} =random;
//
// // create a Mersenne Twister-19937 that is auto-seeded based on time and other random values
//     const engine = MersenneTwister19937.autoSeed();
// // create a distribution that will consistently produce integers within inclusive range [0, 99].
//     const distribution = integer(0, 99);
// // generate a number that is guaranteed to be within [0, 99] without any particular bias.
//     function generateNaturalLessThan100() {
//         return distribution(engine);
//     }
//
//     console.log(generateNaturalLessThan100());

    const {MersenneTwister19937,integer} =random;
    const { Random } = random;
    // import { Random } from './random-js';

    const engine = MersenneTwister19937.seed("my-seed");

    const rng = new Random(engine); // 使用 Alea 算法（默认）

    console.log(rng.integer(0, 30));      // 0~30（含）
    console.log(rng.bool());              // true/false
    console.log(rng.pick(["A", "B", "C"])); // 随机选一个

});
