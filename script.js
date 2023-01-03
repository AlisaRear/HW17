( function () {
const city = document.getElementById('city');
const country = document.getElementById('country');
const budget = document.getElementById('budget');
const dateStart = document.getElementById('dateStart');
const dateEnd = document.getElementById('dateEnd');
const persons = document.getElementById('persons');
const transferType = document.getElementById('transferType');
const saveTravel = document.getElementById('saveTravel');
const output = document.getElementById('output');
const storageVal = localStorage.getItem("travel");
const database = (storageVal) ? JSON.parse(storageVal) : [];

const printDatabase = (database) => {
    return [...database.map((value) => {
        return `<div id="output" class="p-3 mb-2 bg-success rounded">
            <ul class="list-unstyled">
                <li class="fs-4 fw-bold">From Haifa to ${value.city}</li>
                <li class="fs-5">Expected budget: ${value.budget} ILS</li>
                <li class="fs-5">${value.dateStart} - ${value.dateEnd} | ${value.persons} persons | ${value.transferType}</li>
            </ul>
        </div>`
    })].join('');
    }

output.innerHTML = printDatabase(database);

function addRecord() {
    let travelCard = {
        city: city.value,
        country: country.value,
        budget: budget.value,
        dateStart: dateStart.value,
        dateEnd: dateEnd.value,
        persons: persons.value,
        transferType: transferType.value
    }

    database.push(travelCard);
    localStorage.setItem("travel", JSON.stringify(database))
    output.innerHTML = printDatabase(database);
    city.value = '';
    country.value = '';
    budget.value = '';
    dateStart.value = '';
    dateEnd.value = '';
    persons.value = '1';
    transferType.value = '---';
}

saveTravel.onclick = addRecord;

})();