interface authorType {
  id: string;
  username: string;
  profilePics: string;
}

interface commentType {
  id: string;
  username: string;
  profilePics: string;
}

export interface postType {
  _id: string;
  title: string;
  body: string;
  imageUrl: string;
  author: authorType;
  like: authorType[];
  comment: commentType[];
  shares: authorType[];
  category: string;
}
