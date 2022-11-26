let h1 = document.getElementsByTagName("h1")[0]

h1.insertAdjacentHTML("beforebegin", "<div class='test'>beforebegin</div>")
h1.insertAdjacentHTML("beforeend", "<div class='test'>beforeend</div>")
h1.insertAdjacentHTML("afterbegin", "<div class='test'>afterbegin</div>")
h1.insertAdjacentHTML("afterend", "<div class='test'>afterend</div>")

h1.remove()