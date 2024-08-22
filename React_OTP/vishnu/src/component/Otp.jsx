import { useState } from "react";
import "../App.css"
import { useRef } from "react";
import { useEffect } from "react";

const Otp = () => {

    const [inputField, setInputField] = useState(new Array(6).fill(""))
    const ref = useRef([])

    

    function handleInput (e, index) {
        const keyName = e.key;
        let copyfield = [...inputField]
        
        console.log(keyName)
        if(keyName === "ArrowLeft") ref.current[index-1].focus();
        if(keyName === "ArrowRight") ref.current[index+1].focus();

        if(keyName === "Backspace"){
            copyfield[index] = " "
            setInputField(copyfield);
            if(index > 0) ref.current[index-1].focus();
            return;
        }
        if(isNaN(keyName)){
            return;
        }
        copyfield = [...inputField]
        copyfield[index] = keyName;
        setInputField(copyfield);
        if(index < inputField.length) ref.current[index+1].focus()
    }

    useEffect(() => {
        ref.current[0].focus()
    }, [])
    return (
        <div>
           {
            inputField.map((value, index) => {
                return <input key={index} 
                ref={(currentInput) => (ref.current[index] = currentInput)}
                 onKeyDown={(e) => handleInput(e, index)} type="text"  placeholder="" className="h-12 w-12 mx-2 mt-12 text-center" value={value}  />

            })
           }
        </div>
    )
}

export default Otp;