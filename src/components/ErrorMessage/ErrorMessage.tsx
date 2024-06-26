import { BiError } from 'react-icons/bi';
import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message = '' }: ErrorMessageProps) => {
  return (
    <div className={css.error}>
      <BiError size={36} />
      <p>
        {message.length > 0
          ? message
          : 'Whoops, something went wrong! Please try reloading this page!'}
      </p>
    </div>
  );
};

export default ErrorMessage;
