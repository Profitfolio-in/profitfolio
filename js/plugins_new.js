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

            let n = await fetch("https://script.google.com/macros/s/AKfycbww26AkruYOb3fGAL03BF5z0oL07tmmPUcw9eCaK8e-mf-6qvUG3yrrmOtfk8aSQv-jUg/exec")
            let resp = await n.json()
            //console.log(resp)

            //
            const row1 = document.getElementById('row1');
            row1.innerHTML = resp.data[29].name + " : Rs. " + resp.data[31].name
            const row2 = document.getElementById('row2');
            row2.innerHTML = resp.data[49].name + " : Rs. " + Math.round(resp.data[51].name) + "     ("+parseFloat((resp.data[51].name/resp.data[31].name)*100).toFixed(2)+ "%)"
            const row3 = document.getElementById('row3');
            row3.innerHTML = resp.data[69].name + " : Rs. " + Math.round(resp.data[71].name)
            //console.log(resp.data[69].name + " : " + Math.round(resp.data[71].name))

    


        });

                // Button click handlers
                function handleLeftButtonClick() {
                    //alert('Left Button Clicked!');
                    var fileName = document.getElementById('file').textContent;
                    //console.log(fileName);
                    const file = document.getElementById('file');
                    file.innerHTML=Number(fileName)-1;
                    //console.log(Number(fileName)-1);
                    document.querySelector('iframe').src = file.innerHTML+'.html';
                }
        
                function handleRightButtonClick() {
                    //alert('Right Button Clicked!');
                    var fileName = document.getElementById('file').textContent;
                    //console.log(fileName);
                    const file = document.getElementById('file');
                    file.innerHTML=Number(fileName)+1;
                    //console.log(Number(fileName)+1);
                    document.querySelector('iframe').src = file.innerHTML+'.html';
                }