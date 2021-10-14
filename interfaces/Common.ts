interface Extra {
    logid: string;
    now: number;
}

export interface Data {
    description: string;
    error_code: number | string;
    [keys: string]: unknown;
}



export interface Result {
    data: Data;
    extra: Extra;
    message?: string;
}


