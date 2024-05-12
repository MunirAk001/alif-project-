import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";

const Api = "https://663e239ee1913c476796ad85.mockapi.io/data";

export const getData = createAsyncThunk("project/getData", async () => {
  try {
    const { data } = await axiosRequest.get(Api);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProductById = createAsyncThunk(
  "project/getProductById",
  async (id) => {
    try {
      const { data } = await axiosRequest.get(`${Api}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const counterSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    products: [],
    productsCart: [],
    cnt: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      const productExists = state.productsCart.find(
        (product) => product.id === payload.id
      );
      if (productExists) {
        productExists.quantity++;
      } else {
        state.productsCart.push({ ...payload, quantity: 1 });
      }
    },

    deleteProduct: (state) => {
      state.productsCart = [];
    },

    deleteProductById: (state, action) => {
      const productId = action.payload;
      state.productsCart = state.productsCart.filter(
        (product) => product.id !== productId
      );
    },

    increasePrice: (state, action) => {
      const productId = action.payload.productId;
      const product = state.productsCart.find((p) => p.id === productId);
      if (product) {
        product.quantity++;
      }
    },

    decreasePrice: (state, action) => {
      const productId = action.payload.productId;
      const product = state.productsCart.find((p) => p.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {
  addProduct,
  deleteProduct,
  deleteProductById,
  increasePrice,
  decreasePrice,
} = counterSlice.actions;

export default counterSlice.reducer;
