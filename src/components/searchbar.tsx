import { useState } from "react"
import {Search, X} from "lucide-react"
 


// have two stylings
// have a trigger
// when trigger is activated, the styling cycles

export default function Searchbar () {

    // Active is a boolean variable
    // setActive is a function to change value of Active
    // setActive runs only when clicked on the div(Searchbar) because of onClick
    // when (something happens) open = !open
    // setActive is used to render frontend change 



    let [Active, setActive] = useState(false);
   
    // const default function setActive ()
    //     {
    //         Active=!Active
    //     }


    return (

        // onClick alone will change the value of Active but not store it
        // having onClick run setActive will store the changed value of Active
        <div className={`flex relative justify-between rounded-full bg-zinc-800 ease-out transition-all duration-300
        ${Active 
            ? "w-80" 
            : "w-10"}
            `}>
            <div className="flex">
                <button onClick={() => setActive(!Active)}
                        className={`flex p-2 items-center justify-center rounded-full
                        ${Active
                            ? "text-gray-500"
                            : "text-white"
                        }`}>
                    {Active 
                    ? <X size={24}/>
                    : <Search size={24}/>}
                </button>

                <input type="Text" placeholder="Search" className={` w-full font-light text-lg bg-transparent outline-none transition-opacity duration-300
                                                                    ${Active
                                                                        ? "opacity-100"
                                                                        : "pointer-events-none opacity-0"
                                                                    }`} /> 

            </div>

            <div className={` flex p-2 items-center justify-center rounded-full text-white
                ${Active
                    ? ""
                    : "hidden"
                }
                `}>
                <Search size={24}/>
            </div>

        </div>

    )
}

// let open = false;
// open=!open; console.log(open);