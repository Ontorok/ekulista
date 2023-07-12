import mongoose from "mongoose";

const { Schema } = mongoose;

export interface Blog {
  _id?: string;
  authorName: string;
  authorImgUrl: string;
  content: string;
  description: string;
  title: string;
  blogImgUrl: string;
}

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    blogImgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
