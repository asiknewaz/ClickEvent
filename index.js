// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response =>response.json())
// .then(json => console.log(json))


const loadData = async()=> {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    
    // fetch('placeholder.typihttps://jsoncode.com/todos/1')
        
        // .then(response => response.json())
        // .then(json => console.log(json))
}

const loadData2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}