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

    const render = () => {
        output.innerHTML = printDatabase(database);
        document.querySelectorAll('.details').forEach((value =>
                value.addEventListener('click',()=>{
                    const id = Number(value.getAttribute('data-index'));
                    alert(JSON.stringify(database[id]));
                })
        ))
        document.querySelectorAll('.remove').forEach((value =>
                value.addEventListener('click', ()=>{
                    const id = Number(value.getAttribute('data-index'));
                    database.splice(id, 1);
                    localStorage.setItem("travel", JSON.stringify(database));
                    render();
                })
        ))
    }

    const printDatabase = (database) => {
        return [...database.map((value, index) => {
            return `<div id="output" class="p-3 mb-2 bg-success rounded" data-index="${index}">
            <ul class="list-unstyled">
                <li class="fs-4 fw-bold" style="display: flex">
                      <h4 style="flex-grow: 1">From Haifa to ${value.city}</h4>
                      <i class="bi bi-three-dots-vertical details" data-index="${index}"></i>
                      <i class="bi bi-pencil-square edit" data-index="${index}"></i>
                      <i class="bi bi-x-circle remove" data-index="${index}"></i>
                </li>
                <li class="fs-5">Expected budget: ${value.budget} ILS</li>
                <li class="fs-5">${value.dateStart} - ${value.dateEnd} | ${value.persons} persons | ${value.transferType}</li>
            </ul>
        </div>`
        })].join('');
    }

    render();

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
        render();
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