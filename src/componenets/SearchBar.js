import React,{useState} from "react";

 const Searchbar =({onSubmitSerach})=> {
  //state = { Text: "" };

  const [Text,setText]=useState("");

  

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmitSerach(Text);
  };

  
    return (
      <div className="ui segment">
        <form onSubmit={onSubmitForm} className="ui form">
          <div className="field">
            <label>Search Text</label>
            <input
              type="text"
              onChange={(e) => {setText(e.target.value);}}
              value={Text} placeholder="Children"
            ></input>
          </div>
        </form>
      </div>
    );
  
}

export default Searchbar;
