const numbers = document.querySelectorAll(".number")
const dropArea = document.querySelector(".dropArea")
for (var number of numbers) {
    number.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("thisnumber", this.id)
    })
}
dropArea.addEventListener("dragover", function (e) {
    e.preventDefault()
})
dropArea.addEventListener("drop", function(e){
    const id=e.dataTransfer.getData("thisnumber")
    const element=document.getElementById(id)
    this.appendChild(element)
})