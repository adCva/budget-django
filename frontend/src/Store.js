import { configureStore  } from '@reduxjs/toolkit';
import expenditureSlice from "./Redux/expenditureSlice";
import limitSlice from "./Redux/limitSlice";
import globalVarSlice from "./Redux/globalVarSlice";
import editSlice from "./Redux/editSlice";
import loadDataCall from "./Middleware/loadData";

export default configureStore({
    reducer: {
        expenditures: expenditureSlice,
        limit: limitSlice,
        globalVar: globalVarSlice,
        edit: editSlice,
        loadDataMiddleware: loadDataCall
    }
});