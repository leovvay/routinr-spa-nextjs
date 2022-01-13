import Cookies from 'js-cookie';

export default function areAuthCookiesExist() {
  return Boolean(Cookies.get('shared-auth'));
}
