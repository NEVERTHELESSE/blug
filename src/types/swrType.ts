import { postType } from "./postType";

export interface swrType {
  data: postType[];
  error: any;
  isLoading: boolean;
}
