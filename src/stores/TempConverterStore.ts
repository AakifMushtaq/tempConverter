import { action, observable, makeAutoObservable } from "mobx";
import { ITempConverterStore } from "./ITempConverterStore";

export class TempConverterStore implements ITempConverterStore {

    @observable
    userInput: number;

    @observable
    convertedValue: number

    @observable
    conversionOptions: string[]

    @observable
    selectedOption: string



    constructor() {
        makeAutoObservable(this);
        this.userInput = 0;
        this.selectedOption = "Kelvin"
        this.convertedValue = 0;
        this.conversionOptions = ["Kelvin", "Farenheit"]

    }

    @action setUserInput(val: number): void {
        this.userInput = val;
    }

    @action setCurrentTemperature(val: string): void {

    }

    @action setSelectedOption(val: string): void {
        this.selectedOption = val;
    }

    @action performConversion(): void {
        if(this.selectedOption === "Farenheit"){
            this.convertedValue = (this.userInput * 1.8) + 32
        }
    }

}