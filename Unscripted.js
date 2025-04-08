/// Unscriptted
/// Script Curated by VibingCat

let choice = prompt("1. Google \n2. UNEX \n3. Unbrowser");
let win = window.open("google.com","","width=500, height=500")

if (choice === "1") {
  win.document.write("<embed src='https://www.google.com/webhp?igu=1' style='width: 100%; height: 100%; top: 0; left: 0; position: fixed;'></embed>")
}
if (choice === "2") {
  win.document.write('<script>let x = prompt("html"); document.write(x)</script>')
}
if (choice === "3") {
  win.document.write('<embed src="https://eternal587.github.io/TheCloset/Unbrowser.html" style="width: 100%; height: 100%; top: 0; left: 0; position: fixed;"></embed>')
}

