type UserWelcomeProps = {
  firstName?: string;
  lastName?: string;
};

const UserWelcome = ({ firstName, lastName }: UserWelcomeProps) => {
  const prefix = "Hello";

  const getString = () => {
    if (!firstName && !lastName) return `${prefix}!`;
    if (firstName && !lastName) return `${prefix} ${firstName}`;
    if (firstName && lastName) return `${prefix} ${firstName} ${lastName}`;
    if (!firstName && lastName) return `Hello!`;
  };

  return <p>{getString()}</p>;
};

export default UserWelcome;
