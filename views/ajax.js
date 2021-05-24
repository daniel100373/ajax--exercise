document.querySelector("#button1").addEventListener("click", function (e) {
    e.preventDefault();
});
document.querySelector("#button2").addEventListener("click", function (e) {
    e.preventDefault();
});
document.querySelector("#button3").addEventListener("click", function (e) {
    e.preventDefault();
});
document.querySelector("#button4").addEventListener("click", function (e) {
    e.preventDefault();
});

document.querySelector("#button5").addEventListener("click", function (e) {
    e.preventDefault();
});
let showbutton = document.querySelector("#button4");
showbutton.addEventListener("click", (e) => {
    $.ajax({
        url: "/all",
        type: "GET",
        datatype: "json",
        cache: "false",
        success: function (response) {
            let show = document.querySelector("div.showwstu");
            let array4 = Object.keys(response);
            let array41 = Object.values(response);
            for (let i = 0; i < array4.length; i++) {
                let p1 = document.createElement("p");
                p1.innerHTML = array4[i] + ":" + array41[i];
                show.appendChild(p1);
            }
        },
    });
});

let searchButton = document.querySelector("#button1");
searchButton.addEventListener("click", (e) => {
    $.ajax({
        url: "/all",
        type: "GET",
        datatype: "json",
        cache: "false",
        success: function (data) {
            let hi = document.querySelector("div.hi");
            let h1 = document.createElement("h1");
            let idin = $("#id").val();
            if (data[idin] === undefined) {
                h1.innerHTML = "Student NotFounded";
            } else {
                h1.innerHTML = "HELLOW," + data[idin];
            }
            hi.appendChild(h1);
        },
    });
});

let updateButton = document.querySelector("#button2");
updateButton.addEventListener("click", (e) => {
    let data = { id: $("#addId").val(), name: $("#addName").val() };
    $.ajax({
        url: "/add",
        type: "POST",
        data: data,
        datatype: "json",
        cache: "false",
        success: function (response) {
            let add = document.querySelector("div.add");
            let h1 = document.createElement("h1");
            h1.innerHTML = response;
            add.appendChild(h1);
        },
    });
});

let deleteButton = document.querySelector("#button3");
deleteButton.addEventListener("click", (e) => {
    let data = { id: $("#stuId").val() };
    $.ajax({
        url: "/delete",
        type: "POST",
        data: data,
        datatype: "json",
        cache: "false",
        success: function (response) {
            let del = document.querySelector("div.del");
            let h1 = document.createElement("h1");
            h1.innerHTML = response;
            del.appendChild(h1);
        },
    });
});
