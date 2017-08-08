export type Response<T> = {
    data: {
        count: number,
        values: T[]
    },
    status: number,
    message: string
};

export type  Params = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    product_manufacturer: string;
    product_brand: string;
    cnf_code: number;
    cluster_number: number;
    product_description: string;
    product_comment: string;
    product_id?: number;
    offset?: number;
    flag?: boolean;
    orderby?: string;
    classification_list: ClassificationList[];

};


export class addClass  {
    classificationName= '';    
    classificationNumber= '';
    classificationType= '';
    classificationId?:number;
    productId?: number; 
}


export const Classification_name = ['First classification', 'Second Classification',''];
export const Classification_number = ['1.0121', '1.0122', '1.0123', ''];

export class ClassificationList{
    classification_name= '';    
    classification_number= ''; 
    classification_type= '';  


}



export type SalesInputFields = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string, 
    salesComment: string,
    collectionDateFrom: string,
    collectionDateTo: string,
    productId: number,
    offset: number,
    flag: boolean,
    orderBy: string
};

export type SalesData = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string, 
    dollarVolume: number,
    kiloVolume: number,
    productId: number
};

export type LabelInputFields ={
    label_upc: string,
    label_description: string,
    label_source: string, 
    label_ingredients: string,
    collection_date_from: string,
    collection_date_to: string,
    product_id: number,
    offset: number,
    flag: boolean,
    orderby: string
};

export type LabelData = {
    label_upc: string,
    label_description: string,
    label_source: string,
    label_collection_date: string,
    label_creation_date: string,
    label_last_edited: string, 
    label_edited_by: string
    productId: number

}

export type InsertDataMessage = {
    status: number,
    message: string
}