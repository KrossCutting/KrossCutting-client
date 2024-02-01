import PropTypes from "prop-types";

function Message({ messageType }) {
  // TO DO 상황에 따른 button의 onClick 함수 생성 필요. prerequisite: 필요 컴포넌트 라우터 설정

  return (
    <section className="flex flex-col items-center py-20 text-xl text-center gap-15 px-25 rounded-3xl w-480 h-270 bg-pink">
      <p className="text-2xl font-bold">{messageType.HEADER}</p>
      <p>{messageType.BODY}</p>
      <p>{messageType.FOOTER}</p>
      <div className="flex justify-around w-full mt-5 text-base">
        <button className="px-10 py-5 rounded-3xl bg-purple">
          Go to Selection
        </button>
        <button className="px-10 py-5 rounded-3xl bg-mint">Yes, proceed</button>
      </div>
    </section>
  );
}

Message.propTypes = {
  messageType: PropTypes.instanceOf(Object).isRequired,
};

export default Message;
