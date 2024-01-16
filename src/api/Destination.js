
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

  
          const response = await axios.post(`${this.url}/admin/add-destination`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }) 
          console.log("server response:",response)
          return response
      } catch (error) {
         if(error.response){
            console.log("server responed:",error.response)
            return error.response

         }
         else if(error.request){
            // console.log("client side error ", error.request);
            console.log(error)
            return null
         }
        
      }
    }

    async getAllDestination(){
        try {
          const data = await axios.get(`${this.url}/admin/getalldestination`);
          console.log("data",data)
          return data;
        } catch (error) {
          if(error.response){
            console.log("server side error",error.response)
          }
          console.log("error while fectching destination",error);
         return null;
        }
    }

    async getDestination(id){
      try {
        const data = await axios.get(`${this.url}/admin/getdestination/${id}`);
        console.log("data",data)
        return data;
      } catch (error) {
        if(error.response){
          console.log("server side error",error.response)
        }
        console.log("error while fectching one destination",error);
       return null;
      }
    }

    async UpdateDestination(images,data,id){
      try {
       
        console.error("in function",data)
        const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
  
  const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

  formData.append(key, serializedValue);
});

   
    images.forEach((image) => {
      formData.append(image.name, image.File);
    });

  
          const response = await axios.put(`${this.url}/admin/update/${id}`,formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }) 
          console.log("server response:",response)
          return response
      } catch (error) {
         if(error.response){
            console.log("server responed:",error.response)
            return error.response

         }
         else if(error.request){
            // console.log("client side error ", error.request);
            console.log(error)
            return null
         }
        
      }
    }
}

const destination = new Destiantion("http://localhost:3000")

export {destination}