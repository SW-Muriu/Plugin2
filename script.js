
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

console.log("LUBADFF");

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // DOM is already loaded, create table rows
    myArray.forEach(urlData => {
        const tableRow = createTableRows(urlData);
        urlTable.appendChild(tableRow);
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