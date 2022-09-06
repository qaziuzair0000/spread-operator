// // =================destructre=================
// let a, b, rest;
// [a, b] = [20, 30];
// console.log(a);
// // output: 20
// console.log(b);
// //  output: 30
// [a, b, ...rest] = [20,30 ,40 ,80 ,100 ];
// console.log(rest);



// // =========nested arrey=============
// var favMovies = Array ( );
// favMovies[0] = 'muhammad'
// favMovies[1] = 'uzair'
// favMovies[2] = Array ("Matrix", "Matix 1", "Inter")
// favMovies[3] = Array ("abc", "xyz", ["hello", "counter"])
// console.log(favMovies[3]);


// // -------------nested object----------------
const user = {
    id: 109,
    email: 'abc2@gmail.com',
    personalInfo: {
        name: 'uzair',
        address: {
            line1: 'pti',
            line2: 'Abcd',
            city: 'Karachi',
            state: 'Xyz'
        }
    }
}
const abc = {...user.personalInfo.address};

console.log(abc);