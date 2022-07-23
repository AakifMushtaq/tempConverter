import { ChangeEvent } from "react";

export interface ITempConverterStore{
    /**
     * user input
     */
    userInput: number;

    /**
     * current convertedValue as entered by user
     */
    convertedValue: number

    /**
     * List of dropdown options for conversion
     */
    conversionOptions: string[]

    /**
     * Selected Option to convert data
     */
    selectedOption: string

    /**
     * Setter for converter type
     * @param val selected option
     */
     setSelectedOption(val: string): void;

    /**
     * Setter for converter type
     * @param val selected option
     */
    setUserInput(val: number): void;

    /**
     * Setter for converter type
     * @param val selected option
     */
    setCurrentTemperature(val: string): void;
    
    performConversion(): void;
}