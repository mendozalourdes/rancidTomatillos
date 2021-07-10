const baseURL = "https://rancid-tomatillos.herokuapp.com/api/v2"
let apiCalls = {


    checkForErr (response)  {
        if(response.status >= 500) {
          return 'Uhoh! Something is wrong with our system. Please try back later.'
        } else if (!response.ok) {
          return 'Something went wrong. Please try again later.'
        } else {
          return response.json()
        }
      },
    
    fetchAPIData(type) {
        return fetch(`${baseURL}${type}`)
        .then(response => response.json())
      }


}


export default apiCalls;