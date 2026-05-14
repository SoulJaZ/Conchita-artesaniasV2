// ERROR MESSAGE

function ErrorMessage({ message }) {

  if (!message) return null;

  return (

    <div className="
      bg-red-100
      border
      border-red-300
      text-red-700
      px-5
      py-4
      rounded-2xl
      mb-6
    ">

      {message}

    </div>
  );
}

export default ErrorMessage;