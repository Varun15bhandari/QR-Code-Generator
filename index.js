let qrText=document.getElementById("qrText");
let qrBox=document.getElementById("qrBox");
let qrImage=document.getElementById("qrImage");
function generate(){
    
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        
    
    
}
