// 1. isLoggedIn (if user get token on successful login)
export const isLoggedIn = () => {
    let name = localStorage.getItem("name");
    if (name == null) {
      return false;
    } else {
      return true;
    }
  };
  
//   // 2. doLogin (will set data(token) in localStorage)
//   export const doLogin = (data, next) => {
//     localStorage.setItem("data", JSON.stringify(data));
//     next(); // next is a callback func (after login where do user want to redirect)
//   };
  
  // 3. doLogout (will remove data(token) from localStorage)
  export const doLogout = (next) => {
    localStorage.removeItem("name");
    localStorage.removeItem("token")
    localStorage.removeItem("po_id")
    next(); // next is a callback func (after login where do user want to redirect)
  };
  
//   // 4. get currentUser
//   export const getCurrentUserDetail = () => {
//     if (isLoggedIn()) {
//       return JSON.parse(localStorage.getItem("name"));
//     } else {
//       return undefined;
//     }
//   };
  