import axios from "axios"

class Destiantion{
    constructor(url){
        this.url = url
    }

    async AddDestination(images,data){
      try {

        const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
  // Conditionally stringify only if the value is an object
  const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

  formData.append(key, serializedValue);
});

    // Append images to FormData
    images.forEach((image) => {
      formData.append(image.name, image.File);
    });

  
          const response = await axios.post(`${this.url}/home/addbannerslide`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }) 
          console.log("server response:",response)
          return response
      } catch (error) {
         if(error.response){
            console.log("server responed:",error.response)
            return null
         }
         else if(error.request){
            console.log("client side error ", error.message);
            return null
         }
         else{
            return null
         }
      }
    }
}

const destination = new Destiantion("http://localhost:3000")

export {destination}