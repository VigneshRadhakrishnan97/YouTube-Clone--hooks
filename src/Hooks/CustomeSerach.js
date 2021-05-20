import {useState,useEffect} from "react";
import axios from "../API/Youtube";


const CustomeSerach = (SearchTerm) => {

    const [ Video, setVideo] = useState([]);

    useEffect( ()=>{
        Serach(SearchTerm);
    },[SearchTerm]);

    const Serach = async (Text) => {
        const response = await axios.get("/search", {
          params: {
            q: Text,
          },
        });
        ;
        setVideo(response.data.items);
        
        
      };

      return [Video, Serach];

}


 export default CustomeSerach;