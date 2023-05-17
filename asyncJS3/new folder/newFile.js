const jsonData = document.getElementById('json-data');

fetch("https://anapioficeandfire.com/api/characters/583").then((response)=> {
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(data)
    jsonData.textContent = JSON.stringify(data, null, 2);
})



