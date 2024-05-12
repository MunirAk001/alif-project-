import React, { useEffect, useState } from "react";

import zvezda from "../../assets/zvezda.svg";
  
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import "../../App.css";

import { useDispatch, useSelector } from "react-redux";

import { addProduct, getData ,deleteProduct} from "../../counters/counter";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Cnt, setCnt } from "../../Layout/Layout";

 export let search
 export let setSearch
 export let darkMode;
 export let setDarkMode;
 
 const Home = () => {
   [darkMode, setDarkMode] = useState(false);
   
   // Your component code here

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const productsCart = useSelector((state) => state.product.productsCart);
[search, setSearch] = useState("");



  


  useEffect(() => {
    dispatch(getData());
  }, []);


  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
    setCnt(Cnt + 1); 

  };





  return (
    <div>
      <div className="pl-[100px] dark:bg-gray-800 pr-[100px] pt-[50px] pb-[50px] sm:p-[10px] sm:mt-[10px]">
     
        <div className="flex justify-between items-center mt-[50px] sm:flex-wrap flex-wrap">
          {product
            ?.filter((elem) => {
              return elem.name.toLowerCase().trim().includes(search);
            })
            .map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="
                  // product  
                    dark:bg-gray-900 w-[24%] border-[1.5px] mt-[50px] h-[70vh] rounded-md  p-[10px]  sm:h-[68vh] sm:w-[70%] sm:m-[auto] sm:mt-[10px]"
                >
                  <div className="h-[30vh] rounded-md ">
                 


                    <img
                      className="image w-[100%] m-[auto]  rounded-[6px]  relative h-[270px]   block object-cover"
                      src={`${elem.productImage}`}
                      alt=""
                    />
                    <div
                       className="cart w-[92%]  h-[30px] absolute top-[250px] rounded-b-[6px]  items-center gap-[20px] justify-center bg-[#bb7a1a] text-[white] hidden  bottom-3  cursor-pointer"
                    >
                     <h1 onClick={() => handleAddToCart(elem)} className="text-[18px] text-center ">
                      Add to Cart
                    </h1>
                    </div>
                  </div>


                  <div className="  mt-[110px] flex  justify-between items-center  " >

                    <h1 className="text-[18px]  font-[500] overflow-auto  ">
                      {elem.name}
                    </h1>
                    <div className={darkMode ? "dark:text-white" : ""}>
                    <Link to={`cart/${elem.id}`}>
                        <IconButton
                          sx={{ color: darkMode ? 'white' : 'black' }}
                        
                        >
                          <RemoveRedEyeIcon
                            sx={{ width: "30px",color:"#fbb64e",   height: "30px" }}
                          />
                        </IconButton>
                      </Link>
    </div>
                  </div>
                  <div className="flex  justify-between  items-center   pt-[10px] pb-[5px]">
                    <p   onClick={""}className="text-[16px] dark:text-[#bb7a1a] block   text-[#ffb545] font-[500]">{`${"$ "}${
                                   elem.DiscontedPrice


                    }`}
                    
                    <span class="mb-0.5 text-red-500  pl-7 line-through">${
             elem.price
            }</span>
                    </p>
                
                    
                    
                  
<div className=" w-[30%]  flex items-center justify-between it">

 <p className="h-[20px] w-[20px] ml-10 rounded-full " style={{ backgroundColor: elem.color }}>




</p>

</div>

                  </div>











              
                </div>





              );
            })}



        </div>
        <div>
          <button className="w-[200px] h-[50px] bg-[#fbb64e] rounded-md text-[white] m-[auto] mt-[20px] block hover:bg-red-700">
            More Products
          </button>
        </div>
      </div>
  
    </div>

// ///////////////////////////////////




  );
};
export default Home;
