document.getElementById('button').addEventListener('click',

loadData);


function loadData() {
    // Creat an xhr object
    const xhr = new XMLHttpRequest();


    //  OPEN -> IS WHERE WE WILL SPECIFY THE URL AND THE REQUEST WE WANT TO USE.
    // ===> true for  asynchronous
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    // Optional - Used for spinners/loader on the browser when loading website

    // xhr.onprogress = function() {
    //     console.log('READYSTATE', xhr.readyState);
    // }


    xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);

            document.getElementById('dataOutput').innerHTML = `<h1>${this.responseText}</h1>`;

        }
    }



        // ===> Old method
    //     xhr.onreadystatechange = function () {
    // console.log('READYSTATE', xhr.readyState);
    //         if (this.status === 200 &&  this.readyState === 4) {
    //         console.log(this.responseText);
                
    //         }
    //     }



    // ===> this will only run if anything goes wrong
    xhr.onerror = function() {
        console.log('Request error...');
    }



    xhr.send();



    // =====>readyState Values <=====
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 3: request finished and response is ready



    // HTTP statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}