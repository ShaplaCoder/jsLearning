const c = console.log

let countriesAsiaAtoB = ["Aganistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei","China"]

for (let index = 0; index < countriesAsiaAtoB.length; index++) {
    c(countriesAsiaAtoB[index])
}

countriesAsiaAtoB.forEach((element) => {
   console.log(element)
});

for (const key in countriesAsiaAtoB) {
    c(countriesAsiaAtoB[key])
}

let html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>

<body>
    <div class="main">
        <div id="1st">I am a div</div>
        <p class="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ratione vero, soluta, aliquam quis dignissimos eveniet voluptate adipisci eius iure voluptatum reiciendis exercitationem! Aperiam culpa natus, nam reprehenderit omnis ex.</p>
        <p id="para1">Shihab is  a young coder</p>
    </div>
</body>
<!---<script src="variable.js"></script>--->
<!---<script src="Primitives and Objects.js"></script>--->
<!---<script src="chapter1.js"></script>--->
<!---<script src="operators&expression.js" .js"></script>--->
<!---<script src="chapter2.js" .js"></script>--->
<!---<script src="switch.js"></script>--->
<!---<script src="chapter2.js"></script>--->
<!---<script src="loops.js"></script>--->
<!---<script src="function.js"></script>--->
<!---<script src="chapter3.js"></script>--->
<!---<script src="string.js"></script>--->
<!---<script src="string mathods.js"></script>--->
<!---<script src="string training.js"></script>--->
<!---<script src="arrays.js"></script>--->
<!---<script src="arrayMathods.js"></script>--->
<!---<script src="arrayMathods2.js"></script>--->
<script src="loops_with_arryas.js"></script>

</html>`

c(html)
c(html)

c(Array.from(countriesAsiaAtoB))
c(Array.from(html))

for (const item of countriesAsiaAtoB) {
    c(item)
}

for (const iterator of html) {
    c(iterator)
}