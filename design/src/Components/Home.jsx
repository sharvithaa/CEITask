import React, { use, useState ,useEffect} from "react";

export default function Home()
{
    const[step,setStep]=useState(1);
    const [bean,setBean]=useState(null);
    const [coffee,setCoffee]=useState(null);
    const[price,setPrice]=useState(null);
    
    const selectBean=(bean)=>
    {
        setBean(bean);
        setStep(2);
    }

    const selectCoffee=(coffee)=>
    {
        setCoffee(coffee);
        setStep(3);
    }
    
    {/*Price for bean and coffee is set here*/}
    const allocatePrice=(bean,coffee)=>
    {
        if (!bean || !coffee) 
        {
            setPrice(0);
            return;
        }
        const basePrice= bean==='Arabica'?500:300; 
        const typePrice=coffee==='Latte'?1000:500; 
        setPrice(basePrice+typePrice);
    }

    useEffect(() =>
    {
        if (bean && coffee) 
        {
          allocatePrice(bean, coffee);
        }
    }, [bean, coffee]);

    return(
        <>
          <div className="m-12 p-12">
            <h1 className="font-sans text-5xl text-indigo-400 flex items-center justify-center">Welcome to Coffee Shop</h1>
          </div>
          {/* the menus shows up one after the another */}
           {step===1 &&( 
            <div className="font-sans text-xl m-12 flex items-center justify-center">           
                <h2>Select Coffee bean:</h2>
                <button onClick={()=>selectBean("Arabica")} className=" m-2 p-2 bg-purple-300 rounded-xl hover:animate-bounce " >Arabica</button>
                <button onClick={()=>selectBean("Robusto")} className=" m-2 p-2 bg-purple-300 rounded-xl  hover:animate-bounce" >Robusto</button>
            </div>)
           }

           {step===2 &&(
            <div className="font-sans text-xl m-12 flex items-center justify-center">
                <h2>Select Coffee Type:</h2>
                <button onClick={()=>selectCoffee("Latte")} className="font-sans text-xl m-2 p-2 bg-purple-300 rounded-xl hover:animate-bounce " >Latte</button>
                <button onClick={()=>selectCoffee("Espresso")} className="m-2 p-2 bg-purple-300 rounded-xl  hover:animate-bounce" >Espresso</button>
            </div>)
           }

           {step===3 && (
            <div className="m-12 flex items-center justify-center">
            <div >
                <h2 className="font-sans text-xl m-4">Order Summary:</h2>
                <h4 className="p-2">Coffee Bean Name:<strong>{bean}</strong></h4>
                <h4 className="p-2">Coffee Type Name:<strong>{coffee}</strong></h4>
                <h4 className="p-2">Price:<strong>{price}</strong></h4>
            </div>
            </div>)
           }     

        </>
    )
}