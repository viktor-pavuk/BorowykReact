import {configureStore} from "@reduxjs/toolkit";

import bedReducer from "./bed.slice";

const store = configureStore({
    reducer: {
        bedReducer,
    }
});

export default store;