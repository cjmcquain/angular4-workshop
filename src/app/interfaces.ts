export interface IProduct {
    name: string;
    description: string;
    price: number;
    promoted?: boolean;
    author?: string;
    tags?: string[];
  }