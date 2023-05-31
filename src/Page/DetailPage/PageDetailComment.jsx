import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikeOutlined, SendOutlined, EditFilled } from "@ant-design/icons";
import {
  statusLikeAction,
  submitCommentAction,
} from "../../redux/Action/CommentAction";
export default function PageDetailComment() {
  const [open, setOpen] = useState(false);
  let [contentComment, setContentComment] = useState("");
  let dispatch = useDispatch();
  let dataComment = useSelector((state) => {
    return state.CommentReducer.dataComment;
  });
  let userInfor = useSelector((state) => {
    return state.UserReducer.userInfor;
  });
  // RENDER COMMENT Body
  let renderComment = () => {
    return dataComment.map((itemComment) => {
      return (
        <div
          key={itemComment.id}
          className="grid grid-cols-9 w-full xl:pr-24 md:px-6 px-3"
        >
          <div className="relative ">
            <img
              className="xl:w-1/2 md:w-3/5 w-3/4 absolute top-0 xl:right-1 md:right-1 right-1 rounded-full"
              src={itemComment.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-span-8">
            <div className="inline-block relative xl:px-2 md:px-2 px-2 xl:pt-3 md:pt-3 pt-3 xl:pb-4 md:pb-3 pb-3 bg-gray-300 rounded-lg">
              <div className="font-semibold ">{itemComment.name}</div>
              <div className="">{itemComment.content}</div>
              <span className="flex items-center absolute xl:px-1 md:px-1 px-1 rounded-lg xl:-bottom-3 md:-bottom-3 -bottom-2 xl:right-3 md:right-3 right-2 bg-white shadow ">
                {itemComment.numberLike > 0 ? (
                  <>
                    <LikeOutlined className="text-purple-300" />
                    <span>{itemComment.numberLike}</span>
                  </>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="text-gray-500 font-medium xl:px-2 md:px-2 px-2">
              <span
                onClick={() => {
                  dispatch(statusLikeAction(itemComment.id));
                }}
                className="cursor-pointer"
              >
                {itemComment.statusLike ? "Dislike" : "Like"}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };
  // GET VALUE WRITE COMMENT
  let handleChangeValueComment = (e) => {
    let { value } = e.target;
    setContentComment(value);
  };
  let handleSubmitComment = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    let name = userInfor.hoTen;
    let content = contentComment;

    let hinhAnh =
      "https://i.pinimg.com/564x/59/30/e7/5930e7a0a193cc6ec933303b93455445.jpg";
    let statusLike = false;
    let numberLike = 0;
    dispatch(
      submitCommentAction(id, name, content, hinhAnh, statusLike, numberLike)
    );
    setContentComment("");
  };
  return (
    <div>
      <button
        className="xl:px-2 md:px-2 px-2 xl:py-2 md:py-2 py-2 text-white hover:text-white bg-purple-500 hover:bg-purple-700 rounded-md duration-150"
        onClick={() => setOpen(true)}
      >
        Đến bình luận *meo meo*
      </button>
      <Modal
        title="Bình luận"
        footer={null}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
      >
        <form className="xl:space-y-7 md:space-y-5 space-y-4" action="">
          <div className="xl:h-96 md:h-96 h-80 xl:space-y-7 md:space-y-7 space-y-5 overflow-auto">
            {renderComment()}
          </div>
          <div className="grid  grid-cols-9 w-full xl:pr-24 md:px-6 px-3 xl:pt-5 md:pt-5 pt-3 border-t-2">
            <div className="relative ">
              <img
                className="xl:w-1/2 md:w-3/5 w-3/4 absolute xl:top-0 md:top-0 top-0 xl:right-1 md:right-1 right-1 rounded-full"
                src="https://i.pinimg.com/564x/59/30/e7/5930e7a0a193cc6ec933303b93455445.jpg"
              />
            </div>
            <div className="col-span-8 grid grid-cols-9 gap-2">
              <input
                className="col-span-8 xl:py-3 md:py-3 py-2 xl:px-3 md:px-3 px-2 border outline-purple-400 rounded-lg"
                placeholder="Write a comment..."
                onChange={handleChangeValueComment}
                type="text"
                value={contentComment}
                name="comment"
              />
              <div className="relative ">
                <button
                  onClick={handleSubmitComment}
                  type="submit"
                  className="absolute xl:bottom-2 md:bottom-2 xl:left-0 md:left-0 xl:text-lg md:text-lg text-purple-500 hover:text-purple-700 font-semibold cursor-pointer"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
