import axios from "axios";
// import client from "./clients";

const client = axios.create({
   baseUrl: 'https://mybookingapps.herokuapp.com'
});

export const bookTable = async (formData) => {
   try {
      const {data} = await axios.post(`https://mybookingapps.herokuapp.com/book`, formData);
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
   const {data} = await client(`https://mybookingapps.herokuapp.com/${itemId}`);
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
   const {data} = await client.put(`https://mybookingapps.herokuapp.com/${ItemId}`, formData);
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
      const {data} = await axios.post(`https://mybookingapps.herokuapp.com/seats`, formData);
      return data;
   } catch (error) {
      const {response} = error;
      if (response?.data){
         return response.data
      }
      return {error: error.message || error};
   }

}