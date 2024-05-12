import React, { useEffect, useState } from "react";
import hqd from "../../assets/hqd1.svg";
import hgr from "../../assets/hgr.svg";
import zvezda from "../../assets/zvezda.svg";
import moshin from "../../assets/iconmoshin.svg";
import strelka from "../../assets/strelka.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";



import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProductById } from "../../counters/counter";
import { Cnt, setCnt } from "../../Layout/Layout";

const Card = () => {
  const { id } = useParams();
  const [quantity,setQuantity] = useState(0);
  const dispatch = useDispatch();
  const byId = useSelector(state => state.product.products);


  useEffect(() => {
    dispatch(getProductById(id));
  }, []);


  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
    setCnt(Cnt + 1); 

  };

  const handleClick = () => {
    setQuantity(quantity+1);
  }
  const handleClick2 = () => {
    setQuantity(quantity-1)
  };
  return (
   

 <div class="  mb-10       w-full  h-[120vh] sm:py-8 lg:py-12">
  <div className="h-20  flex  items-center w-full pl-20  ">

  <h1 className="text-[20px] font-[400]">
          <span className="text-[gray]">Home / </span> 
Information
         </h1>

  </div>
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    <div class="  h-[100vh] w-full  flex  gap-4 justify-between ">
      {/* <!-- images - start --> */}
      <div class="    h-[100%] w-[50%] mt-10  space-y-4">
        <div class="relative overflow-hidden rounded-lg  h-[60%] bg-gray-100">
          <img className="h-full   w-full"  src={byId.productImage} loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

          <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
        </div>

        <div class="flex justify-between  h-[30%]   gap-4">
          <div class="overflow-hidden w-[40%]  rounded-lg bg-gray-100">
            <img className="h-full w-full"  src={byId.productImage} loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />
          </div>

          <div class="overflow-hidden w-[40%] rounded-lg bg-gray-100">
            <img className="h-full  w-full"  src={byId.productImage} loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
      {/* <!-- images - end --> */}

      {/* <!-- content - start --> */}
      <div class="md:py-8    h-full  p-5 w-[50%] ">
        {/* <!-- name - start --> */}
        <div class=" md:mb-3">
          <span class="mb-0.5 inline-block text-gray-500">Fancy Brand</span>
          <h2 class="text-2xl dark:text-gray-500 font-bold text-gray-800 lg:text-3xl">{
            byId.name
          }</h2>
        </div>
        {/* <!-- name - end --> */}

        {/* <!-- rating - start --> */}
        <div class="mb-6 flex items-center md:mb-10">
          <div class="-ml-1 flex gap-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <span class="ml-2 text-sm text-gray-500">4.2</span>

          <a href="#" class="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view all 47 reviews</a>
        </div>
        {/* <!-- rating - end --> */}

        {/* <!-- color - start --> */}
        <div class="mb-4 md:mb-6">
          <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Color</span>

          <div class="flex flex-wrap gap-2">
            <span class="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100"></span>
            <button   style={{ backgroundColor: byId.color }} type="button" class="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
            <button type="button" class="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
            <button type="button" class="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"></button>
          </div>
          
        </div>
        {/* <!-- color - end --> */}

        {/* <!-- size - start --> */}
        <div class="mb-8 md:mb-10">
          <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Size</span>

          <div class="flex flex-wrap gap-3">
            <button 
            // onClick={handleClick()} 
            type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">XS</button>
            <button
            //  onClick={handleClick2()}
              type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">S</button>

            <span class="flex h-8 w-12 cursor-default items-center justify-center rounded-md border border-indigo-500 bg-indigo-500 text-center text-sm font-semibold text-white">M</span>
            <button type="button" class="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200">L</button>
            <span class="flex h-8 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">XL</span>
          </div>

          
        </div>
        {/* <!-- size - end --> */}

        {/* <!-- price - start --> */}
        <div class="mb-4 flex    items-center   justify-between ">
          <div class="flex  items-center   gap-2">
            <span class="text-xl  dark:text-gray-500 font-bold text-gray-800 md:text-2xl">${
               byId.price
            }</span>


            <span class="mb-0.5 text-red-500 line-through">${
             byId.DiscontedPrice
            }</span>
          </div>

          <span class="text-sm text-gray-500">incl. VAT plus shipping</span>



             {/* <!-- shipping notice - start --> */}
        <div class=" flex items-center gap-2   mr-20 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /> */}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
          <span class="text-sm">2-4 day shipping</span>

        </div>
        {/* <!-- shipping notice - end --> */}
        </div>
        {/* <!-- price - end --> */}

     

        {/* <!-- buttons - start --> */}
        <div class="flex gap-2.5">
          {/* <a href="#" class="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</a> */}
        <button  onClick={() => handleAddToCart(byId)} className="w-[40%] h-[50px] bg-[red] hover:bg-red-600 rounded-md text-[white] text-[18px]">
                Buy Now
             </button>
          <div class="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
        {/* <!-- buttons - end --> */}

        {/* <!-- description - start --> */}
        <div class="mt-4 md:mt-16 lg:mt-20">
          <div class="mb-3 text-lg font-semibold dark:text-gray-500 text-gray-800">Description</div>

          <p class="text-gray-500">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.

            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- description - end --> */}
      </div>
      {/* <!-- content - end --> */}
    </div>
  </div>
</div>


    // ?????????????????????/
   
  );
};
export default Card;