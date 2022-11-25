const cl = console.log
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
cl(id1)

cl(id1.matches(".class"))
cl(id1.matches(".box"))
cl(sp1.closest(".box"))
cl(sp1.closest("#sp1"))
cl(sp1.closest("#sp2"))
cl(id1.contains(sp1))
cl(sp1.contains(id1))