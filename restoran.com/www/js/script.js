    function prikaz() {
        var ime = document.getElementById('ime').value;
        var datum = document.getElementById('datum').value;
        var vreme = document.getElementById('vreme').value;
        var osobe = document.getElementById('osobe').value;

                var poruka = document.getElementById('poruka').innerHTML = "Vasa rezervacija: " + ime + " / " + datum + " / " + vreme + " / " + osobe + " osobe";
    }