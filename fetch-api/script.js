function fetchApiData() {
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#fill_list')

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id', item.results);
            li.innerHTML = item.name;
            list.appendChild(li);
        })
    })
}