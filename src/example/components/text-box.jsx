import { useRecoilState } from "recoil";

// example of how we could reduce the amount of props into
//  a reusable component that reads and writes to state

export const TextBox = ({ state }) => {
  const [value, setValue] = useRecoilState(state);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={onChange} />;
};
