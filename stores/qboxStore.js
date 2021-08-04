import { makeAutoObservable } from "mobx";
//import authStore from "./authStore";
import instance from "./instance";

class QBoxStore {
    qboxes = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    fetchQBoxes = async () => {
        try {
            const response = await instance.get("/qbox");
            this.qboxes = response.data;
            this.loading = false;
        } catch (error) {
            console.error("fetchQBox", error);
        }
    };

    qboxAdd = async (newQBox, navigation) => {
        try {
            await instance.post(`/qbox/${newQBox.id}`);
            this.fetchQBoxes();
            navigation.navigate("Explore");
        } catch (error) {
            console.error(error);
        }
    };

}
const qboxStore = new QBoxStore();
qboxStore.fetchQBoxes();
export default qboxStore;
