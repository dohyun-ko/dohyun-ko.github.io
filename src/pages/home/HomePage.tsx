import { Area, Circle, MyThemeProvider } from "@dohyun-ko/react-atoms";

const HomePage = () => {
  return (
    <MyThemeProvider>
      <Area>
        <Circle diameter={"20px"} />
      </Area>
    </MyThemeProvider>
  );
};

export default HomePage;


interface HomePageProps {}
