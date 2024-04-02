import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Auth0CallbackHandler() {
  const { handleRedirectCallback } = useAuth0();

  useEffect(() => {
    async function handleAuth0Callback() {
      await handleRedirectCallback();
      // Add any additional logic here
    }

    handleAuth0Callback();
  }, [handleRedirectCallback]);

  return <div>Loading...</div>;
}

export default Auth0CallbackHandler;