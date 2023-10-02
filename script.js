var kvadrat = document.getElementById("Obj_Kvadrat");
var treugol = document.getElementById("Obj_Treugol");
var circle = document.getElementById("Obj_Circle");
var butt_kvadrat = document.getElementById("Kvadr");
var butt_treugol = document.getElementById("Treugol");
var butt_circle = document.getElementById("Circle");
var input = document.getElementById("count");
var parent = document.getElementById("Figuri");

let mass_clones = [];
let mass_count = 0;

var left_obj = 0;
var top_obj = 0;
var size_obj = 0;



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

input.addEventListener("input", function() {
    var value = input.value;
    butt_kvadrat.onclick = function () {
        for(let i = 0; i < value; i++)
        {
            var kvadrat_clone = kvadrat.cloneNode(true);
            mass_clones.push(kvadrat_clone);
            document.body.appendChild(kvadrat_clone); 
            left_obj = getRandomArbitrary(10, 70);
            top_obj = getRandomArbitrary(10, 70);
            size_obj = getRandomArbitrary(50, 200);
            kvadrat_clone.style.display = "block";
            mass_clones[mass_count].style.left = left_obj + '%';
            mass_clones[mass_count].style.top = top_obj + '%';
            mass_clones[mass_count].style.width = size_obj + 'px';
            mass_clones[mass_count].style.height = size_obj + 'px';
            mass_count += 1;
            
        }
    }

    butt_treugol.onclick = function () {
        for(let i = 0; i < value; i++)
        {
            var treugol_clone = treugol.cloneNode(true);
            mass_clones.push(treugol_clone);
            document.body.appendChild(treugol_clone);
            left_obj = getRandomArbitrary(10, 70);
            top_obj = getRandomArbitrary(10, 70);
            size_obj = getRandomArbitrary(30, 150);
            treugol_clone.style.display = "block";
            mass_clones[mass_count].style.left = left_obj + '%';
            mass_clones[mass_count].style.top = top_obj + '%';
            mass_clones[mass_count].style.borderRight = size_obj + 'px solid transparent';
            mass_clones[mass_count].style.borderLeft= size_obj + 'px solid transparent';
            mass_clones[mass_count].style.borderBottom = size_obj + 'px solid blue';
            mass_count += 1;
        }
    }

    butt_circle.onclick = function () {
        for(let i = 0; i < value; i++)
        {
            var circle_clone = circle.cloneNode(true);
            mass_clones.push(circle_clone);
            document.body.appendChild(circle_clone);
            left_obj = getRandomArbitrary(10, 70);
            top_obj = getRandomArbitrary(10, 70);
            size_obj = getRandomArbitrary(50, 200);
            circle_clone.style.display = "block";
            mass_clones[mass_count].style.left = left_obj + '%';
            mass_clones[mass_count].style.top = top_obj + '%';
            mass_clones[mass_count].style.width = size_obj + 'px';
            mass_clones[mass_count].style.height = size_obj + 'px';
            mass_count += 1;
        }
    }
    
  });


document.addEventListener("click", function(event) {
    for (let i = 0; i < mass_count; i++) {
        if ((mass_clones[i].contains(event.target)) ) {
            if (mass_clones[i].style.borderBottomColor == "blue"){mass_clones[i].style.borderBottomColor = 'yellow'; }
            else {mass_clones[i].style.backgroundColor = 'yellow'; }
        }
    }
});

document.addEventListener("dblclick", function(event) {
    for (let i = 0; i < mass_count; i++) {
        if ((mass_clones[i].contains(event.target)) ) {
            mass_clones[i].style.display = 'none';
        }
    }
});
