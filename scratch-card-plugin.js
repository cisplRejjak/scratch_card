document.addEventListener('DOMContentLoaded', function () {
    var cdnUrl = "https://github.com/cisplRejjak/scratch_card/";
    var contentContainer = document.getElementById('scratch-card');
    var link = document.createElement('link');
    var script = document.createElement('script');
    var htmlFilePath = `${cdnUrl}lib/app.html`;
    var xhr = new XMLHttpRequest();

    script.src = `${cdnUrl}lib/app.js`;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `${cdnUrl}lib/app.css`; 
    document.head.appendChild(link);
    xhr.open('GET', htmlFilePath, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            contentContainer.innerHTML = xhr.responseText;
            document.body.appendChild(script);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Network request failed');
    };
    xhr.send();
});
