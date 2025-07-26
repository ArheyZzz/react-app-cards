import {useState} from "react";
import {delayFn} from "../helpers/delayFn.js";


export const useFetch =  (callback) => {

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('')

   const fetchFN = async (arg) => {
      try {
         setIsLoading(true);
         setError('');
         await delayFn(500);

         const response = await callback(arg)

         return response;

      } catch (error) {
         setError(error.message);
      } finally {
         setIsLoading(false);
      }

   }

   return [fetchFN, isLoading, error]
}