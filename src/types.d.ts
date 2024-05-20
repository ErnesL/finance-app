export interface User {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  monthlyGains: number;
  // costs: Cost[];
}

export interface Cost {
  id: number;
  amount: number;
  label: string;
  // user: User;
  createdAt: Date;
  updatedAt: Date;
}
