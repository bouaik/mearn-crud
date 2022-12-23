import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  isError: false,
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    await axios
      .post("/login", loginForm)
      .then((res) => {
        set({
          loggedIn: true,
          loginForm: {
            email: "",
            password: "",
          },
        });
      })
      .catch((err) => set({ isError: true }));
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");

      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    await axios.post("/signup", signupForm);
    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
  },

  logout: async () => {
    await axios.get("/logout");
    set({ loggedIn: false });
  },
}));

export default authStore;
