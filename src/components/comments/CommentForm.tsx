import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";

interface CommentProps {
  storeId: number;
}

export default function Comments({ storeId }: CommentProps) {
  const { status } = useSession();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const result = await axios.post("/api/comments", {
          ...data,
          storeId,
        });

        if (result.status === 200) {
          toast.success("댓글을 등록했습니다.");
          resetField("body");
        } else {
          toast.error("다시 시도해주세요.");
        }
      })}
      className="flex flex-col space-y-2"
    >
      <textarea
        rows={3}
        placeholder="댓글을 작성해주세요..."
        {...register("body")}
        className="block w-full min-h-[120px] resize-none border rounded-md bg-transparent py-2.5 px-4 text-black placeholder:text-gray-100 text-sm leading-6"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-semibold shadow-sm mt-2 rounded-md"
      >
        작성하기
      </button>
    </form>
  );
}
