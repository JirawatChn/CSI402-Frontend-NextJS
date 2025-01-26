export const AlertBox = ({
  text,
  isShow,
}: {
  text: string;
  isShow: boolean;
}) => {
  return <div className="p-2 bg-red-200 text-red-500" style={{display:isShow?"":"none"}}>{text}</div>;
};
