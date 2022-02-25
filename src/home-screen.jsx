import { useRecoilValue } from "recoil";
import { textSelector, textState } from "./atoms/misc";
import { TextBox } from "./components/text-box";

export const HomeScreen = () => {
  const text = useRecoilValue(textSelector);

  return (
    <div>
      <h2>Home</h2>
      <TextBox state={textState} />
      <p>{text.value} ({text.length})</p>
    </div>
  );
};
