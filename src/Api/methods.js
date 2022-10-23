import axios from "axios";

const client = axios.create({
   baseUrl: 'http://localhost:8560'
});

export const bookTable = async (formData) => {
   try {
      const {data} = await axios.post(`http://localhost:8560/book`, formData);
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
   const {data} = await client(`http://localhost:8560/${itemId}`);
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
   const {data} = await client.put(`http://localhost:8560/${ItemId}`, formData);
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
      const {data} = await axios.post(`http://localhost:8560/seats`, formData);
      return data;
   } catch (error) {
      const {response} = error;
      if (response?.data){
         return response.data
      }
      return {error: error.message || error};
   }

}