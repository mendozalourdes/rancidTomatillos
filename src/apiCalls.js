let apiCalls = {
    
    fetchAPIData(type) {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${type}`)
        .then(response => response.json())
      }


}


export default apiCalls;