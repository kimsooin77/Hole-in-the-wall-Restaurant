/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import CommentForm from "./CommentForm";
import { CommentApiResponse } from "@/interface";
import axios from "axios";
import { useQuery } from "react-query";
import CommentList from "./CommentList";

interface CommentProps {
  storeId: number;
  params?: { page?: string };
}

export default function Comments({ storeId, params }: CommentProps) {
  const { status } = useSession();
  const page: any = params?.page || "1";

  const fetchComments = async () => {
    const { data } = await axios(
      `/api/comments?storeId=${storeId}&limit=10&page=${page}`
    );

    return data as CommentApiResponse;
  };

  const { data: comments, refetch } = useQuery(
    `comments-${storeId}`,
    fetchComments
  );
  return (
    <div className="md:max-w-2xl py-8 px-2 mb-20 mx-auto">
      {/* comment form */}
      {status === "authenticated" && (
        <CommentForm storeId={storeId} refetch={refetch} />
      )}
      {/* comment list */}
      <CommentList comments={comments} refetch={refetch} />
    </div>
  );
}
