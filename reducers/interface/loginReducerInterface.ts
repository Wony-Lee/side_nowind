export interface UserInfo {
  id: string;
  connect_id: string;
  connect_state: boolean;
  connect_date: string;
  tel: string;
}

export interface UserLogin {
  userId: string;
  password: string;
}
