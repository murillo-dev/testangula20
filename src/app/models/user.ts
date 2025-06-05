export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  photo_id: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  creator: string;
  aditional_info: JSON;
  customers: any[];
  roles: string[];
}
