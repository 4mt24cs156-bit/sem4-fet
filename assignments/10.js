// 🔹 Event Handler (inline)
function showSelection() {
    let value = document.getElementById("dropdown").value;
    document.getElementById("result1").innerHTML = "Selected: " + value;
}

// 🔹 Event Listener (modern way)
document.getElementById("btn").addEventListener("click", function() {
    let list = document.getElementById("listbox");
    let selected = [];

    for (let i = 0; i < list.options.length; i++) {
        if (list.options[i].selected) {
            selected.push(list.options[i].value);
        }
    }

    document.getElementById("result2").innerHTML = 
        "Selected: " + selected.join(", ");
});
