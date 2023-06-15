export type Post = {
  userId: number;
  id: 1;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
