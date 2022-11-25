let countriesAsiaAtoB = ["Aganistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei"]

const c = console.log

c(countriesAsiaAtoB);
c(countriesAsiaAtoB.join(", "));
c(typeof(countriesAsiaAtoB.join(", ")));
c(countriesAsiaAtoB.toString())
c(typeof(countriesAsiaAtoB.toString()))
c(countriesAsiaAtoB.pop(), countriesAsiaAtoB)
c(countriesAsiaAtoB.push("Brunei"), countriesAsiaAtoB)
c(countriesAsiaAtoB.shift(), countriesAsiaAtoB)
c(countriesAsiaAtoB.unshift("Aganistan "), countriesAsiaAtoB)