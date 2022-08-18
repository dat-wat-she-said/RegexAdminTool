function en_to_uk(text_input) { 
    var regex = /en.creative.com/;
    const result = text_input.replace(regex,"uk.creative.com");
    return result;
}
function populate(text_output){
    document.getElementById('out').value = text_output;
}

let btn = document.getElementById("translate");
btn.addEventListener('click', event => {
    const text_input = document.getElementById("in").value;
    // console.log(text_input);
    // console.log(type(text_input));
    var text_output = en_to_uk(text_input);
    populate(text_output);
});


