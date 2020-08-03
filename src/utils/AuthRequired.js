import { isAuthActive } from '../constants/config'
import { setCurrentUser, getCurrentUser } from '.'
export default (to, from, next) => {
  if (isAuthActive){
    next()
  } else {
    const user = getCurrentUser();
    if (user) {
      // verify with firebase or jwt
      next()
    } else {
      setCurrentUser(null);
      next('/user/login')
    }
  }
}
