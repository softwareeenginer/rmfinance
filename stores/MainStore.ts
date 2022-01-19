import { configure, makeAutoObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

configure({ enforceActions: "never" });

class MainStoreC {
    constructor() {
        makeAutoObservable(this);
    }

    // --------- Need Money --------- //
    @persist needMoney: number = 0;
    setNeedMoney(needMoney: number) {
        this.needMoney = needMoney;
    }

    // --------- Enjoy Money --------- //
    @persist enjoyMoney: number = 0;
    setEnjoyMoney(enjoyMoney: number) {
        this.enjoyMoney = enjoyMoney;
    }

    // --------- Savings Money --------- //
    @persist savingsMoney: number = 0;
    setSavingsMoney(savingsMoney: number) {
        this.savingsMoney = savingsMoney;
    }

    // --------- Invest Money --------- //
    @persist investMoney: number = 0;
    setInvestMoney(investMoney: number) {
        this.investMoney = investMoney;
    }
}

const hydrate = create({ storage: AsyncStorage });

export const MainStore = new MainStoreC();

hydrate("MainStore", MainStore).then(() => {
    console.log(
        "********** -- MRFinance -- **********" + "\n" +
        "********** -- Software Engineer = Mehmet Ali YILGIN" + "\n" + "\n"
    );
    console.log("Store has been hydarated!");
});