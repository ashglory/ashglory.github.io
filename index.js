/* variable declaration */
/* costs */
var pCost = 200;
var pCostStack = 50;
var cost1 = 0;
var cost2 = 0;
var cost3 = 0;
var total = pCost + cost1 + cost2 + cost3;

/* others */
var ability = document.getElementById("aType").value;
var tP, tS;

/* hides and shows tutorial text */
function hideTutorial() {
  var tut = document.getElementById("hidetut");
  if (tut.style.display === "none") {
    tut.style.display = "block";
  } else {
    tut.style.display = "none";
  }
}

/* hides and shows helpful links */
function hideLinks() {
  var links = document.getElementById("hidelinks");
  if (links.style.display === "none") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}

/* hides and shows changelog */
function hideChanges() {
  var change = document.getElementById("hidechanges");
  if (change.style.display === "none") {
    change.style.display = "block";
  } else {
    change.style.display = "none";
  }
}

/* reset page to default */
function resetBuilder() {

  /* allow Build button to be selected again */
  document.getElementById("builder").disabled = false;

  /* reset Ability Type dropdown */
  document.getElementById("aType").disabled = false;
  document.getElementById("aType").selectedIndex = 0;

  /* clear text explaining Passive/CM choice */
  document.getElementById("typetext").innerHTML = "";

  /* reset Primary Technique dropdown */
  document.getElementById("tTypeP").diabled = true;
  document.getElementById("tTypeP").selectedIndex = 0;

  /* reset Secondary Technique dropdown */
  document.getElementById("tTypeS").disabled = true;
  document.getElementById("tTypeS").selectedIndex = 0;

  /* reset Skill dropdown */
  document.getElementById("skill").disabled = true;
  document.getElementById("skill").selectedIndex = 0;

  /* disable perk selection buttons */
  document.getElementById("perkbutton").disabled = true;
  document.getElementById("clearbutton").disabled = true;

  /* unselect Perk Boxes */
  document.getElementById("p1").classList.remove("activePerk");
  document.getElementById("p2").classList.remove("activePerk");
  document.getElementById("p3").classList.remove("activePerk");

  /* reset Perk Box text */
  document.getElementById("p1").innerHTML = "PERK #1";
  document.getElementById("p2").innerHTML = "PERK #2";
  document.getElementById("p3").innerHTML = "PERK #3";

  /* make Perk Boxes unclickable until ability type is chosen again */
  document.getElementById("p1").removeEventListener("click", selectPerk1, false);
  document.getElementById("p2").removeEventListener("click", selectPerk2, false);
  document.getElementById("p3").removeEventListener("click", selectPerk3, false);

  /* removes classes */
  $(".perksearch").remove();
  $(".primary").remove();
  $(".special").remove();
  $(".secondary").remove();
  $(".active").remove();
  $(".activePerk").remove();
  $(".noException").remove();
  $(".three").remove();
  $(".four").remove();
  $(".half").remove();

  /* hides perk boxes */
  var x, i;
  x = document.querySelectorAll(".perkbox");
  for (i = 0; i < x.length; i++) {
    x[i].style.visibility = "hidden";
  }

  /* hide perk cost text and reset cost to default */
  document.getElementById("perkcost").innerHTML = "";
  pCost = 200;
  cost1 = 0;
  cost2 = 0;
  cost3 = 0;
  total = pCost + cost1 + cost2 + cost3;
}

/* select an ability to make and lets user choose techniques */
function loadBuilder() {

  /* prevents Build button from being clicked again */
  document.getElementById("builder").disabled = true;
  ability = document.getElementById("aType").value;

  /* error text if nothing is selected */
  if (ability === "nothing") {
    document.getElementById("typetext").innerHTML = "You have selected " + ability + ", please select either a Passive or CM to build.";
  };

  /* diable changing the ability type and enable technique and skill selection */
  if (ability !== "nothing") {
    /* disable changing ability type */
    document.getElementById("aType").disabled = true;

    /* enable picking techniques and skills */
    document.getElementById("tTypeP").disabled = false;
    document.getElementById("tTypeS").disabled = false;
    document.getElementById("skill").disabled = false;

    document.getElementById("perkbutton").disabled = false;
    document.getElementById("clearbutton").disabled = false;
  };

  /* show 2 perk boxes if passive, 3 for CM */
  if (ability === "passive") {
    var x, i;
    x = document.querySelectorAll(".perkbox");
    for (i = 0; i < 2; i++) {
      x[i].style.visibility = "visible";
      x[i].style.display = "block";
    }
    document.getElementById("typetext").innerHTML = "You are building a " + $("#aType option:selected").text() + ". You may select up to two perks.";
  } else if (ability === "cm") {
    var x, i;
    x = document.querySelectorAll(".perkbox");
    for (i = 0; i < 3; i++) {
      x[i].style.visibility = "visible";
      x[i].style.display = "block";
    }
    document.getElementById("typetext").innerHTML = "You are building a " + $("#aType option:selected").text() + ". You may select up to three perks.";
  }

  /* display perk cost text */
  document.getElementById("perkcost").innerHTML = "Your " + $("#aType option:selected").text() + " costs " + String(total).bold() + " dirham.";
}

/* highlights and unhighlights Perk 1 when clicked */
function selectPerk1() {
  if (document.getElementById("p1").classList.contains("activePerk")) {
    document.getElementById("p1").classList.remove("activePerk");
  } else {
    document.getElementById("p1").classList.add("activePerk");
    document.getElementById("p2").classList.remove("activePerk");
    document.getElementById("p3").classList.remove("activePerk");
  }

  /* if a perk on the right list has been clicked */
  if (document.querySelectorAll(".active").length !== 0) {
    copyPerk();

    /* remove active class */
    document.getElementById("p1").classList.remove("activePerk");
    var x, i;
    x = document.querySelectorAll(".perksearch");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }
}

/* highlights and unhighlights Perk 2 when clicked */
function selectPerk2() {
  if (document.getElementById("p2").classList.contains("activePerk")) {
    document.getElementById("p2").classList.remove("activePerk");
  } else {
    document.getElementById("p2").classList.add("activePerk");
    document.getElementById("p1").classList.remove("activePerk");
    document.getElementById("p3").classList.remove("activePerk");
  }

  /* if a perk on the right list has been clicked */
  if (document.querySelectorAll(".active").length !== 0) {
    copyPerk();

    /* remove active class */
    document.getElementById("p2").classList.remove("activePerk");
    var x, i;
    x = document.querySelectorAll(".perksearch");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }
}

/* higlights and unhighlights Perk 3 when clicked */
function selectPerk3() {
  if (document.getElementById("p3").classList.contains("activePerk")) {
    document.getElementById("p3").classList.remove("activePerk");
  } else {
    document.getElementById("p3").classList.add("activePerk");
    document.getElementById("p2").classList.remove("activePerk");
    document.getElementById("p1").classList.remove("activePerk");
  }

  /* if a perk on the right list has been clicked */
  if (document.querySelectorAll(".active").length !== 0) {
    copyPerk();

    /* remove active class */
    document.getElementById("p3").classList.remove("activePerk");
    var x, i;
    x = document.querySelectorAll(".perksearch");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }
}

/* get list of perks matching ability type and technique type */
function getPerks() {

  /* disables dropdowns to change techniques and skills */
  document.getElementById("perkbutton").disabled = true;
  document.getElementById("tTypeP").disabled = true;
  document.getElementById("tTypeS").disabled = true;
  document.getElementById("skill").disabled = true;

  /* lists different perks based on primary tech */
  primarySearch();

  /* lists different perks based on secondary tech */
  secondarySearch();

  /* allows perk boxes to be clicked */
  document.getElementById("p1").addEventListener("click", selectPerk1, false);
  document.getElementById("p2").addEventListener("click", selectPerk2, false);
  document.getElementById("p3").addEventListener("click", selectPerk3, false);
}

/* returns primary tech search */
function primarySearch() {
  tP = document.getElementById("tTypeP").value.slice(-1);

  if (tP === "O" && ability === "passive") {
    addPerks(perkPassiveO);
  } else if (tP === "D" && ability === "passive") {
    addPerks(perkPassiveD);
  } else if (tP === "S" && ability === "passive") {
    addPerks(perkPassiveS);
  } else if (tP === "C" && ability === "passive") {
    addPerks(perkPassiveC);
  } else if (tP === "O" && ability === "cm") {
    addPerks(perkCMO);
  } else if (tP === "D" && ability === "cm") {
    addPerks(perkCMD);
  } else if (tP === "S" && ability === "cm") {
    addPerks(perkCMS);
  } else if (tP === "C" && ability === "cm") {
    addPerks(perkCMC);
  }
}

/* returns secondary tech search */
function secondarySearch() {
  tS = document.getElementById("tTypeS").value.slice(-1);

  if (tS === "O" && ability === "passive") {
    addPerks(perkPassiveOs);
  } else if (tS === "D" && ability === "passive") {
    addPerks(perkPassiveDs);
  } else if (tS === "S" && ability === "passive") {
    addPerks(perkPassiveSs);
  } else if (tS === "C" && ability === "passive") {
    addPerks(perkPassiveCs);
  } else if (tS === "O" && ability === "cm") {
    addPerks(perkCMOs);
  } else if (tS === "D" && ability === "cm") {
    addPerks(perkCMDs);
  } else if (tS === "S" && ability === "cm") {
    addPerks(perkCMSs);
  } else if (tS === "C" && ability === "cm") {
    addPerks(perkCMCs);
  }
}

/* perks will appear in boxes on the right side of the builder */
function addPerks(array) {
  var toAdd = document.createDocumentFragment();
  ability = document.getElementById("aType").value;

  var i;
  for (i = 0; i < array.length; i++) {
    perksSearch = document.createElement("div");
    perksSearch.classList.add("perksearch");
    perksSearch.innerHTML = array[i].description + "<br><strong>Cost:</strong> " + array[i].cost + "dh";
    /* does the perk use primary or secondary tech? */
    if (array[i].secondary === 1) {
      perksSearch.classList.add("secondary");
    } else {
      perksSearch.classList.add("primary");
    }
    /* only selectable as secondary */
    if (array[i].secOnly === 1 && perksSearch.classList.contains("primary")) {
      perksSearch.style.display = "none";
    }
    /* is the perk a special perk? */
    if (array[i].isSpecial === 1) {
      perksSearch.classList.add("special");
    }

    /* passive perk with explicit exceptions to halving */
    if (array[i].exception === 0) {
      perksSearch.classList.add("noException");
    }

    if (array[i].three === 1) {
      perksSearch.classList.add("three");
    }

    if (array[i].four === 1) {
      perksSearch.classList.add("four");
    }

    if (array[i].half === 1) {
      perksSearch.classList.add("half");
    }

    perksSearch.addEventListener("click", choosePerk, false);
    toAdd.appendChild(perksSearch);
  }
  document.getElementById("rightbox").appendChild(toAdd);

  /* halve numerical bonuses in passives */
  if (ability === "passive") {
    var x, i;
    x = document.getElementsByClassName("perksearch noException");
    for (i = 0; i < x.length; i++) {
      /* DO REPLACEMENT HERE */
      var origText = x[i].innerHTML.toString();
      if (x[i].classList.contains("three") || x[i].classList.contains("four")) {
        origText = origText.replace("3*", "1.5*");
        origText = origText.replace("4*", "2*");
      } else if (x[i].classList.contains("half")) {
      origText = origText.replace("/2", "/4");
    } else {
      origText = origText.replace("] ", "]/2 ");
      origText = origText.replace("].", "]/2.");
    }
      x[i].innerHTML = origText;
    }
  }

  /* text replace with skill/variables */
  var primaryTech = document.getElementById("tTypeP");
  var secondaryTech = document.getElementById("tTypeS");
  var skillName = document.getElementById("skill");
  var n, i;
  n = document.getElementsByClassName("perksearch");
  for(i = 0; i < n.length; i++) {
    var origText = n[i].innerHTML.toString();
    origText = origText.replace(/SKILL/g, skillName.value);
    if (n[i].classList.contains("primary")) {
      origText = origText.replace(/SUPPORTIVE OR DEFENSIVE TECHNIQUE/g, primaryTech.options[primaryTech.selectedIndex].text);
      origText = origText.replace(/SUPPORTIVE TECHNIQUE/g, primaryTech.options[primaryTech.selectedIndex].text);
      origText = origText.replace(/OFFENSIVE TECHNIQUE/g, primaryTech.options[primaryTech.selectedIndex].text);
      origText = origText.replace(/DEFENSIVE TECHNIQUE/g, primaryTech.options[primaryTech.selectedIndex].text);
      origText = origText.replace(/TECHNIQUE/g, primaryTech.options[primaryTech.selectedIndex].text);
    }
    if (n[i].classList.contains("secondary")) {
      origText = origText.replace(/SUPPORTIVE OR DEFENSIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/SECONDARY SUPPORTIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/SECONDARY OFFENSIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/SECONDARY DEFENSIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/SECONDARY TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/SUPPORTIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/OFFENSIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/DEFENSIVE TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
      origText = origText.replace(/TECHNIQUE/g, secondaryTech.options[secondaryTech.selectedIndex].text);
    }
    n[i].innerHTML = origText;
  }
}

/* when a searched perk is clicked */
function choosePerk() {

  /* highlight and unhighlight clicked perk */
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    var x, i;
    x = document.querySelectorAll(".perksearch");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
    this.classList.add("active");
  }

  /* if perk box is selected, copy active perk to perk box */
  if (document.querySelectorAll(".activePerk").length !== 0 ) {
    copyPerk();

    /* unselect all active perks after copying */
    document.getElementById("p1").classList.remove("activePerk");
    document.getElementById("p2").classList.remove("activePerk");
    document.getElementById("p3").classList.remove("activePerk");
    this.classList.remove("active");
  }
}

/* copy perk and update cost */
function copyPerk() {

  document.querySelector(".activePerk").classList.remove("special");

  /* copy perk text */
  document.querySelector(".activePerk").innerHTML = document.querySelector(".active").innerHTML;

  /* hide other perk boxes if special perk was selected */
  if (document.querySelector(".active").classList.contains("special")) {
    if (document.getElementById("p1").innerHTML = document.querySelector(".active").innerHTML) {
      document.getElementById("p1").classList.add("special");

      document.getElementById("p2").style.display = "none";
      document.getElementById("p2").innerHTML = "PERK #2";

      document.getElementById("p3").style.display = "none";
      document.getElementById("p3").innerHTML = "PERK #3";
    } else if (document.getElementById("p2").innerHTML = document.querySelector(".active").innerHTML) {
      document.getElementById("p2").classList.add("special");

      document.getElementById("p1").style.display = "none";
      document.getElementById("p1").innerHTML = "PERK #1";

      document.getElementById("p3").style.display = "none";
      document.getElementById("p3").innerHTML = "PERK #3";
    } else if (document.getElementById("p3").innerHTML = document.querySelector(".active").innerHTML) {
      document.getElementById("p3").classList.add("special");

      document.getElementById("p1").style.display = "none";
      document.getElementById("p1").innerHTML = "PERK #1";

      document.getElementById("p2").style.display = "none";
      document.getElementById("p2").innerHTML = "PERK #2";
    }
  }

  if (document.getElementById("p1").classList.contains("special") || document.getElementById("p2").classList.contains("special") || document.getElementById("p3").classList.contains("special")) {
  } else if (ability === "cm") {
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("p3").style.display = "block";
  } else if (ability === "passive") {
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    if (document.getElementById("p1").innerHTML === document.getElementById("p2").innerHTML) {
      document.getElementById("p3").style.display = "block";
    } else {
    document.getElementById("p3").style.display = "none";
  }}

  /* perk cost update */
  if (document.getElementById("p1").innerHTML === "PERK #1") {
    cost1 = 0;
  } else {
    cost1 = Number(document.getElementById("p1").innerHTML.slice(-5,-2));
  }

  if (document.getElementById("p2").innerHTML === "PERK #2") {
    cost2 = 0;
  } else {
    cost2 = Number(document.getElementById("p2").innerHTML.slice(-5,-2));
  }

  if (document.getElementById("p3").innerHTML === "PERK #3") {
    cost3 = 0;
  } else {
    cost3 = Number(document.getElementById("p3").innerHTML.slice(-5,-2));
  }

  /* hide and show passive stacking cost if it applies */
  if (document.getElementById("p1").innerHTML === document.getElementById("p2").innerHTML && ability === "passive") {
    cost3 = pCostStack;
    document.getElementById("p3").style.visibility = "visible";
    document.getElementById("p3").style.display = "block";
    document.getElementById("p3").removeEventListener("click", selectPerk3, false);
    document.getElementById("p3").innerHTML = "Stacking Perk Surcharge <br><strong>Cost:</strong> " + cost3 + "dh";
  } else if (ability === "passive" && document.getElementById("p1").innerHTML !== document.getElementById("p2").innerHTML) {
    document.getElementById("p3").style.visibility = "hidden";
  }

  /* update cost */
  if (document.getElementById("p1").classList.contains("special") || document.getElementById("p2").classList.contains("special") || document.getElementById("p3").classList.contains("special")) {
    pCost = 0;
  } else {
    pCost = 200;
  }
    total = pCost + cost1 + cost2 + cost3;
  document.getElementById("perkcost").innerHTML = "Your " + $("#aType option:selected").text() + " costs " + String(total).bold() + " dirham.";
}

function clearPerk() {

  /* reset perk1 text to default if perk1 is selected */
  if (document.getElementById("p1").classList.contains("activePerk")) {
    document.getElementById("p1").innerHTML = "PERK #1";
    cost1 = 0;
    document.getElementById("p1").classList.remove("special");
    /* if perk 1 is same as perk 2 and in a passive, remove the surcharge */
    if (document.getElementById("p3").innerHTML === "Stacking Perk Surcharge <br><strong>Cost:</strong> " + cost3 + "dh" && document.getElementById("p1").innerHTML !== document.getElementById("p2").innerHTML) {
      document.getElementById("p3").innerHTML === "PERK #3";
      cost3 = 0;
      document.getElementById("p3").style.visibility = "hidden";
    }
    if (ability === "passive") {
      document.getElementById("p2").style.display = "block";
      document.getElementById("p1").style.display = "block";
    }
    if (ability === "cm") {
      document.getElementById("p2").style.display = "block";
      document.getElementById("p3").style.display = "block";
    }
    /* unselect perk */
    document.getElementById("p1").classList.remove("activePerk");
    /* do the same for perk 2 */
  } else if (document.getElementById("p2").classList.contains("activePerk")) {
      document.getElementById("p2").innerHTML = "PERK #2";
      cost2 = 0;
      document.getElementById("p1").classList.remove("special");
      if (document.getElementById("p3").innerHTML === "Stacking Perk Surcharge <br><strong>Cost:</strong> " + cost3 + "dh" && document.getElementById("p1").innerHTML !== p2.innerHTML) {
        document.getElementById("p3".innerHTML = "PERK #3");
        cost3 = 0;
        document.getElementById("p3").style.visibility = "hidden";
      }
      if (ability === "passive") {
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "block";
      }
      if (ability === "cm") {
        document.getElementById("p1").style.display = "block";
        document.getElementById("p3").style.display = "block";
      }
      document.getElementById("p2").classList.remove("activePerk");
    /* do the same for perk 3 */
    } else if (document.getElementById("p3").classList.contains("activePerk")) {
      document.getElementById("p3").innerHTML = "PERK #3";
      cost3 = 0;
      document.getElementById("p1").classList.remove("special");
      document.getElementById("p3").classList.remove("activePerk");
      document.getElementById("p1").style.display = "block";
      document.getElementById("p2").style.display = "block";
      document.getElementById("p3").style.display = "block";
    }

    /* update costs */
    pCost = 200;
    total = pCost + cost1 + cost2 + cost3;
    document.getElementById("perkcost").innerHTML = "Your " + $("#aType option:selected").text() + " costs " + String(total).bold() + " dirham.";
}

/* i don't understand this but it's the jquery to make a technique unselectable if it is already picked in one list */
$("select").on("change", function() {
  $('option').prop('disabled', false);
  $('select').each(function() {
    var val = this.value;
    $('select').not(this).find('option').filter(function() {
      return this.value === val;
    }).prop('disabled', true);
  });
}).change();

/* all perks */
var perklist = [];

var perk1 = { description: "Grant yourself or an ally advantage on SKILL checks a number of times equal to your [SKILL] per thread.", cost: "000", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 1, saves: 0, accuracy: 0, advantage: 1, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk2 = { description: "Grant yourself or an ally a damage bonus equal to [SKILL].", cost: "025", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk3 = { description: "Determine one of the following about an enemy creature: current hit points, armor class, ability score of your choice, highest technique rank, resistances, or immunities.", cost: "025", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk4 = { description: "Determine a currently equipped ability of a target.", cost: "025", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk5 = { description: "Grant yourself or an ally a healing bonus equal to [TECHNIQUE].", cost: "025", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk6 = { description: "Grant yourself or an ally additional damage mitigation equal to [TECHNIQUE].", cost: "025", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 1, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk7 = { description: "Perform your regular attack.", cost: "050", isPassive: 0, isCM: 1, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk8 = { description: "Perform your regular heal on an ally.", cost: "050", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk9 = { description: "Summon your Companion.", cost: "050", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 0, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 1, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk10 = { description: "Grant yourself or an ally advantage on SKILL saves a number of times equal to your [SKILL] per thread.", cost: "050", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 1, accuracy: 0, advantage: 1, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk11 = { description: "Restore [SUPPORTIVE TECHNIQUE] hit points per round for [SUPPORTIVE TECHNIQUE] rounds to an ally.", cost: "050", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk12 = { description: "Add [SKILL] to the damage dealt by a specific condition.", cost: "050", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk13 = { description: "When engaging in grid-based combat, you can add [SUPPORTIVE TECHNIQUE] to your initiative roll.", cost: "050", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 1, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk14 = { description: "Grant yourself or an ally a damage bonus equal to [TECHNIQUE].", cost: "075", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk15 = { description: "Add [TECHNIQUE] to the damage dealt by a specific condition.", cost: "075", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk16 = { description: "Impose a penalty on an enemy's accuracy equal to [TECHNIQUE]. As a Passive, this triggers on your choice of successfully hitting or being hit, and lasts until your next turn.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 1, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk17 = { description: "Add [SECONDARY DEFENSIVE TECHNIQUE] to your AC (min 1). Only one technique may be used in this manner.", cost: "100", isPassive: 1, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 1, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 1, exception: 0, three: 0, four: 0, half: 0 };
var perk18 = { description: "Grant yourself or an ally a bonus of [TECHNIQUE] to skill checks using a specific skill. Lasts for [TECHNIQUE] rounds.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 1, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk19 = { description: "Remove all the lesser conditions affecting an ally. Lesser conditions include deafened, bleeding, blinded, burned, chilled, and poisoned.", cost: "100", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk20 = { description: "Grant yourself or an ally the ability to use their movement over hazardous terrain and tiles without incurring negative effects or being slowed. Lasts for a total of 3*[TECHNIQUE] tiles moved.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 1, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 1, four: 0, half: 0 };
var perk21 = { description: "Impose disadvantage on checks using a specific skill (str, dex, int, etc.) until the start of your next turn. Can be used a number of times equal to your [SKILL] in a thread.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 1, saves: 0, accuracy: 0, advantage: 0, disadvantage: 1, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk22 = { description: "Add the dice pool of [SECONDARY OFFENSIVE TECHNIQUE]/2 to your rolled damage (min 1d10).", cost: "150", isPassive: 1, isCM: 1, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 1, exception: 0, three: 0, four: 0, half: 1 };
var perk23 = { description: "Add the dice pool of [SECONDARY DEFENSIVE TECHNIQUE]/2 to your damage mitigation (min 1d10).", cost: "150", isPassive: 1, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 1, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 1, exception: 0, three: 0, four: 0, half: 1 };
var perk24 = { description: "Add [SKILL]/2 to the DC of a save for a specific condition.", cost: "150", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 1, skillChecks: 0, saves: 1, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 1 };
var perk25 = { description: "Revive a dead creature. If taken as a Passive, it can only be done [SUPPORTIVE TECHNIQUE]/2 times a thread, and must be triggered by a basic heal or a CM with a healing perk.", cost: "150", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 1, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk26 = { description: "The next attack roll made against this target before the end of your next turn has advantage.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 1, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk27 = { description: "Grant yourself or an ally a number of extra squares of movement equal to [SUPPORTIVE TECHNIQUE].", cost: "150", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 1, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk28 = { description: "Grants the ability to overheal an ally by 4*[SUPPORTIVE TECHNIQUE] hit points. It only allows for the potential of overhealing, it does not execute the heal.", cost: "150", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 1, half: 0 };
var perk29 = { description: "Deal [DEFENSIVE TECHNIQUE]/2 d10 damage the next time you are hit by a melee attack. If taken as a Passive, deal [DEFENSIVE TECHNIQUE]/2 damage instead.", cost: "150", isPassive: 1, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk30 = { description: "Give a specified creature disadvantage on their attacks until your next turn.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 1, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk31 = { description: "Grant yourself or an ally an AC bonus equal to [DEFENSIVE TECHNIQUE] for one round.", cost: "150", isPassive: 0, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 1, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk32 = { description: "Grant yourself or an ally immunity to critical hits for one round.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk33 = { description: "Grant an ally an accuracy bonus equal to [SKILL] for one round.", cost: "175", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 1, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk34 = { description: "Grant yourself or an ally immunity to all conditions for one round.", cost: "175", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk35 = { description: "Add the dice pool of [SECONDARY SUPPORTIVE TECHNIQUE]/2 to your rolled healing (min 1d10).", cost: "200", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 1, exception: 0, three: 0, four: 0, half: 1 };
var perk36 = { description: "Add [TECHNIQUE]/2 to the DC of a save for a specific condition.", cost: "200", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 1, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 1 };
var perk37 = { description: "Targets an additional number of allies equal to or less than [SUPPORTIVE OR DEFENSIVE TECHNIQUE]. Must be used in conjunction with another perk.", cost: "200", isPassive: 0, isCM: 1, offense: 0, defense: 1, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 1, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk38 = { description: "Remove all conditions affecting an ally. Does not apply to Banished, Grappled, Disarmed, or Prone.", cost: "200", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk39 = { description: "Reduce up to [DEFENSIVE TECHNIQUE] d10 damage until your next turn. If taken as a Passive, prevent [DEFENSIVE TECHNIQUE]/2 damage instead.", cost: "200", isPassive: 1, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 1, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk40 = { description: "Negate or prevent disadvantage for yourself or an ally.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 1, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk41 = { description: "Apply this Maneuver's effects to [TECHNIQUE] tiles. Any ally who starts their turn on a tile receives the benefits until the start of their next turn, while any foe incurs the penalty/saving throw/damage the first time they move onto or end their turn on the tile.", cost: "225", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 1, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk42 = { description: "Grant an ally an accuracy bonus equal to [TECHNIQUE] for one round. This perk cannot target yourself.", cost: "250", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 1, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk43 = { description: "Add [SECONDARY TECHNIQUE] to your own accuracy rolls.", cost: "250", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 1, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 1, exception: 0, three: 0, four: 0, half: 0 };
var perk44 = { description: "Target an additional number of enemies equal to or less than [TECHNIQUE]. Must be used in conjunction with another perk.", cost: "250", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 1, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk45 = { description: "Impose disadvantage on SKILL saves until the start of your next turn. Can be used [SKILL] times per thread.", cost: "250", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 1, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk46 = { description: "Prepare to take a hit for an adjacent ally. When an adjacent ally is attacked, you swap places with that ally, and they must attack you instead.", cost: "250", isPassive: 1, isCM: 1, offense: 0, defense: 1, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk47 = { description: "When calling forth your companion in combat, they may automatically perform an attack as part of the process (therefore not consuming your bonus action that turn).", cost: "150", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 0, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 1, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk48 = { description: "The master has the ability to summon an additional companion. Doing so still requires a separate Main Action, but they can act together on the same Bonus Action Command. HP is divided equally between the Companions.", cost: "200", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 0, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 1, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk49 = { description: "The summoned companion may attempt to revive their unconscious master once per thread.", cost: "300", isPassive: 1, isCM: 1, offense: 0, defense: 0, support: 0, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 1, death: 1, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk50 = { description: "Attempt to inflict Banished.", cost: "750", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk51 = { description: "Attempt to inflict Bleeding.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk52 = { description: "Attempt to inflict Blinded.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk53 = { description: "Attempt to inflict Burning.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk54 = { description: "Attempt to inflict Charmed.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk55 = { description: "Attempt to inflict Chilled.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk56 = { description: "Attempt to inflict Confounded.", cost: "750", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk57 = { description: "Attempt to inflict Deafened.", cost: "050", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk58 = { description: "Attempt to inflict Disarmed.", cost: "100", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk59 = { description: "Attempt to inflict Embargoed.", cost: "300", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk60 = { description: "Attempt to inflict Exhausted.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk61 = { description: "Attempt to inflict Exposed.", cost: "250", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk62 = { description: "Attempt to inflict Fettered.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk63 = { description: "Attempt to inflict Frightened.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk64 = { description: "Attempt to inflict Grappled.", cost: "050", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk65 = { description: "Attempt to inflict Incapacitated.", cost: "500", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk66 = { description: "Attempt to inflict Paralyzed.", cost: "600", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk67 = { description: "Attempt to inflict Paranoid.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk68 = { description: "Attempt to inflict Petrified.", cost: "750", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk69 = { description: "Attempt to inflict Poisoned.", cost: "100", isPassive: 1, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk70 = { description: "Attempt to inflict Prone.", cost: "150", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk71 = { description: "Attempt to inflict Restrained.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk72 = { description: "Attempt to inflict Sealed.", cost: "250", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk73 = { description: "Attempt to inflict Sleep.", cost: "400", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk74 = { description: "Attempt to inflict Sundered.", cost: "175", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk75 = { description: "Attempt to inflict Stunned.", cost: "600", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk76 = { description: "Attempt to inflict Taunted.", cost: "075", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk77 = { description: "Attempt to inflict Vulnerable.", cost: "250", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 1, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 0, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk78 = { description: "(Special)<br>You may attempt to hide. Roll a DEX skill check. Enemies must meet or beat this number with a WIS skill check in order to locate you. You must have Shadow or Illusion Technique to attempt this if there is no suitable cover to use otherwise.", cost: "100", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 1, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk79 = { description: "(Special)<br>Use your action to perform a melee attack with advantage this turn, but until your next turn, attacks against you have advantage to hit as well.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 1, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk80 = { description: "(Special)<br>Before you make an attack, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 damage.", cost: "200", isPassive: 0, isCM: 1, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 1, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk81 = { description: "(Special)<br>You can transport one willing creature with you when taking your movement action in combat without being slowed. You must be able to touch this person before expending your movement action.", cost: "300", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 1, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk82 = { description: "(Special)<br>As a bonus action, you can move up to your speed towards an enemy of your choice that you can see or hear. You must end this move closer to the enemy than when you started.", cost: "300", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 1, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk83 = { description: "(Special)<br>While above 80% or below 20% HP (choose one), gain your highest technique proficiency in additional damage, healing and mitigation.", cost: "300", isPassive: 1, isCM: 0, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 1, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk84 = { description: "(Special)<br>When you are reduced to 0 hit points but not killed outright, you drop to 1 hit point instead. This ability can activate once per thread.", cost: "400", isPassive: 1, isCM: 0, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 1, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk85 = { description: "(Special)<br>As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this ability a number of times equal to [TECHNIQUE]/2", cost: "400", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk86 = { description: "(Special)<br>Create an environmental hazard on the battlefield. Choose a number of touching tiles equal to [OFFENSIVE TECHNIQUE]. Enemies who start their turn or move within those squares must pass an INT/DEX saving throw or take [OFFENSIVE TECHNIQUE] * d10 + [OFFENSIVE TECHNIQUE] damage. Lasts for [OFFENSIVE TECHNIQUE] rounds.", cost: "400", isPassive: 0, isCM: 1, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 1, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk87 = { description: "(Special)<br>Using your main action, heal a target. Convert [SECONDARY SUPPORTIVE TECHNIQUE]d10 of your HP into additional healing. This healing is not affected by critting", cost: "400", isPassive: 0, isCM: 1, offense: 0, defense: 0, support: 1, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 1, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 1, exception: 1, three: 0, four: 0, half: 0 };
var perk88 = { description: "(Special)<br>Using your main action, attempt to steal an item from a target. Make a DEXTERITY check, which is contested by a WIS check by your target. If your check is higher, you successfully steal an item (rolled by staff) from your target. Only works in DMed quests and events. Can only be used a number of times equal to your DEX per encounter.", cost: "400", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 1, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk89 = { description: "(Special)<br>When you crit, roll your damage and add on the maximum damage of your technique's dice pool to damage rolled.", cost: "500", isPassive: 1, isCM: 0, offense: 1, defense: 0, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 1, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk90 = { description: "(Special)<br>Link up to a number of allies equal to [DEFENSIVE TECHNIQUE] and redirect half of the damage done to them onto yourself for up to 10*[DEFENSIVE TECHNIQUE].", cost: "500", isPassive: 0, isCM: 1, offense: 0, defense: 1, support: 0, companion: 0, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk91 = { description: "(Special)<br>Put the target in stasis. All damage, healing, conditions, etc they take this round are halted. At the start of the target's turn in the next round, they receive all the damage, healing, etc from the previous round.", cost: "500", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 0, three: 0, four: 0, half: 0 };
var perk92 = { description: "(Special)<br>Anticipate a miss from a melee attack, and cause that attack to hit one creature of your choice, other than the attacker, that is adjacent to you. This can happen a number of times equal to your [TECHNIQUE]/2 per round.", cost: "500", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk93 = { description: "(Special)<br>Anticipate an enemy using a maneuver that targets or includes you. Force the creature to make a DC + [TECHNIQUE] save. The target rolls the save using the technique tied to its maneuver. On a failed save, you negate the maneuver and gain the ability to use the maneuver [TECHNIQUE]/2 times in the thread. Can be used [TECHNIQUE]/2 times per thread.", cost: "600", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };
var perk94 = { description: "(Special)<br>Target yourself or an ally and make a number of illusory copies equal to [TECHNIQUE]/2. These illusory copies copy the movement of the person specified. When targeted by an ability or an attack, the DM must first roll 1dX, where X is the number of illusions. If they roll a 1, they target you; if they roll anything other than a 1, they hit your illusion and the illusion disappears. Illusions have no AC.", cost: "750", isPassive: 0, isCM: 1, offense: 1, defense: 1, support: 1, companion: 1, ac: 0, dc: 0, skillChecks: 0, saves: 0, accuracy: 0, advantage: 0, disadvantage: 0, damage: 0, mitigation: 0, healing: 0, condition: 0, movement: 0, targeting: 0, companion1: 0, death: 0, initiative: 0, isSpecial: 1, secOnly: 0, exception: 1, three: 0, four: 0, half: 0 };

perklist.push(perk1, perk2, perk3, perk4, perk5, perk6, perk7, perk8, perk9, perk10, perk11, perk12, perk13, perk14, perk15, perk16, perk17, perk18, perk19, perk20, perk21, perk22, perk23, perk24, perk25, perk26, perk27, perk28, perk29, perk30, perk31, perk32, perk33, perk34, perk35, perk36, perk37, perk38, perk39, perk40, perk41, perk42, perk43, perk44, perk45, perk46, perk47, perk48, perk49, perk50, perk51, perk52, perk53, perk54, perk55, perk56, perk57, perk58, perk59, perk60, perk61, perk62, perk63, perk64, perk65, perk66, perk67, perk68, perk69, perk70, perk71, perk72, perk73, perk74, perk75, perk76, perk77, perk78, perk79, perk80, perk81, perk82, perk83, perk84, perk85, perk86, perk87, perk88, perk89, perk90, perk91, perk92, perk93, perk94);

/* searches */
var perkPassiveO, perkPassiveOs,
    perkPassiveD, perkPassiveDs,
    perkPassiveS, perkPassiveSs,
    perkPassiveC, perkPassiveCs,
    perkCMO, perkCMOs,
    perkCMD, perkCMDs,
    perkCMS, perkCMSs,
    perkCMC, perkCMCs;

/* initial search */
perkPassiveO = perklist.filter(one => one.isPassive === 1 && one.offense === 1);
perkCMO = perklist.filter(two => two.isCM === 1 && two.offense === 1);
perkPassiveD = perklist.filter(three => three.isPassive === 1 && three.defense === 1);
perkCMD = perklist.filter(four => four.isCM === 1 && four.defense === 1);
perkPassiveS = perklist.filter(five => five.isPassive === 1 && five.support === 1);
perkCMS = perklist.filter(six => six.isCM === 1 && six.support === 1);
perkPassiveC = perklist.filter(seven => seven.isPassive === 1 && seven.companion === 1);
perkCMC = perklist.filter(eight => eight.isCM === 1 && eight.companion === 1);

/* secondary technique distinction */
perkPassiveOs = perkPassiveO.map(obj => ({...obj, "secondary": 1}));
perkPassiveDs = perkPassiveD.map(obj => ({...obj, "secondary": 1}));
perkPassiveSs = perkPassiveS.map(obj => ({...obj, "secondary": 1}));
perkPassiveCs = perkPassiveC.map(obj => ({...obj, "secondary": 1}));
perkCMOs = perkCMO.map(obj => ({...obj, "secondary": 1}));
perkCMDs = perkCMD.map(obj => ({...obj, "secondary": 1}));
perkCMSs = perkCMS.map(obj => ({...obj, "secondary": 1}));
perkCMCs = perkCMC.map(obj => ({...obj, "secondary": 1}));
