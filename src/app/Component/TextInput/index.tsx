export const TextInput = ({
  text,
  inputId,
  onChange,
}: {
  text: string;
  inputId: string;
  onChange?: any;
}) => {
  return (
    <div className="flex justify-center p-2">
      <label className="pr-2">{text}</label>
      <input type="text" className="border" id={inputId} onChange={onChange} />
    </div>
  );
};
