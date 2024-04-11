// -----cachorro
function show_pan() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("pandora").style.visibility = "visible";
}
function some_pan() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("pandora").style.visibility = "hidden";
}

function show_paç() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("paçoca").style.visibility = "visible";
}
function some_paç() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("paçoca").style.visibility = "hidden";
}

function show_don() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("donatello").style.visibility = "visible";
}
function some_don() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("donatello").style.visibility = "hidden";
}

function show_dan() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("dandara").style.visibility = "visible";
}
function some_dan() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("dandara").style.visibility = "hidden";
}

function show_apo() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("apollo").style.visibility = "visible";
}
function some_apo() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("apollo").style.visibility = "hidden";
}

function show_sir() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("sirius").style.visibility = "visible";
}
function some_sir() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("sirius").style.visibility = "hidden";
}

function show_luk() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("luke").style.visibility = "visible";
}
function some_luk() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("luke").style.visibility = "hidden";
}

function show_reg() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("reginaldo").style.visibility = "visible";
}
function some_reg() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("reginaldo").style.visibility = "hidden";
}

function show_tob() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("toby").style.visibility = "visible";
}
function some_tob() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("toby").style.visibility = "hidden";
}
// ----gato
function show_ael() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("aelin").style.visibility = "visible";
}
function some_ael() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("aelin").style.visibility = "hidden";
}

function show_ala() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("alan").style.visibility = "visible";
}
function some_ala() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("alan").style.visibility = "hidden";
}

function show_fai() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("faisca").style.visibility = "visible";
}
function some_fai() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("faisca").style.visibility = "hidden";
}

function show_garf() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("garfield").style.visibility = "visible";
}
function some_garf() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("garfield").style.visibility = "hidden";
}

function show_the() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("theodore").style.visibility = "visible";
}
function some_the() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("theodore").style.visibility = "hidden";
}

function show_mic() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("michelin").style.visibility = "visible";
}
function some_mic() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("michelin").style.visibility = "hidden";
}

function show_dom() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("dom_pixote").style.visibility = "visible";
}
function some_dom() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("dom_pixote").style.visibility = "hidden";
}

function show_jud() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("judo").style.visibility = "visible";
}
function some_jud() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("judo").style.visibility = "hidden";
}

function show_gar() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("garcia").style.visibility = "visible";
}
function some_gar() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("garcia").style.visibility = "hidden";
}
//-----------------------------

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 100)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

//---------FIM DO CARROSSEL (NAO TA FUNCIONANDO NAO FAÇO IDEIA DO PORQUE)

//----------REGIS HEADER

function show_sus() {
  document.getElementById("menusus").style.visibility = "visible";
}
function some() {
  document.getElementById("menusus").style.visibility = "hidden";
}
// -----cachorro
function show_pan() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("pandora").style.visibility = "visible";
}
function some_pan() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("pandora").style.visibility = "hidden";
}

function show_paç() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("paçoca").style.visibility = "visible";
}
function some_paç() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("paçoca").style.visibility = "hidden";
}

function show_don() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("donatello").style.visibility = "visible";
}
function some_don() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("donatello").style.visibility = "hidden";
}

function show_dan() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("dandara").style.visibility = "visible";
}
function some_dan() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("dandara").style.visibility = "hidden";
}

function show_apo() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("apollo").style.visibility = "visible";
}
function some_apo() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("apollo").style.visibility = "hidden";
}

function show_sir() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("sirius").style.visibility = "visible";
}
function some_sir() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("sirius").style.visibility = "hidden";
}

function show_luk() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("luke").style.visibility = "visible";
}
function some_luk() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("luke").style.visibility = "hidden";
}

function show_reg() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("reginaldo").style.visibility = "visible";
}
function some_reg() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("reginaldo").style.visibility = "hidden";
}

function show_tob() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("toby").style.visibility = "visible";
}
function some_tob() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("toby").style.visibility = "hidden";
}
// ----gato
function show_ael() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("aelin").style.visibility = "visible";
}
function some_ael() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("aelin").style.visibility = "hidden";
}

function show_ala() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("alan").style.visibility = "visible";
}
function some_ala() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("alan").style.visibility = "hidden";
}

function show_fai() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("faisca").style.visibility = "visible";
}
function some_fai() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("faisca").style.visibility = "hidden";
}

function show_garf() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("garfield").style.visibility = "visible";
}
function some_garf() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("garfield").style.visibility = "hidden";
}

function show_the() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("theodore").style.visibility = "visible";
}
function some_the() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("theodore").style.visibility = "hidden";
}

function show_mic() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("michelin").style.visibility = "visible";
}
function some_mic() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("michelin").style.visibility = "hidden";
}

function show_dom() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("dom_pixote").style.visibility = "visible";
}
function some_dom() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("dom_pixote").style.visibility = "hidden";
}

function show_jud() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("judo").style.visibility = "visible";
}
function some_jud() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("judo").style.visibility = "hidden";
}

function show_gar() {
  document.getElementById("tudo").style.visibility = "visible";
  document.getElementById("garcia").style.visibility = "visible";
}
function some_gar() {
  document.getElementById("tudo").style.visibility = "hidden";
  document.getElementById("garcia").style.visibility = "hidden";
}
function show_sus() {
  document.getElementById("menusus").style.visibility = "visible";
}
function some() {
  document.getElementById("menusus").style.visibility = "hidden";
}
//---------------------
function show_nav2() {
  document.getElementById("nav2").style.visibility = "visible";
}
function some_nav2() {
  document.getElementById("nav2").style.visibility = "hidden";
}
//-------------REGIS HEADER FIM