export interface Submission {
  id: string;
  name: string;
  from: string;
  to: string;
  due_date: Date;
  address: {
    full_address: string;
    short_address: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    postal_code: string;
  };
  status: string;
}
