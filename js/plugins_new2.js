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
            console.log(resp)



            // Get the table element
            const table = document.getElementById('data-table');
            let r = 123;
            // Create 12 rows
            for (let i = 1; i <= 13; i++) {
                const row = table.insertRow();
                
                // Create 5 cells in each row
                for (let j = 1; j <= 9; j++) {
                    
                    console.log('Value of r :'+r)
                    const cell = row.insertCell();
                    // Sample data: Display row and column index in each cell
                    if(r==(124+((i-1)*20)) && r != 124 && (resp.data[r].name != null))
                        cell.textContent = 'Rs. '+resp.data[r].name;
                    else if(r==(125+((i-1)*20)) && r != 125 && (resp.data[r].name != null))
                        cell.textContent = resp.data[r].name.substr(2,8);
                    else if(r==(126+((i-1)*20)) && r != 126 && (resp.data[r].name != null))
                        cell.textContent = 'Rs. '+resp.data[r].name;
                    else if(r==(128+((i-1)*20)) && r != 128 && (resp.data[r].name != null))
                        cell.textContent = Math.round((resp.data[r].name*100))+" %";
                    else if(r==(131+((i-1)*20)) && r != 131 && (resp.data[r].name != null))
                        cell.textContent = "Rs. "+Math.round((resp.data[r].name));
                    else 
                        cell.textContent = resp.data[r].name;
                    
                    r=r+1;
                }
                r=r+11;
            }


        });