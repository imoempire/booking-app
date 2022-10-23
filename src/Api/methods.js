import axios from "axios";

const client = axios.create({
   baseUrl: 'https://mybookingapps.netlify.app'
});

export const bookTable = async (formData) => {
   try {
      const {data} = await axios.post(`https://mybookingapps.netlify.app/book`, formData);
      return data;
   } catch (error) {
      const {response} = error;
      if (response?.data){
         return response.data
      }
      return {error: error.message || error};
   }
   
}

export const getItem = async (itemId) => {
   try {
   const {data} = await client(`https://mybookingapps.netlify.app/${itemId}`);
   return data;
   } catch (error) {
      const {response} = error;
      if(response?.data){
         return response.data;
      }
      return {error: error.message || error }; 
   }
}

export const updatePost = async (ItemId, formData) => {
   try {
   const {data} = await client.put(`https://mybookingapps.netlify.app/${ItemId}`, formData);
   return data;
   } catch (error) {
      const {response} = error;
      if(response?.data){
         return response.data;
      }
      return {error: error.message || error }; 
}
}

export const addSeats = async (formData) => {
   try {
      const {data} = await axios.post(`https://mybookingapps.netlify.app/seats`, formData);
      return data;
   } catch (error) {
      const {response} = error;
      if (response?.data){
         return response.data
      }
      return {error: error.message || error};
   }

}