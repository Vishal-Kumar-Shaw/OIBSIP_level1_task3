function convert() {
    /* Taking the value of input from the input box */
    const inputValue = document.getElementById('temp');
    const x = inputValue.value;
    if(x==''){
        alert('Please input value');
        return;
    }
    var result;
        const conversionType = document.getElementsByName('temp-type');
        let y;
        for(let i=0;i<conversionType.length;i++) {
            if(conversionType[i].checked) {
                y=conversionType[i].value;
            }
        }
        //console.log(y);
        if(y==='FtoC') {
            result = (((x-32)*5)/9).toFixed(3);
            result+=" \u{00B0}C"
            

        }
        else{
            result = (((x/5)*9)+32).toFixed(3);
            result+=" \u{00B0}F"
        }
        // console.log(typeof result)
        document.getElementById('result').innerHTML = result;
}
function clearinput(){
    console.log('clear is called');
    const input = document.getElementById('temp');
    input.value="";
    const result = document.getElementById('result');
    result.innerHTML="";
}