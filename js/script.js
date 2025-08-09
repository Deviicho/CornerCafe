const date = new Date();
const hours = date.getHours();

if(hours >= 9 || hours < 1){
    document.getElementById('statusImage').src = 'images/open_status.webp';
}
else{
    document.getElementById('statusImage').src = 'images/close_status.webp';
}