// -------global definitions------- 
// DOMAIN
let EN_DOMAIN = "en.creative.com";
let UK_DOMAIN = "uk.creative.com";
let GR_DOMAIN = "gr.creative.com";
let NORDIC_DOMAIN = "nordic.creative.com";
let ES_DOMAIN = "es.creative.com";
let IT_DOMAIN = "it.creative.com";
let DE_DOMAIN = "de.creative.com";
let FR_DOMAIN = "fr.creative.com";
let PL_DOMAIN = "pl.creative.com";
// DOLLAR
let EN_DOLLAR_REGEX = new RegExp("(&euro;|€)(\\w*)[.]?(\\w*)","g");
let EN_TO_UK_DOLLAR_REGEX = new RegExp("&#163;$2.$3");
let EN_TO_GR_DOLLAR_REGEX = new RegExp("$2,$3$1");
let EN_TO_IT_DOLLAR_REGEX = new RegExp("$1$2,$3");
let EN_TO_ES_DE_FR_DOLLAR_REGEX = new RegExp("$2,$3$1");
let EN_TO_PL_DOLLAR_REGEX = new RegExp("$2$3,00zł");
// FREE SHIPPING
let EN_SHIP_REGEX = new RegExp("FREE SHIPPING","ig");
let EN_TO_ES_SHIP = "ENV&Iacute;O GRATU&Iacute;TO";
let EN_TO_IT_SHIP = "SPEDIZIONE GRATUITA";
let EN_TO_DE_SHIP = "KOSTENLOSE LIEFERUNG";
let EN_TO_FR_SHIP = "LIVRAISON GRATUITE";
let EN_TO_PL_SHIP = "BEZPŁATNA DOSTAWA";
// SHOP NOW BUY NOW
let EN_SHOP_NOW_BUY_NOW_REGEX = new RegExp("(SHOP NOW|BUY NOW)","ig");
let EN_TO_ES_SHOP_NOW_BUY_NOW = "COMPRAR AHORA";
let EN_TO_IT_SHOP_NOW_BUY_NOW = "ACQUISTA ORA";
// SHOP NOW
let EN_SHOP_NOW_REGEX = new RegExp("SHOP NOW","ig");
let EN_TO_DE_SHOP_NOW = "JETZT EINKAUFEN"


// -------function definitions-------
// switch case for selection to function
function translate(text_input, selection_input){
    if (selection_input =="nordic"){
        return en_to_nordic(text_input);
    }
    else if (selection_input == "gr"){
        return en_to_gr(text_input);
    }
    else if (selection_input == "uk"){
        return en_to_uk(text_input);
    }
    else if (selection_input == "fr"){
        return en_to_fr(text_input);
    }
    else if (selection_input == "it"){
        return en_to_it(text_input);
    }
    else if (selection_input == "de"){
        return en_to_de(text_input);
    }
    else if (selection_input == "es"){
        return en_to_es(text_input);
    }
    else if (selection_input == "pl"){
        return en_to_pl(text_input);
    }
}

// translate en to uk
function en_to_uk(text_input) { 
    var en_domain_regex = new RegExp(EN_DOMAIN,"ig"); //flags i is for any case and g is for global search
    var result = text_input.replace(en_domain_regex,UK_DOMAIN);
    result = result.replace(EN_DOLLAR_REGEX,UK_DOLLAR_REGEX);
    return result;
}

// populates output text field
function populate(text_output){
    document.getElementById('out').value = text_output;
}


// manage translate button
function manage_translate(){
    var selection = document.getElementById("target-country").value;
    var translation_btn = document.getElementById("translate");
    console.log(selection);
    if (selection !== 'none'){
        translation_btn.disabled = false;
    }
}


// --------run time behavior--------

// call manage_translation button
var selection = document.getElementById("target-country"); 
selection.addEventListener("change",manage_translate);

// listen for btn click
let btn = document.getElementById("translate");
btn.addEventListener('click', event => { //this is an anonymous function
    const text_input = document.getElementById("in").value;
    var text_output = en_to_uk(text_input);
    populate(text_output);
});

