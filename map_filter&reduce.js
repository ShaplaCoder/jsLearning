const c = console.log
let countriesAsiaAtoB = ["Aganistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei"]

// map

let new_arry_by_map = countriesAsiaAtoB.map ((value, index, array) => {
    c(value, index, array)
    return value + 1
})

c(new_arry_by_map)

//map end
//filter

let nums = [1,2,3,4,5,6,7,8,9,10];

let filter = nums.filter((value)=>{
    return value <= 5
})

c(nums)
c(filter)

let reduce = nums.reduce((value1, value2)=>{
    return value1 + value2
})

c(reduce)
c(typeof reduce)