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
window.addEventListener('load', () => {
    // Simulating a delay for the JavaScript execution (like fetching data or performing some setup)
    setTimeout(() => {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';

        // Show the content after the JavaScript is fully executed
        //document.getElementById('content').style.display = 'block';
    }, 8000);  // Simulating a 2-second delay (can be adjusted or removed for real cases)
});

        // Sample JavaScript to populate the table
        document.addEventListener('DOMContentLoaded', async function () {


            const xValues = ['10/11/2023','12/31/2023','7/22/2024','10/16/2024','1/14/2025','1/17/2025'];
const yValues = [1000000,1212323,1474302,1846416,1979659,2044202];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 1000000, max:2400000},font: {weight: 'bold', // Makes x-axis values bold
    },}],
    },
  }
});


  // Get the table element from the iframe
  //const iframe = document.querySelector('iframe');
  //const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //const table = iframeDocument.getElementById('data-table');

            let n = await fetch("https://script.google.com/macros/s/AKfycbzWnu5by_TrF9n5pBId1-JuxvGuSsg8CEWwDM-XpS4XB9XfZlTJynpx4rtXHnu66kmPuQ/exec")
            let resp = await n.json()
            //console.log(resp)

            //
            const row1 = document.getElementById('row1');
            row1.innerHTML = resp.data[16].name + " : Rs. " + Math.round(resp.data[18].name)
            const row2 = document.getElementById('row2');
            row2.innerHTML = resp.data[29].name + " : Rs. " + Math.round(resp.data[31].name) + "     ("+parseFloat((resp.data[31].name/resp.data[18].name)*100).toFixed(2)+ "%)"
            const row3 = document.getElementById('row3');
            row3.innerHTML = resp.data[42].name + " : Rs. " + Math.round(resp.data[44].name)
            //console.log(resp.data[69].name + " : " + Math.round(resp.data[71].name))

    


        });

                // Button click handlers
                function handleLeftButtonClick() {
                    
                    var fileName = document.getElementById('file').textContent;
                    //alert(Number(fileName));
                    //console.log(fileName);
                    const file = document.getElementById('file');
                    if(Number(fileName)>1)
                        {file.innerHTML=Number(fileName)-1;
                        console.log(Number(fileName)-1);}
                    else
                        file.innerHTML=Number(fileName)
                    document.querySelector('iframe').src = file.innerHTML+'.html';
                }
        
                function handleRightButtonClick() {
                    //alert(Number(fileName));
                    //alert('Right Button Clicked!');
                    var fileName = document.getElementById('file').textContent;
                    //console.log(fileName);
                    const file = document.getElementById('file');

                    if(Number(fileName)<5)
                        {file.innerHTML=Number(fileName)+1;
                        console.log(Number(fileName)+1);}
                    else
                        file.innerHTML=Number(fileName)
                    document.querySelector('iframe').src = file.innerHTML+'.html';
                }