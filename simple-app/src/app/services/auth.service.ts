export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('userId');
  }

  isUserAuthenticated(userId: string  )  {
    const storedUserId = localStorage.getItem('userId');
    return (userId === storedUserId);
  }
}
