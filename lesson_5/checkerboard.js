var chessFigures = {
    "A1": {
        figure: "R",
        color: "white"
    },
    "B1": {
        figure: "N",
        color: "white"
    },
    "C1": {
        figure: "B",
        color: "white"
    },
    "D1": {
        figure: "K",
        color: "white"
    },
    "E1": {
        figure: "Q",
        color: "white"
    },
    "F1": {
        figure: "B",
        color: "white"
    },
    "G1" : {
        figure: "N",
        color: "white"
    },
    "H1": {
        figure: "R",
        color: "white"
    },
    "A2": {
        figure: "P",
        color: "white"
    },
    "B2": {
        figure: "P",
        color: "white"
    },
    "C2": {
        figure: "P",
        color: "white"
    },
    "D2": {
        figure: "P",
        color: "white"
    },
    "E2": {
        figure: "P",
        color: "white"
    },
    "F2": {
        figure: "P",
        color: "white"
    },
    "G2": {
        figure: "P",
        color: "white"
    },
    "H2": {
        figure: "P",
        color: "white"
    },
    "A7": {
        figure: "P",
        color: "black"
    },
    "B7": {
        figure: "P",
        color: "black"
    },
    "C7": {
        figure: "P",
        color: "black"
    },
    "D7": {
        figure: "P",
        color: "black"
    },
    "E7": {
        figure: "P",
        color: "black"
    },
    "F7": {
        figure: "P",
        color: "black"
    },
    "G7": {
        figure: "P",
        color: "black"
    },
    "H7": {
        figure: "P",
        color: "black"
    },
    "A8": {
        figure: "R",
        color: "black"
    },
    "B8": {
        figure: "N",
        color: "black"
    },
    "C8": {
        figure: "B",
        color: "black"
    },
    "D8": {
        figure: "K",
        color: "black"
    },
    "E8": {
        figure: "Q",
        color: "black"
    },
    "F8": {
        figure: "B",
        color: "black"
    },
    "G8" : {
        figure: "N",
        color: "black"
    },
    "H8": {
        figure: "R",
        color: "black"
    }   
}


function checkerboard() {
    if (document.getElementById("checkerboard") !== null) {
        document.getElementById("checkerboard").remove();
    }

    var table = document.createElement("table");
    table.id = "checkerboard";
    var abc = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var empty = document.createElement("td");
    var abcRow = document.createElement("tr")
    abcRow.appendChild(empty)
    

    for (s of abc) {
        var symbol = document.createElement("td")
        symbol.innerText = s;
        abcRow.appendChild(symbol)
    }
    table.appendChild(abcRow)
    
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement("tr");
        var number = document.createElement("td");
        number.innerText = i + 1;
        number.className = "number"
        tr.appendChild(number);

        for (var j = 0; j < 8; j++) {
            var td = document.createElement("td");
            td.id = table.rows[0].cells[j + 1].innerText + (i + 1);
            if (td.id in chessFigures) {
                td.innerText = chessFigures[td.id].figure;
                td.style.color = chessFigures[td.id].color;
            } 
            if (i%2 == j%2) {
                td.className = "check white";
            } else {
                td.className = "check black";
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    var div = document.getElementById("checker")
    div.appendChild(table)
}