import axios from "axios";
// import client from "./clients";

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