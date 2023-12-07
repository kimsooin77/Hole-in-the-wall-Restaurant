/* eslint-disable @next/next/no-img-element */

import { CommentApiResponse } from "@/interface";
import { useSession } from "next-auth/react";

interface CommentListProps {
  comments?: CommentApiResponse;
}
export default function CommentList({ comments }: CommentListProps) {
  const { data: session } = useSession();
  return (
    <div className="my-10">
      {comments?.data && comments.data.length > 0 ? (
        comments.data.map((comment) => (
          <div
            key={comment.id}
            className="flex items-center space-x-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4"
          >
            <div>
              <img
                src={comment.user?.image || "/image/person.png"}
                width={40}
                height={40}
                className="rounded-full bg-gray-10"
                alt="profile image"
              />
            </div>
            <div className="flex flex-col spae-y-1 flex-1">
              <p className="">{comment.user?.email}</p>
              <p className="text-xs">
                {new Date(comment?.createdAt)?.toLocaleDateString()}
              </p>
              <p className="text-black mt-1 text-base">{comment.body}</p>
            </div>
            <div>
              {comment.userId === session?.user.id && (
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-400"
                >
                  삭제
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 border border-gray-200 rounded-md text-sm text-gray-400">
          댓글이 없습니다.
        </div>
      )}
    </div>
  );
}
