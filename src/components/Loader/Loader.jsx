import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      color="rgb(104, 236, 71)"
      ariaLabel="Puff-loading"
      wrapperStyle={{
        padding: '80px',
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
