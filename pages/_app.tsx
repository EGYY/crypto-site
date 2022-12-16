import React, { useEffect } from "react";
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';
import { setAuth, setUser } from "../redux/user/userSlice";
import { getArticles, getFavoriteProjects, getMainInfo, getProjects } from "../redux/main/mainSlice";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.dispatch(setAuth(true));
    }

    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') ?? '{}');
      store.dispatch(setUser(user));
    }

    store.dispatch(getMainInfo());
    store.dispatch(getProjects());
    store.dispatch(getArticles());
    store.dispatch(getFavoriteProjects());
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
