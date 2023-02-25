// import { StatusBar } from "expo-status-bar";
// import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Cards from "./components/Cards";
import InfluencerHeader from "./components/InfluencerHeader";
export default function App() {
  return (
    <TailwindProvider>
      <InfluencerHeader />
    </TailwindProvider>
  );
}
