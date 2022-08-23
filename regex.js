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
let EN_TO_UK_DOLLAR = '&#163;$2.$3';
let EN_TO_GR_DOLLAR = "$2,$3$1";
let EN_TO_IT_DOLLAR = "$1$2,$3";
let EN_TO_ES_DE_FR_DOLLAR = "$2,$3$1";
let EN_TO_PL_DOLLAR = "$2$3,00zł";
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
let EN_TO_FR_SHOP_NOW = "ACHETEZ MAINTENANT"
let EN_TO_PL_SHOP_NOW = "KUPUJ TERAZ";
// BUY NOW
let EN_BUY_NOW_REGEX = new RegExp("BUY NOW","ig");
let EN_TO_DE_BUY_NOW = "JETZT KAUFEN";
let EN_TO_FR_BUY_NOW = "ACHETER MAINTENANT";
let EN_TO_PL_BUY_NOW = "KUP TERAZ";
// LEARN MORE
let EN_LEARN_MORE_REGEX = new RegExp("LEARN MORE","ig");
let EN_TO_ES_LEARN_MORE = "M&Aacute;S INFORMACI&Oacute;N"
let EN_TO_IT_LEARN_MORE = "PER SAPERNE DI PI&Ugrave;"
let EN_TO_DE_LEARN_MORE = "ERFAHREN SIE MEHR";
let EN_TO_FR_LEARN_MORE = "EN SAVOIR PLUS";
let EN_TO_PL_LEARN_MORE = "DOWIEDZ SIĘ WIĘCEJ";
// NEW
let EN_NEW_REGEX = new RegExp("NEW","ig");
let EN_TO_ES_NEW = "NUEVO";
let EN_TO_IT_NEW = "NUOVO";
let EN_TO_DE_NEW = "NEU";
let EN_TO_FR_NEW = "NOUVEAU";
let EN_TO_PL_NEW = "NOWOŚĆ";
// FREE WORTH
let EN_FREE_WORTH_REGEX = new RegExp("FREE(.*?)worth","ig");
let EN_TO_ES_FREE_WORTH = "GRATIS el$1valorado en";
let EN_TO_IT_FREE_WORTH = "GRATIS il$1dal valore di";
let EN_TO_DE_FREE_WORTH = "KOSTENLOSES$1im Wert von";
let EN_TO_FR_FREE_WORTH = "GRATUIT$1d&rsquo;une valeur de";
let EN_TO_PL_FREE_WORTH = "DARMOWY$1wart";
// FREE
let EN_FREE_REGEX = new RegExp("FREE","ig");
let EN_TO_ES_FREE = "GRATUITO";
let EN_TO_IT_FREE = "GRATUITO";
let EN_TO_DE_FREE = "KOSTENLOS";
let EN_TO_FR_FREE = "GRATUIT";
let EN_TO_PL_FREE = "BEZPŁATNE";
// PROMO CODE
let EN_PROMO_CODE_REGEX = new RegExp("(/help/)ordering(.*?)#i-have-a-promo-code-how-do-i-redeem","ig");
let EN_TO_ES_PROMO_CODE =  "$1pedidos$2#tengo-un-c-digo-de-promoci-n-c-mo-lo";
let EN_TO_IT_PROMO_CODE =  "$1ordine$2#ho-un-codice-promozionale-come-posso";
let EN_TO_DE_PROMO_CODE = "$1bestellung$2#ich-habe-einen-aktionscode-wie-l-se-ich";
let EN_TO_FR_PROMO_CODE =  "$1commande$2#j-39-ai-un-code-promo-comment-puis-je";
let EN_TO_PL_PROMO_CODE =  "$1ordering$2#i-have-a-promo-code-how-do-i-redeem";

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
    //domain
    var en_domain_regex = new RegExp(EN_DOMAIN,"ig"); //flags i is for any case and g is for global search
    var result = text_input.replace(en_domain_regex,UK_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_UK_DOLLAR);
    //free shipping
    //shopnow, buynow or both tgt
    //learn more
    //new
    //free worth..
    //free
    //promocode
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

