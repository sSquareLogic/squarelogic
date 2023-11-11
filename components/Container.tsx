import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className="max-w-[1384px] px-8 mx-auto w-full transition-all max-lg:px-5 overflow-hidden max-md:px-4">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
