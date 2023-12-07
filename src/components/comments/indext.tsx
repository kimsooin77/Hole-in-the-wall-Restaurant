interface CommentProps {
  storeId: number;
}

export default function Comments({ storeId }: CommentProps) {
  return (
    <div className="md:max-w-2xl py-8 px-2 mb-20 mx-auto">
      <h1>댓글 폼 & 리스트</h1>
    </div>
  );
}
