import "./Dot.scss";

type dotProps = {
  dotCount: number;
  index: number;
  setIndex: any;
};

export const Dot = ({ dotCount, index, setIndex }: dotProps) => {
  return (
    <div className="dot-container">
      {Array(dotCount)
        .fill(1)
        .map((_, key) => {
          return (
            <div
              className={
                index === key ? "dot-style dot-style-active" : "dot-style"
              }
              key={key}
              onClick={() => setIndex(key)}
            ></div>
          );
        })}
    </div>
  );
};
