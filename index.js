let count = 0

function incerement(){
    count++
    document.getElementById("count-el").innerHTML = count
}
function save(){
    let countStr = count + " - "
  let saveEl = document.getElementById("save-el")
  saveEl.textContent += countStr
  count = 0
  document.getElementById("count-el").innerHTML = count

}
