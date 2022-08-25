// Made 2 changes from chee koon and ricson's edition as of 24/8/22
// 1. change the rules regarding free and new
// 2. did not include rules that seemed irrelevant

// -------global definitions------- 
// DOMAIN
const EN_DOMAIN_REGEX = new RegExp("en.creative.com","ig"); //i for case and g is for global search
const UK_DOMAIN = "uk.creative.com";
const GR_DOMAIN = "gr.creative.com";
const NORDIC_DOMAIN = "nordic.creative.com";
const ES_DOMAIN = "es.creative.com";
const IT_DOMAIN = "it.creative.com";
const DE_DOMAIN = "de.creative.com";
const FR_DOMAIN = "fr.creative.com";
const PL_DOMAIN = "pl.creative.com";
// DOLLAR
const EN_DOLLAR_REGEX = new RegExp("(&euro;|€)(\\w*)[.]?(\\w*)","g");
const EN_TO_UK_DOLLAR = '&#163;$2.$3';
const EN_TO_GR_DOLLAR = "$2,$3$1";
const EN_TO_IT_DOLLAR = "$1$2,$3";
const EN_TO_ES_DE_FR_DOLLAR = "$2,$3$1";
const EN_TO_PL_DOLLAR = "$2$3,00zł";
// FREE SHIPPING
const EN_SHIP_REGEX = new RegExp("FREE SHIPPING","ig");
const EN_TO_ES_SHIP = "ENV&Iacute;O GRATU&Iacute;TO";
const EN_TO_IT_SHIP = "SPEDIZIONE GRATUITA";
const EN_TO_DE_SHIP = "KOSTENLOSE LIEFERUNG";
const EN_TO_FR_SHIP = "LIVRAISON GRATUITE";
const EN_TO_PL_SHIP = "BEZPŁATNA DOSTAWA";
// SHOP NOW BUY NOW
const EN_SHOP_NOW_BUY_NOW_REGEX = new RegExp("(SHOP NOW|BUY NOW)","ig");
const EN_TO_ES_SHOP_NOW_BUY_NOW = "COMPRAR AHORA";
const EN_TO_IT_SHOP_NOW_BUY_NOW = "ACQUISTA ORA";
// SHOP NOW
const EN_SHOP_NOW_REGEX = new RegExp("SHOP NOW","ig");
const EN_TO_DE_SHOP_NOW = "JETZT EINKAUFEN"
const EN_TO_FR_SHOP_NOW = "ACHETEZ MAINTENANT"
const EN_TO_PL_SHOP_NOW = "KUPUJ TERAZ";
// BUY NOW
const EN_BUY_NOW_REGEX = new RegExp("BUY NOW","ig");
const EN_TO_DE_BUY_NOW = "JETZT KAUFEN";
const EN_TO_FR_BUY_NOW = "ACHETER MAINTENANT";
const EN_TO_PL_BUY_NOW = "KUP TERAZ";
// LEARN MORE
const EN_LEARN_MORE_REGEX = new RegExp("LEARN MORE","ig");
const EN_TO_ES_LEARN_MORE = "M&Aacute;S INFORMACI&Oacute;N"
const EN_TO_IT_LEARN_MORE = "PER SAPERNE DI PI&Ugrave;"
const EN_TO_DE_LEARN_MORE = "ERFAHREN SIE MEHR";
const EN_TO_FR_LEARN_MORE = "EN SAVOIR PLUS";
const EN_TO_PL_LEARN_MORE = "DOWIEDZ SIĘ WIĘCEJ";
// NEW
const EN_NEW_REGEX = new RegExp("NEW\\b","ig");
const EN_TO_ES_NEW = "NUEVO";
const EN_TO_IT_NEW = "NUOVO";
const EN_TO_DE_NEW = "NEU";
const EN_TO_FR_NEW = "NOUVEAU";
const EN_TO_PL_NEW = "NOWOŚĆ";
// FREE WORTH
const EN_FREE_WORTH_REGEX = new RegExp("FREE(.*?)worth","ig");
const EN_TO_ES_FREE_WORTH = "GRATIS el$1valorado en";
const EN_TO_IT_FREE_WORTH = "GRATIS il$1dal valore di";
const EN_TO_DE_FREE_WORTH = "KOSTENLOSES$1im Wert von";
const EN_TO_FR_FREE_WORTH = "GRATUIT$1d&rsquo;une valeur de";
const EN_TO_PL_FREE_WORTH = "DARMOWY$1wart";
// FREE
const EN_FREE_REGEX = new RegExp("FREE\\b","ig");
const EN_TO_ES_FREE = "GRATUITO";
const EN_TO_IT_FREE = "GRATUITO";
const EN_TO_DE_FREE = "KOSTENLOS";
const EN_TO_FR_FREE = "GRATUIT";
const EN_TO_PL_FREE = "BEZPŁATNE";
// PROMO CODE
const EN_PROMO_CODE_REGEX = new RegExp("(/help/)ordering(.*?)#i-have-a-promo-code-how-do-i-redeem","ig");
const EN_TO_ES_PROMO_CODE =  "$1pedidos$2#tengo-un-c-digo-de-promoci-n-c-mo-lo";
const EN_TO_IT_PROMO_CODE =  "$1ordine$2#ho-un-codice-promozionale-come-posso";
const EN_TO_DE_PROMO_CODE = "$1bestellung$2#ich-habe-einen-aktionscode-wie-l-se-ich";
const EN_TO_FR_PROMO_CODE =  "$1commande$2#j-39-ai-un-code-promo-comment-puis-je";
const EN_TO_PL_PROMO_CODE =  "$1ordering$2#i-have-a-promo-code-how-do-i-redeem";
// BROWSER VIEW
const EN_BROWSER_VIEW_REGEX = new RegExp("((alt|title)(.*?))VIEW ALL DEALS\\s*>\\s*","ig");
const EN_TO_FR_BROWSER_VIEW = "$1VOIR TOUTES LES OFFRES >";
const EN_TO_IT_BROWSER_VIEW = "$1VISUALIZZA TUTTE LE OFFERTE>";
const EN_TO_DE_BROWSER_VIEW = "$1ALLE ANGEBOTE ANZEIGEN>";
const EN_TO_ES_BROWSER_VIEW = "$1VEA TODAS LAS OFERTAS >";
const EN_TO_PL_BROWSER_VIEW = "$1ZOBACZ CAŁĄ OFERTĘ >";
// WHITE
const EN_WHITE_REGEX = new RegExp("\\(WHITE\\)","ig");
const EN_TO_FR_WHITE = "(BLANC)";
const EN_TO_DE_WHITE = "(WEIß)";
const EN_TO_IT_WHITE = "(BIANCO)";
const EN_TO_ES_WHITE = "(BLANCO)";
const EN_TO_PL_WHITE = "(BIAŁY)";
// HEADER
// HEADER DISPLAY
const EN_HEADER_DISPLAY_REGEX = new RegExp("If this email does not display correctly(.*)view its full version","ig");
const EN_TO_IT_HEADER_DISPLAY = "Se non riesci a visualizzare correttamente questa email$1seleziona la versione completa";
// HEADER FACEBOOK
const EN_HEADER_FACEBOOK_REGEX = new RegExp("https://www.facebook.com/CreativeLabs","ig");
const EN_TO_IT_HEADER_FACEBOOK = "https://www.facebook.com/creativeitalia";
// HEADER INSTAGRAM
const EN_IT_HEADER_INSTAGRAM_REGEX = new RegExp("https://instagram.com/CreativeLabs","ig");
// FOOTER
// FOOTER EXPLORE MORE
const EN_FOOTER_EXPLORE_MORE_REGEX = new RegExp("EXPLORE MORE","ig");
const EN_TO_IT_FOOTER_EXPLORE_MORE = "SCOPRI DI PIÙ SU";
// FOOTER SPEAKERS
const EN_FOOTER_SPEAKERS_REGEX = new RegExp("SPEAKERS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_SPEAKERS = "ALTOPARLANTI";
// FOOTER HEADPHONES
const EN_FOOTER_HEADPHONES_REGEX = new RegExp("HEADPHONES(?=<)(.*?\\|)","ig");
const EN_TO_IT_FOOTER_HEADPHONES = "CUFFIE$1&nbsp;<br class='esd-mobile-hidden'>";
// FOOTER WORK SOLUTIONS
const EN_FOOTER_WORK_SOLUTIONS_REGEX = new RegExp("WORK SOLUTIONS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_WORK_SOLUTIONS = "SOLUZIONI LAVORATIVE";
// FOOTER AUDIO ENTHUSIASTS
const EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX = new RegExp("AUDIO ENTHUSIASTS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_AUDIO_ENTHUSIASTS = "APPASSIONATI DI AUDIO";
// EUR TO GBP
function eur_to_gbp(text_input){
    return text_input.replace(/EUR 79/gi,"GBP 79");
}
// UNSTRUCTURED
function en_to_de_free_male_update(text_input){
    return text_input.replace(/KOSTENLOSES (Sound Blaster Headset Stand|Creative BT-W2)(?= im Wert von)/,"KOSTENLOSER $1");
}

//COPYSIGN
function copysign_encode(text_input){
    return text_input.replace(/&copy;|Ⓒ|©/,"&#9400;");
}

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
    var result = text_input.replace(EN_DOMAIN_REGEX,UK_DOMAIN); 
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_UK_DOLLAR);
    //copysign
    result = copysign_encode(result);
    //eur to gbp
    result = eur_to_gbp(result);
    return result;
}
// translate en to gr
function en_to_gr(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,GR_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_GR_DOLLAR);
    return result;
}
// translate en to gr
function en_to_nordic(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,NORDIC_DOMAIN);
    return result;
}
// translate en to it
function en_to_it(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,IT_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_IT_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_IT_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_BUY_NOW_REGEX,EN_TO_IT_SHOP_NOW_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_IT_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_IT_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_IT_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_IT_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_IT_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_IT_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_IT_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_IT_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_IT_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_IT_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_IT_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_IT_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_IT_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_IT_FOOTER_AUDIO_ENTHUSIASTS);
    return result;
}
// translate en to es
function en_to_es(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,ES_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_ES_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_BUY_NOW_REGEX,EN_TO_ES_SHOP_NOW_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_ES_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_ES_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_ES_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_ES_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_ES_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_ES_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_ES_WHITE);
    return result;
}
function en_to_de(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,DE_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_DE_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_DE_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_DE_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_DE_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_DE_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_DE_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_DE_FREE);
    //free male update (custom to de)
    result = en_to_de_free_male_update(result);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_DE_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_DE_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_DE_WHITE);
    return result;
}
function en_to_fr(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,FR_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_FR_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_FR_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_FR_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_FR_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_FR_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_FR_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_FR_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_FR_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_FR_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_FR_WHITE);
    return result;
}
function en_to_pl(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,PL_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_PL_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_PL_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_PL_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_PL_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_PL_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_PL_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_PL_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_PL_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_PL_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_PL_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_PL_WHITE);
    return result;
}
// populates output text field
function populate(text_output){
    editor2.setValue(text_output,0);
}


// manage translate button
function manage_translate(){
    var selection = document.getElementById("target-country").value;
    var translation_btn = document.getElementById("translate");
    if (selection !== 'none'){
        translation_btn.disabled = false;
    }
}
// copy text from output
function copy_output() {
    /* Get the text field */
    const copyText = editor2.getValue();
    console.log(copyText);
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    alert("Copied output text");
}


// --------run time code--------

// call manage_translation button
var selection = document.getElementById("target-country"); 
selection.addEventListener("change",manage_translate);

// listen for btn click
let btn = document.getElementById("translate");
btn.addEventListener('click', event => { //this is an anonymous function
    // const text_input = document.getElementById("editor");
    const text_input = editor.getValue();
    var text_output = translate(text_input,selection.value);
    populate(text_output);
});
let copy = document.getElementById("copy");
copy.addEventListener('click',event => {
    copy_output();
});
