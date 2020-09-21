import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Context as AuthContext } from "./Context/AuthContext";

import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import Pokemons from "./views/Pokemons/Pokemons";
import PokemonDetails from "./views/PokemonDetails/PokemonDetails";
import Types from "./views/Types/Types";

//custom route to deal with private pages
function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(AuthContext);

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

//our actual routes
export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/">
        <Index />
      </CustomRoute>
      <CustomRoute exact path="/login">
        <Login />
      </CustomRoute>
      <CustomRoute exact path="/pokemons">
        <Pokemons />
      </CustomRoute>
      <CustomRoute exact path="/types">
        <Types />
      </CustomRoute>

      <CustomRoute
        /* This render function is required so that we can pass the key prop. The key prop is required in this case 
      because inside the PokemonDetails we have links that redirect to the same component but with different
      route params. Without this key, the component would not reload. */
        isPrivate
        render={(props) => <PokemonDetails key={props.location.pathname} />}
        path="/pokemon/:name"
      ></CustomRoute>
    </Switch>
  );
}
