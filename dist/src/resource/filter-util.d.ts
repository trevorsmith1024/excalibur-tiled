export declare const byNameCaseInsensitive: (name?: string) => <TObject extends {
    name?: string;
}>(object: TObject) => boolean;
export declare const byClassCaseInsensitive: (className?: string) => <TObject extends {
    class?: string;
}>(object: TObject) => boolean;
export declare const byPropertyCaseInsensitive: (propertyName: string, value?: any) => <TObject extends {
    properties: Map<string, string | number | boolean>;
}>(object: TObject) => boolean;
