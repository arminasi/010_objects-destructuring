# Lesson_010_objects

### [Get name, country and jod using destructuring](https://github.com/arminasi/010_objects-destructuring/blob/master/1_get_info_desstruct/get_using_destruc.js)
```
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

### [Concate data](https://github.com/arminasi/010_objects-destructuring/blob/master/2_concate/conscate.js)
```
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### [Take args in function](https://github.com/arminasi/010_objects-destructuring/blob/master/3_take_args_func/take_args.js)
```
function sum() {
return args.reduce((sum, current) => {
        return sum + current;
    });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

### [Pass args in function](https://github.com/arminasi/010_objects-destructuring/blob/master/4_pass_args_func/pass_args.js)
```
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

### [Swap values using destructuring](https://github.com/arminasi/010_objects-destructuring/blob/master/5_swap_vals_destruct/swap_using_destruct.js)
```
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

### [Election counter](https://github.com/arminasi/010_objects-destructuring/blob/master/6_upvote_downvote/up_down.js)
```
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

### [50-30-20 percent](https://github.com/arminasi/010_objects-destructuring/blob/master/7_50_30_20/50_30_20.js)
```
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

### [Facts about city](https://github.com/arminasi/010_objects-destructuring/blob/master/8_facts_about_city/facts_info.js)
```
cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
cityFacts({
name: "Tokyo",
population: "13,929,286",
continent: "Asia",
}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```

### [Object methodsimplementation](https://github.com/arminasi/010_objects-destructuring/tree/master/obj_methods_impl)

```
Write object.keys, object.values and object.entries methods using for..in
```

### [Math operations](https://github.com/arminasi/010_objects-destructuring/blob/master/print_sum_inf_count_num/inf_count_sum.js)

```
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```
