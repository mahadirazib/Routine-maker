


document.querySelector("button").addEventListener("click",()=>{
    let row = Number(document.querySelector("#NumberOfRow").value);
    let column = Number(document.querySelector("#NumberOfColumn").value);
    let i,j;
    let tableHtml = "";
    for(i=0;i<row;i++){
        tableHtml = tableHtml + "<tr>"
        for(j=0;j<column;j++){
            if(i==0){
                tableHtml = tableHtml + "<td> <textarea placeholder='Type' class='tableHeader' cols='15' rows='1'></textarea> </td>"
            }else{
                tableHtml = tableHtml + "<td> <textarea placeholder='Type' class='tableBody' cols='15' rows='1'></textarea> </td>"
            }
        }
        tableHtml = tableHtml + "</tr>"
    }
    document.querySelector("#Table").innerHTML = tableHtml;
    document.querySelector("#forButton").innerHTML = "<button id='proceedButton' style='display:block; margin: 20px auto;'>Proceed</button>";


    document.querySelector("#proceedButton").addEventListener("click", function() {
        let i = 0;
        for(i=0;i<tx.length;i++){
            document.querySelectorAll("textarea")[i].innerHTML = document.querySelectorAll("textarea")[i].value;

            document.querySelectorAll("textarea")[i].style.height = "auto";
            document.querySelectorAll("textarea")[i].style.height = document.querySelectorAll("textarea")[i].scrollHeight;

            document.querySelectorAll("textarea")[i].style.width = "auto";
            document.querySelectorAll("textarea")[i].style.width = document.querySelectorAll("textarea")[i].scrollWidth;
                
        }

        var node = document.getElementById('Table');

        domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.querySelector("#imageHolder").innerHTML = "<p>Click on the Image to download the image.</p> <a href="+ img.src +" download><img src="+ img.src +" alt='Routine'></a>";
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });


    });

    


});


let tx = document.getElementsByTagName("textarea");


