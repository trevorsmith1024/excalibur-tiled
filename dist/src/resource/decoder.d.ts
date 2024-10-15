export declare class Decoder {
    /**
     * Decodes any compressed/encoded Tiled data and produces the canonical list of Tiled gids
     * @param data
     * @param options
     */
    static decode(data: string, compression?: string): Promise<number[]>;
}
