/// Unscriptted
/// Script Curated by VibingCat

let choice = prompt("1. Google \n2. UNEX \n3. Unbrowser \n4. The Closet");
let win = window.open("google.com","","width=500, height=500")

if (choice === "1") {
  win.document.write("<embed src='https://www.google.com/webhp?igu=1' style='width: 100%; height: 100%; top: 0; left: 0; position: fixed;'></embed>")
}
if (choice === "2") {
  win.document.write('<body style="background-color: rgb(35, 35, 135, 1)"></body> <button onclick="newUnexTab()">Create Injected UNEX Tab</button> <script>function newUnexTab() { let x = prompt("Insert Code"); let y = window.open("google.com","","width=500, height=500"); y.document.write(x); }</script>')
}
if (choice === "3") {
  win.document.write('<embed src="https://eternal587.github.io/TheCloset/Unbrowser.html" style="width: 100%; height: 100%; top: 0; left: 0; position: fixed;"></embed>')
}
if (choice === "4") {
  win.document.write('<embed src="https://eternal587.github.io/TheCloset/Index.html" style="width: 100%; height: 100%; top: 0; left: 0; position: fixed;"></embed>')
}
