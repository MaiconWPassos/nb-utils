import React from "react";
import MonthYearSelector from "../packages/MonthYearSelector";

import { NativeBaseProvider, extendTheme, Box } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

export default {
  title: "MonthYearSelector",
};

export const Light = () => (
  <NativeBaseProvider>
    <Box w="md">
      <MonthYearSelector
        onChange={({ year, month }) => console.log(year, month)}
        selectedMonth={new Date().getMonth()}
        selectedYear={new Date().getFullYear()}
      />
    </Box>
  </NativeBaseProvider>
);

export const Dark = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Box w="md">
        <MonthYearSelector
          onChange={({ year, month }) => console.log(year, month)}
          selectedMonth={new Date().getMonth()}
          selectedYear={new Date().getFullYear()}
        />
      </Box>
    </NativeBaseProvider>
  );
};
