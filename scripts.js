
function arrayofdomains(pronoun, adj, noun, domain) {
    let a, b, c, d, result = [], aux, aux2;
    for (a = 0; a < pronoun.length; a++) {
        for (b = 0; b < adj.length; b++) {
            for (c = 0; c < noun.length; c++) {
                for (d = 0; d < domain.length; d++) {
                    aux = ["", "", "", ""];
                    aux[0] = pronoun[a];
                    aux[1] = adj[b];
                    aux[2] = noun[c];
                    aux[3] = domain[d];
                    aux2 = aux.join("");
                    result.push(aux2);
                }
            }
        }
    }
    result;
    let end = "";
    for (x in result) {
        aux = `<li class="list-group-item"> ${result[x]}</li>`;
        end += aux;
    }
    document.getElementById("target").innerHTML = end;
}

let button = document.getElementById("BUTTON");
let pronouns = document.getElementById("pronouns");
let adjectives = document.getElementById("adjetives");
let nouns = document.getElementById("nouns");
let domain = document.getElementById("domains");

button.addEventListener("click", function () {
    let p = pronouns.value.split(",");
    let n = nouns.value.split(",");
    let a = adjectives.value.split(",");
    let d = domain.value.split(",");
    arrayofdomains(p, a, n, d)
})
