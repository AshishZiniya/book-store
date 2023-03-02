import React from "react";

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Ashish</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'Dclass'},
        React.createElement('h1',null,'Hello Ashish')
    )
}

export default Hello