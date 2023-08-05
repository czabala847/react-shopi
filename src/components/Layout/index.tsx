interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};
