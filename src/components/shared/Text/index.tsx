interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | number | any;
  onClick?: () => void;
}

const Text = ({ className, children, onClick }: Props) => {
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};

export default Text;
