
function arrayofdomains(pronoun, adj, noun) {
    let a, b, c, result = [], aux, aux2;
    for (a = 0; a < pronoun.length; a++) {
        for (b = 0; b < adj.length; b++) {
            for (c = 0; c < noun.length; c++) {
                aux = ["", "", "", ".com"]
                console.log(aux);
                aux[0] = pronoun[a];
                aux[1] = adj[b];
                aux[2] = noun[c];
                console.log(aux);
                aux2=aux.join("");
                console.log(aux)
                result.push(aux2);
            }
        }
    }
    return result;
}

let pronouns = document.getElementById("pronouns").value;
let adjectives = document.getElementById("adjetives").value;
let nouns = document.getElementById("nouns").value;


if (document.getElementById("pronouns").value == null) {
    pronouns = ["the", "our"];
}
if (document.getElementById("adjetives").value == null) {
    pronouns = ["great", "big"];
}
if (document.getElementById("nouns").value == null) {
    pronouns = ["jogger", "racoon"];
}


lists=document.getElementsByClassName("form-control").addEventListener("change",arrayofdomains(pronouns, adjetives, nouns));

