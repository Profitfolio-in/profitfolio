/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
const gridOptions = {
    autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
        columnLimits: [
            {
                colId: 'country',
                minWidth: 900
            }
        ]
    },

    // other grid options ...
}


        // Sample JavaScript to populate the table
        document.addEventListener('DOMContentLoaded', async function () {
            
  // Get the table element from the iframe
  //const iframe = document.querySelector('iframe');
  //const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //const table = iframeDocument.getElementById('data-table');

            let n = await fetch("https://script.google.com/macros/s/AKfycbzWnu5by_TrF9n5pBId1-JuxvGuSsg8CEWwDM-XpS4XB9XfZlTJynpx4rtXHnu66kmPuQ/exec")
            let resp = await n.json()
            //console.log(resp)

            var fileName = document.getElementById('file').textContent;
            //alert(fileName)
            var serialNumber = 1;
            if(Number(fileName)==1){ serialNumber = 94}
            if(Number(fileName)==2){ serialNumber = 354}
            if(Number(fileName)==3){ serialNumber = 575}
            if(Number(fileName)==4){ serialNumber = 809}
            //alert(serialNumber)

            //console.log(resp.data[69].name + " : " + Math.round(resp.data[314].name))
//-------------------------------------------------------------------------------------------------
//Check if user is logged in
//if ($(".UserIsLogged").length <= 0)
    //alert("Not Loggedin");

//-------------------------------------------------------------------------------------------------
let r = serialNumber;
if(screen.width>=988)
{
for (let i = 1; i <= 100; i++) {
    if(resp.data[r].name == "") {
        break;}
let container = document.getElementById("200");
if(Math.round((resp.data[r+9].name))>0){
if(resp.data[r+5].name == "")
{
container.innerHTML += "<div class=\"tile3\"> "+
"<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
"<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
"<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
"<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
"<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
"<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
"<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
"</div><br>"}
else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
    container.innerHTML += "<div class=\"tile3\"> "+
    "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
"<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
"<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
"<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
"<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
"<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
"</div><br>"
}
 else {
    container.innerHTML += "<div class=\"tile3\"> "+
    "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
    "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
    "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
    "</div><br>"
    }}
    else if(Math.round((resp.data[r+9].name))<0){
        if(resp.data[r+5].name == "")
        {
        container.innerHTML += "<div class=\"tile3\"> "+
        "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
        "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
        "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
        "</div><br>"}
        else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
            container.innerHTML += "<div class=\"tile3\"> "+
            "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
        "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p>"+
        "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
        "</div><br>"
        }
         else {
            container.innerHTML += "<div class=\"tile3\"> "+
            "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
            "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
            "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
            "</div><br>"
            }}
        else 
        {
            if(resp.data[r+5].name == "")
            {
            container.innerHTML += "<div class=\"tile3\"> "+
            "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
            "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
            "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
            "</div><br>"}
            else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
                container.innerHTML += "<div class=\"tile3\"> "+
                "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
            "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p>"+
            "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
            "</div><br>"
            }
             else {
                container.innerHTML += "<div class=\"tile3\"> "+
                "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
                "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"+
                "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
                "</div><br>"
                }}
    r=r+13;
 }}
 else{
    for (let i = 1; i <= 100; i++) {
        if(resp.data[r].name == "") {
            break;}
    let container = document.getElementById("200");
    if(Math.round((resp.data[r+9].name))>0){
    if(resp.data[r+5].name == "")
    {
    container.innerHTML += "<div class=\"tile3\"> "+
    "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
    "</div><br>"}
    else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
        container.innerHTML += "<div class=\"tile3\"> "+
        "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
    "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
    "</div><br>"
    }
     else {
        container.innerHTML += "<div class=\"tile3\"> "+
        "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
        "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
        "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
        "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
        "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:green\">&uarr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
        "</div><br>"
        }}
        else if(Math.round((resp.data[r+9].name))<0){
            if(resp.data[r+5].name == "")
            {
            container.innerHTML += "<div class=\"tile3\"> "+
            "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p><br>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
            "</div><br>"}
            else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
                container.innerHTML += "<div class=\"tile3\"> "+
                "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
            "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
            "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p><br>"+
            "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
            "</div><br>"
            }
             else {
                container.innerHTML += "<div class=\"tile3\"> "+
                "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p style=\"color:red\" class=\"tile3-r\" id=\"1\"> <b>Loss:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%) "+"<span style=\"color:red\">&darr;</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
                "</div><br>"
                }}
            else 
            {
                if(resp.data[r+5].name == "")
                {
                container.innerHTML += "<div class=\"tile3\"> "+
                "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
                "</div><br>"}
                else if(resp.data[r+5].name != "" && resp.data[r+4].name == "") {
                    container.innerHTML += "<div class=\"tile3\"> "+
                    "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                    "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </p><br>"+
                "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
                "</div><br>"
                }
                 else {
                    container.innerHTML += "<div class=\"tile3\"> "+
                    "<p class=\"tile3-p\">"+resp.data[r].name+'  (Rs. '+resp.data[r+3].name+")</p>"+
                    "<p class=\"tile3-l\" id=\"1\"> <b>Buy Value:</b>"+'Rs.'+resp.data[r+1].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                    "<p class=\"tile3-c\" id=\"1\"> <b>Buy Date:</b>"+Number(resp.data[r+2].name.substr(8,2))+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                    "<p class=\"tile3-r\" id=\"1\"> <b>Invested Amount:</b>"+'Rs.'+Math.round(resp.data[r+7].name)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                    "<p class=\"tile3-l\" id=\"1\"> <b>Sell Value:</b>"+'Rs.'+resp.data[r+5].name+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>" +
                    "<p class=\"tile3-c\" id=\"1\"> <b>Sell Date:</b>"+Number(resp.data[r+4].name.substr(8,2))+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2)+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p><br>"+
                    "<p style=\"color:green\" class=\"tile3-r\" id=\"1\"> <b>Profit:</b>"+"Rs."+Math.round((resp.data[r+9].name))+" ("+Math.round((resp.data[r+6].name*100))+"%)"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p> <br>"+
                    "</div><br>"
                    }}
        r=r+13;
     }
 }




const row1 = document.getElementById('row1');
row1.innerHTML = "Starting Quarter with" + " : Rs. " + resp.data[r+40].name
const row2 = document.getElementById('row2');
row2.innerHTML = "Profit for the Quarter:" + " : Rs. " + Math.round(resp.data[r+53].name) + "     ("+parseFloat((resp.data[r+53].name/resp.data[r+40].name)*100).toFixed(2)+ "%)"
const row3 = document.getElementById('row3');
row3.innerHTML = "Ending Quarter with" + " : Rs. " + Math.round(resp.data[r+79].name)

//-------------------------------------------------------------------------------------------------
            // Get the table element
/*            const table = document.getElementsByClassName('data-table');


            const row = table.insertRow();
            const cell1 = row.insertCell(); const cell2 = row.insertCell(); const cell3 = row.insertCell(); const cell4= row.insertCell(); const cell5 = row.insertCell(); const cell6 = row.insertCell(); const cell7 = row.insertCell(); const cell8 = row.insertCell(); const cell9 = row.insertCell(); const cell10 = row.insertCell();
            cell1.textContent = "Stock Name";
            cell2.textContent = "Buy Value";
            cell3.textContent = "Buy Date";
            cell4.textContent = "Current Value";
            cell5.textContent = "Sold Date";
            cell6.textContent = "Sold Value";
            cell7.textContent = "Profit %";
            cell8.textContent = "Invested Amount";
            cell9.textContent = "Balance Amount";
            cell10.textContent = "Profit";

            r = serialNumber;
            for (let i = 1; i <= 100; i++) {
                if(resp.data[r].name == "") {
                    break;}

                    //alert(resp.data[r].name)
                const row = table.insertRow();
                
                  
                    const cell1 = row.insertCell(); const cell2 = row.insertCell(); const cell3 = row.insertCell(); const cell4= row.insertCell(); const cell5 = row.insertCell(); const cell6 = row.insertCell(); const cell7 = row.insertCell(); const cell8 = row.insertCell(); const cell9 = row.insertCell(); const cell10 = row.insertCell();
                    
                    cell1.textContent = resp.data[r].name;
                    cell2.textContent = 'Rs. '+resp.data[r+1].name;
                    if(resp.data[r+2].name != "")
                    {cell3.textContent = Number(resp.data[r+2].name.substr(8,2))+1+"-"+resp.data[r+2].name.substr(5,2)+"-20"+resp.data[r+2].name.substr(2,2);}
                    cell4.textContent = 'Rs. '+resp.data[r+3].name;
                    if(resp.data[r+4].name != "")
                    {cell5.textContent = Number(resp.data[r+4].name.substr(8,2))+1+"-"+resp.data[r+4].name.substr(5,2)+"-20"+resp.data[r+4].name.substr(2,2);}
                    
                    cell6.textContent = 'Rs. '+resp.data[r+5].name;
                    cell7.textContent = Math.round((resp.data[r+6].name*100))+" %";

                    cell8.textContent = 'Rs. '+resp.data[r+7].name;
                    cell9.textContent = 'Rs. '+resp.data[r+8].name;

                    cell10.textContent = "Rs. "+Math.round((resp.data[r+9].name));
                    r=r+13

            }*/




        });