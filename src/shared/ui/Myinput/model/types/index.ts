export interface IInput {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    type: string;
}