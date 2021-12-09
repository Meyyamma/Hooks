import  React, {useState} from "react";

const StateTutorial = () => {
    // First Example
//    // let counter = 0;  // variable initialization
//     const [counter, setCounter] = useState(0); // Always pass the initial value in useState function
//     // Above line "counter" is State / Variable
//     const increment = () => {
//         // counter = counter +1;
//         // console.log(counter); 

//         setCounter(counter+1);  // whenever we click on Increment button the initial value gets changed as setCounter value
//     }
    

    // Second Example

    const [inputValue, setinputValue]  = useState("Changing Text");

    let onchange = (event) => {
        const newValue = event.target.value;
        setinputValue(newValue);
    };

     return (
    <div>
         {/* {counter}
        <button onClick={increment}> Increment </button> */}
        {inputValue}
        <input placeholder="Enter something..." onChange={onchange}></input>
        
    </div>
    );
    //return <div>Hello World</div>
};

export default StateTutorial;