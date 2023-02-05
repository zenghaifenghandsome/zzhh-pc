import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import videoSourceListReducer from "./reducer/videoSourceListReducer";

export default configureStore({
    reducer:{
        user:userReducer,
        videoSourceList:videoSourceListReducer,
    }
})