import {
    createStore
} from "vuex";
import stxStore from '@/store/modules/stxStore.js';

export default createStore({
    modules: {
        stxStore
    }
});