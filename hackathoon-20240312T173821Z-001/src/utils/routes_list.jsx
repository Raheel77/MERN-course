// const navItems = ["Home", "About", "Contact"];

export const navItems = [
  {
    label: "Home",
    link: "/",
    auth_required: true,
  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Profile",
    link: "/profile",
    auth_required: true,
  },
/*
  {
    label: "Cart",
    link: "/cart",
    auth_required: true,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    auth_required: true,
  },
*/
];
