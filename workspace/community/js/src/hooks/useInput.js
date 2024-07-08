import {useState} from "react";

const useInput = (initialValue = null) => {
    const [value,setValue] = useState(initialValue);
    // const handler = useCallback((e)=>{
    //     setValue(e.target.value);
    //     console.log(e.target.value);
    // },[]);
    const handler = (e)=>{
        setValue(e.target.value);
        console.log(e.target.value);
    }
    // console.log(handler)
    return [value,handler,setValue];    
}

export default useInput;
