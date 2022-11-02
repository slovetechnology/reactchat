import { configureStore } from "@reduxjs/toolkit";
import Chatapp from "./Data";

export default configureStore({
    reducer: {
        chattoggle: Chatapp,
    }
});