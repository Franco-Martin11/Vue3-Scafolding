export interface DataAPI {
 example1: AdditionalInfo;
 example2:        string;
 example3:             number;
 example4:  number | string;
 example5:      string;
 example6: string[];
 example7:          string;
}

export interface AdditionalInfo {
 exampleOptional1?:           string;
 exampleOptional2?:         string[];
 exampleOptional3?:     string[];
 exampleOptional4?:          number;
 exampleOptional5?: boolean;
 exampleOptional6?:              string;
 exampleOptional7?:            string[];
 exampleOptional8?:          string[];
 exampleOptional9?:         string[];
}
