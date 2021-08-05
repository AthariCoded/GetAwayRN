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

    qboxAdd = async (newQBox, tripId) => {
        try {
            await instance.post(`/qbox/${tripId}`, newQBox);
            this.fetchQBoxes();
        } catch (error) {
            console.error(error);
        }
    };

    qboxUpdate = async (updatedQbox, qboxId) => {
        try {
            await instance.put(`/qbox/${qboxId}`, updatedQbox);
            const foundQbox = this.qboxes.find((qbox) => qbox.id === qboxId);
            for (const key in foundQbox) foundQbox[key] = updatedQbox[key];
        } catch (error) {
            console.error(error);
        }
    };

}
const qboxStore = new QBoxStore();
qboxStore.fetchQBoxes();
export default qboxStore;
