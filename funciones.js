function mostrarDatos() {
    var datos = "";
    datos = datos + document.getElementById("grupo").value;
    for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            var grupo = q1[i].value;
        }
    }
    var ma = document.getElementsById("idol");
    for (var i = 0; i < ma.length; i++) {
        if (ma[i].checked) {
            var idol = ma[i].value;
        }
    }
    var q2 = document.getElementsById("femidol");
    for (var i = 0; i < p2.length; i++) {
        if (q2[i].checked) {
            var femidol = p2[i].value;
        }
    }
    var q3 = document.getElementsById("empresa");
    for (var i = 0; i < p3.length; i++) {
        if (q3[i].checked) {
            var empresa = p3[i].value;
        }
    }
    var p4 = document.getElementsById("drama");
    for (var i = 0; i < p4.length; i++) {
        if (q4[i].checked) {
            var drama = p4[i].value;
        }
        var p5 = document.getElementsById("actor");
        for (var i = 0; i < p4.length; i++) {
            if (p5[i].checked) {
                var actor = p4[i].value;
            }
        }

    }