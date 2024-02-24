export interface Facturas {
    statusCode: number;
    records:    number;
    invoices:   Invoice[];
}

export interface Invoice {
    id:             number;
    invoice_number: string;
    total:          number;
    invoice_date:   Date;
    status:         Status;
}

export enum Status {
    Cancelado = 'Cancelado',
    Vigente = 'Vigente',
}