import usersData from '../../data/user.json';

interface User {
  username: string;
  password: string;
}

const login = (username: string, password: string) => {
  const user: User = usersData;
  if (user.username === username && user.password === password) {
    localStorage.setItem('session', user.username);
    return user.username;
  }
};

export { login };
