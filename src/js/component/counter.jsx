import React from "react";

const counter = () => {

    window.onload = function () {
  
       
        
      
      }
    
    return(
        <>
          <div className="wholeCounter d-flex justify-content-center justify-content-around">
            <div className="clockIcon">Clock</div>
            <div className="ones">0</div>
            <div className="tens">0</div>
            <div className="hundreds">0</div>
            <div className="thousands">0</div>
            <div className="tenThousands">0</div>
          <div className="hundredThousands">0</div>
          </div>
        </>
    );
}

export default counter