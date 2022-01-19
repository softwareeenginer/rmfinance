import { configure, makeAutoObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

configure({ enforceActions: "never" });

class MainStoreC {
  constructor() {
    makeAutoObservable(this);
  }

  // --------- Token --------- //
  @persist token: string | null = null;
  setToken(token: string) {
    this.token = token;
  }

  // --------- User --------- //
  @observable user : object | any = {};
  setUser(user: object ){
    this.user = user;
  }

   // --------- Language --------- //
  @persist language : string | null = "";
  setLanguage(set : string){
    this.language = set;
  }
}

const hydrate = create({ storage: AsyncStorage });

export const MainStore = new MainStoreC();

hydrate("MainStore", MainStore).then(() => {
  console.log(
    "********** -- MRFinance -- **********"+"\n"+
    "********** --         -- **********"+"\n"+
    "********** -- Software Engineer = Mehmet Ali YILGIN"+"\n"+"\n"
    );
  console.log("Store has been hydarated!");
});