import { STATUS_LIKE, SUBMIT_COMMENT } from "../constant/CommentConstant";

const initialState = {
  dataComment: [
    {
      id: 1,
      name: "Trần Quang Sĩ",
      content: "Beflox thật tuyệt vời, giá vé rất hợp lí",
      hinhAnh:
        "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/278855044_983320765653187_134320280336234612_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5wlsFPqY6CMAX-FBGk2&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAIlsl9MqIugDnwHrV_zkqin8rvjuet6cMdEmIwsW6mZA&oe=638314C1",
      statusLike: false,
      numberLike: 69,
    },
    {
      id: 2,
      name: "Hoàng Lâm",
      content: "Phim ở trên đây toàn là phim hot mà giá lại còn rất rẻ",
      hinhAnh:
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/298525342_1808339819510593_3395264989019877620_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VPr2f9IEPlYAX-8boC8&tn=a-4yN6nFzcF5Of59&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBGIg8tv3i7C6DrNPi1VlCdQG8agR8VIdDoRuOl8JbRgQ&oe=638383B4",
      statusLike: false,
      numberLike: 19,
    },
    {
      id: 4,
      name: "Trọng Thắng",
      content: "Dịch vụ rất chu đáo và nhiệt tình, 100 điểm",
      hinhAnh:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/313822729_675015654210631_5174684807558838974_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4UP_TNmx4pEAX-XNEJH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ06ERLJ99KqkU1ERFjiPPtE-GEK4T6NchThXbf8C8PwA&oe=63955E08",
      statusLike: false,
      numberLike: 22,
    },
  ],
};

export const CommentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STATUS_LIKE:
      {
        let cloneDataComment = [...state.dataComment];
        let index = cloneDataComment.findIndex(
          (dataComment) => dataComment.id == payload
        );
        if (index != -1) {
          cloneDataComment[index].statusLike =
            !cloneDataComment[index].statusLike;
        }
        if (cloneDataComment[index].statusLike) {
          cloneDataComment[index].numberLike++;
        } else {
          cloneDataComment[index].numberLike--;
        }
        return { ...state, dataComment: cloneDataComment };
      }
      break;
    case SUBMIT_COMMENT: {
      state.dataComment.unshift(payload);
      return { ...state };
    }
    default:
      return state;
  }
};
