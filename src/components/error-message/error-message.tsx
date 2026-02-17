import { useAppSelector } from '../../hooks';

const STYLE: React.CSSProperties = {
  position: 'fixed',
  top: '30px',
  right: '30px',
  padding: '10px',
  backgroundColor: '#d96666',
  color: '#ffffff',
  borderRadius: '5px'
};

export const ErrorMessage = () => {
  const error = useAppSelector((state) => state.user.error);

  return (error)
    ? <div style={STYLE}>{error}</div>
    : null;
};

