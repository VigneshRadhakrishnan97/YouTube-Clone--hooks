import React,{useState,useEffect} from "react";
import Searchbar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideDetails";
import SerachVideo from "../Hooks/CustomeSerach"

const App =()=> {
  //state = { Video: [], selectedvideo: null };

const [ selectedvideo, setselectedvideo] = useState(null);

const [Video, Search]=SerachVideo("child");

useEffect(()=>{
  setselectedvideo(Video[0]);

},[Video]);



  
    return (
      <div className="ui container ">
        <Searchbar onSubmitSerach={Search} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={selectedvideo} />
            </div>
            <div className="five wide column">
              <VideoList Videos={Video} click={(selectvideo) => {setselectedvideo(selectvideo);}} />
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default App;
