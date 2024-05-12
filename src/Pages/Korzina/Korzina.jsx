import React, { useEffect, useState } from "react";
import {
  decreasePrice,
  deleteProduct,
  deleteProductById,
  increasePrice,
} from "../../counters/counter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import { Cnt, setCnt } from "../../Layout/Layout";

const Korzina = () => {
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const productsCart = useSelector((state) => state.product.productsCart);

  // Calculate subtotal
  
  useEffect(() => {
    let total = 0;
    productsCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setSubtotal(total);
  }, [productsCart]);

  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px]">
        <h1 className="text-[20px]">
          <span className="text-[gray]">Home /</span> Cart
        </h1>
        <table className="w-[100%]">
          <thead className="h-[60px]">
            <tr>
              <th className="text-[17px] text-[gray] text-center">Product</th>
              <th className="text-[17px] text-[gray] text-center">Price</th>
              <th className="text-[17px] text-[gray] text-center">Quantity</th>
              <th className="text-[17px] text-[gray] text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productsCart.map((product) => (
              <tr
                key={product.id}
                className="bg-[whitesmoke] border shadow-xl rounded-xl"
              >
                <td className="w-[25%] h-[100px]">
                  <div className="flex w-[90%] m-[auto] items-center gap-[20px] p-[20px  ]">
                    <img
                      className="w-[70px] h-[70px] object-cover rounded-lg"
                      src={product.productImage}
                      alt="picture"
                    />
                    <h1 className=" dark:text-black text-[18px] sm:hidden">{product.name}</h1>
                  </div>
                </td>
                <td className="  dark:text-black text-center text-[18px]">${product.price}</td>
                <td>
                <input
  value={product.quantity}
  onChange={(e) => {
    const newValue = parseInt(e.target.value);
    const delta = newValue - product.quantity;
    if (delta > 0) {
      dispatch(
        increasePrice({
          productId: product.id,
          quantity: delta,
        })
      );
    } else if (delta < 0) {
      dispatch(
        decreasePrice({
          productId: product.id,
          quantity: -delta,
        })
      );
    }
  }}
  className="w-[50px] dark:text-black outline-none block m-[auto] h-[50px] text-center border-[2px] rounded-md bg-[transparent text-[18px]"
  type="number"
/>


                </td>
                <td className=" dark:text-black text-center text-[18px] font-[400]">

                  <h1>{product.price * product.quantity}</h1>

                </td>
                <td>
<IconButton
  onClick={() => {
    dispatch(deleteProductById(product.id));
    setCnt((prevCnt) => prevCnt - 1);
  }}
>
  <HighlightOffIcon sx={{ marginLeft: "00px", color: "red" }} />
</IconButton>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center pt-[10px] pb-[10px] mt-[20px] sm:flex-wrap">
          <Link to={"/"}>
            <button className=" hover:bg-black hover:text-white  border-[2px] dark:border-white text-[18px] sm:w-[150px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Return To Shop
            </button>
          </Link>
          <div className="flex gap-[30px] sm:flex-wrap sm:items-center">
            <button className=" hover:bg-black hover:text-white    border-[2px] dark:border-white sm:block sm:m-[auto] sm:w-[150px]  text-[18px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Update Cart
            </button>

            <button
  onClick={() => {
    dispatch(deleteProduct());
    setCnt(0);
  }}
  className="    hover:bg-[#fe2828] hover:text-[#fff] border-[2px] sm:block sm:m-[auto] sm:mt-[10px] text-[18px] border-[red] text-[red] w-[200px] h-[50px] rounded-[5px]"
>
  Remove all
</button>

            
          </div>
        </div>
        <div className="flex justify-between mt-[20px] sm:flex-wrap">
          <div className="flex gap-[30px] w-[38%] sm:w-[100%]">
           
            <button className="border-[2px] hover:bg-[#fe2828] hover:text-[#fff] border-[#fa2626] text-[18px] text-[#fd4444] w-[150px] h-[50px] rounded-[5px]">
              Apply
            </button>
          </div>
          <div className="w-[35%] dark:text-black  border-[2px] border-[black] bg-[whitesmoke] rounded-md p-[20px] sm:w-[100%] sm:mt-[20px]">
            <h1 className="text-[20px] font-[500]">Cart Total</h1>
            <div className="flex justify-between items-center mt-[10px]">
              <h1 className="text-[18px] font-[500]">Subtotal:</h1>
              <h1 className="text-[18px] font-[500]">${subtotal}</h1>
            </div>
            <div className="flex justify-between items-center border-b-[2px] pb-[15px] border-[black]">
              <h1 className="text-[18px] font-[500]">Shipping:</h1>
              <h1 className="text-[18px] font-[500]">free</h1>
            </div>
            <div className="flex justify-between items-center pt-[10px]">
              <h1 className="text-[20px] font-[500]">Total:</h1>
              <h1 className="text-[20px] font-[500]">${subtotal}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Korzina;
