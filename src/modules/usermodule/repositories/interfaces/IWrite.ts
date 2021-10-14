export interface IWrite<T> {
     create(iten: T): Promise<T | any>;
     update(id: string, item: T): Promise<T | any>; 
     delete(item: T): Promise<Boolean>;
    }