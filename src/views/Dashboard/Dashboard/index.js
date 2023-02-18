// Chakra imports
import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Button,
  ButtonGroup,
  Text
} from "@chakra-ui/react";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import { tablesTableData, dashboardTableData } from "variables/general";
import Authors from "./components/Authors";
import React from "react";
import MiniStatistics from "./components/MiniStatistics";
import Card from "components/Card/Card";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Box sx={{ mt: "30px" }}>
        <Authors
          title={"Orders Table"}
          captions={["Author", "Function", "Status", "Employed", "Aksi"]}
          data={tablesTableData}
        />
      </Box>
    </Flex>
  );
}
