const baseURL = "https://rancid-tomatillos.herokuapp.com/api/v2"
let apiCalls = {


    checkForErr (response)  {
        if(response.status >= 500) {
          console.log("BEYEYAKSJ", response)
          return "Our servers are currently down. Please try again."
        } else if (!response.ok) {
          return 'Something went wrong. Please try again later.'
        } else {
          return response.json()
        }
      },
    
    fetchAPIData(type) {
        return fetch(`${baseURL}${type}`)
        .then(this.checkForErr)
      },

      // fetchAPIData2(type) {
      //   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1${type}`)
      //   .then(this.checkForErr)
      // }
}


export default apiCalls;
