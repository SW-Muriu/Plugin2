function getQueryParams(url) {
    const queryParams = {};

    // Check if the URL has query parameters
    if (url.includes('?')) {
        // Get the query string part of the URL
        const queryString = url.split('?')[1];

        // Split the query string into key-value pairs
        const pairs = queryString.split('&');

        // Loop through each pair
        pairs.forEach(pair => {
            // Split the pair into key and value
            const [key, value] = pair.split('=');

            // Add the key-value pair to the queryParams object
            queryParams[key] = decodeURIComponent(value);
        });
    }

    return queryParams;
}

function storeUrls(url) {
    let arrayUrls = [];

    // Check if urls.json exists in local storage (optional, for backup)
    if (localStorage.getItem('urls')) {
        arrayUrls = JSON.parse(localStorage.getItem('urls'));
    }

    // Get query string parameters
    const queryParams = getQueryParams(url);

    // Push the URL and its key-value parameters object to arrayUrls
    arrayUrls.push([url, queryParams]);
    localStorage.setItem('urls', JSON.stringify(arrayUrls));
}



function createTableRows(urlData) {
    const tableRow = document.createElement('tr');

    // Create cell for original URL
    const urlCell = document.createElement('td');
    urlCell.textContent = urlData[0];
    tableRow.appendChild(urlCell);

    // Create cell for query string parameters
    const queryParamsCell = document.createElement('td');
    const queryParamsList = document.createElement('ul');

    for (const key in urlData[1]) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${urlData[1][key]}`;
        queryParamsList.appendChild(listItem);
    }

    queryParamsCell.appendChild(queryParamsList);
    tableRow.appendChild(queryParamsCell);

    return tableRow;
}

// Loop through myArray and create table rows


const myArray = JSON.parse(localStorage.getItem("urls"))

const urlTable = document.getElementById('url-table');

console.log("LUBADFF", myArray);

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // DOM is already loaded, create table rows
    myArray.forEach(urlData => {
        const tableRow = createTableRows(urlData);
        // urlTable.appendChild(tableRow);
    });
} else {
    // DOM is not loaded yet, attach an event listener
    document.addEventListener('DOMContentLoaded', () => {
        myArray.forEach(urlData => {
            const tableRow = createTableRows(urlData);
            urlTable.appendChild(tableRow);
        });
    });
}


var current_url = document.location.href;
var current_path = document.location.protocol;

storeUrls(current_url);








console.log(JSON.parse(localStorage.getItem("urls")));

alert(`The current_url is ${current_url} and the current protocol is ${current_path}`);
