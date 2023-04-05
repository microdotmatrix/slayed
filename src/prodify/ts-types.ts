export enum PickerType {
  Radios = 'RADIOS',
  Select = 'SELECT'
}

export type JSONValueType =
    | string
    | number
    | boolean
    | { [key: string]: JSONValueType }
    | Array<JSONValueType>
    | null;

export type JSONObjectType = {
    [x: string]: JSONValueType;
}

export type RequestBodyType = JSONObjectType | FormData | URLSearchParams | undefined;