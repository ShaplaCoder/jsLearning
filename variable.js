console.log("This Is Console");

var a = 10;
var con  = console.log;
{
    let a = "shiahab"
    con(a)
}
const b = "const can be changed"
con(b)
con("The Type Of  Var a Is " + typeof(a) + " While It Is 10");

a = "Shihab"
con("The Type Of  Var a Is", typeof(a), "While It Is Shihab");