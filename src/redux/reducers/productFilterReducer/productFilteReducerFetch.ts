import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import ApiValantis from "../../../api/Api.ts";

export const fetchAllBrands = createAsyncThunk('productFilterReducer/fetchBrand',
		async () => {
			const response = await axios.post(ApiValantis.baseUrl, {
				"action": "get_fields",
				"params": {"field": "brand", "offset": 1, "limit": 1000}
			}, ApiValantis.headers);
			return await response.data.result
		}
)