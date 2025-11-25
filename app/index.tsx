import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Check if user is authenticated
  // If authenticated, redirect to (app)/index
  // If not authenticated, redirect to (auth)/login
  
  return <Redirect href="/(auth)/login" />;
}
