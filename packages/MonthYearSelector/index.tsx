import React, { useCallback, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Center,
  IBoxProps,
  useColorModeValue,
  Text,
  Flex,
  Icon,
  Button,
} from "native-base";

type ChangeData = {
  month: number;
  year: number;
};

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const monthsLabelsDefault = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

interface MonthYearSelectorProps extends IBoxProps {
  onChange(data: ChangeData): void;
  labelTitle?: string;
  indicatorColor?: string;
  monthNames?: string[];
  colorScheme?: string;
  selectedYear: number;
  selectedMonth: number;
  labelSubmit?: string;
}

const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  onChange,
  labelTitle,
  indicatorColor = "teal.500",
  colorScheme = "teal",
  monthNames = monthsLabelsDefault,
  selectedYear = new Date().getFullYear(),
  selectedMonth = new Date().getMonth(),
  labelSubmit = "Selecionar",
  ...props
}) => {
  const [year, setYear] = useState<number>(selectedYear);
  const [month, setMonth] = useState<number>(selectedMonth);

  const onChangeDate = useCallback(
    (y: number, m: number) => {
      onChange({ year: y, month: m });
    },
    [onChange]
  );

  return (
    <Box p="2" bg={useColorModeValue("gray.50", "gray.700")} {...props}>
      <Center>
        <Text fontSize="md" p="2">
          {labelTitle ? labelTitle : "Selecionar"}
        </Text>

        <Flex
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          w="full"
          p="3"
        >
          <Icon
            as={AntDesign}
            name="arrowleft"
            size="sm"
            color={indicatorColor}
            onPress={() => setYear(year - 1)}
          />
          <Text fontSize="xl" fontWeight="bold">
            {year}
          </Text>
          <Icon
            as={AntDesign}
            name="arrowright"
            size="sm"
            color={indicatorColor}
            onPress={() => setYear(year + 1)}
          />
        </Flex>
      </Center>
      <Flex flexDirection="row" flexWrap="wrap">
        {months.map((m) => (
          <Button
            variant={m === month ? "solid" : "ghost"}
            onPress={() => setMonth(m)}
            w="1/3"
            colorScheme={colorScheme}
            key={m}
          >
            {monthNames[m]}
          </Button>
        ))}
      </Flex>
      <Button
        mt="5"
        onPress={() => onChangeDate(year, month)}
        colorScheme={colorScheme}
      >
        {labelSubmit}
      </Button>
    </Box>
  );
};

export default MonthYearSelector;
