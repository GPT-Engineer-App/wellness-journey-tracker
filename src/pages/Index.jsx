import React from "react";
import { Container, VStack, HStack, Text, Progress, CircularProgress, CircularProgressLabel, Box, IconButton, Divider, Flex, Spacer, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Icon } from "@chakra-ui/react";
import { FaApple, FaGoogle, FaUtensils, FaDumbbell, FaBed, FaCog, FaChartBar, FaBullseye, FaTachometerAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Fitness Dashboard
        </Heading>
        <Box textAlign="center">
          <CircularProgress value={94} size="120px" color="green.400">
            <CircularProgressLabel>94%</CircularProgressLabel>
          </CircularProgress>
          <Text mt={4}>Overall Efficiency</Text>
        </Box>
        <VStack spacing={4} width="100%">
          <HStack width="100%">
            <Text flex="1">Diet</Text>
            <Progress value={70} size="lg" colorScheme="blue" flex="3" />
            <Text ml={4}>70%</Text>
          </HStack>
          <HStack width="100%">
            <Text flex="1">Workout Frequency</Text>
            <Progress value={80} size="lg" colorScheme="green" flex="3" />
            <Text ml={4}>80%</Text>
          </HStack>
          <HStack width="100%">
            <Text flex="1">Recovery Time</Text>
            <Progress value={60} size="lg" colorScheme="red" flex="3" />
            <Text ml={4}>60%</Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

const Statistics = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Statistics
        </Heading>
        <StatGroup>
          <Stat>
            <StatLabel>Steps</StatLabel>
            <StatNumber>202,953</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Stand Hours</StatLabel>
            <StatNumber>466 hours</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Active Calories</StatLabel>
            <StatNumber>14,143 kcal</StatNumber>
            <StatHelpText>Last 30 days</StatHelpText>
          </Stat>
        </StatGroup>
      </VStack>
    </Container>
  );
};

const Goals = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Goals
        </Heading>
        <HStack width="100%">
          <Icon as={FaDumbbell} boxSize={8} />
          <Text flex="1">Exercise</Text>
          <Text>20 minutes</Text>
        </HStack>
        <HStack width="100%">
          <Icon as={FaBed} boxSize={8} />
          <Text flex="1">Rest & Recovery</Text>
          <Text>15 minutes</Text>
        </HStack>
        <HStack width="100%">
          <Icon as={FaUtensils} boxSize={8} />
          <Text flex="1">Diet</Text>
          <Text>1600 calories</Text>
        </HStack>
      </VStack>
    </Container>
  );
};

const Settings = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Settings
        </Heading>
        <Text>Manage your account, connect/disconnect from other fitness apps, set preferences, and configure notifications.</Text>
      </VStack>
    </Container>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = React.useState("dashboard");

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} width="100%">
        <HStack width="100%" justifyContent="space-between">
          <IconButton aria-label="Dashboard" icon={<FaTachometerAlt />} onClick={() => setActiveSection("dashboard")} />
          <IconButton aria-label="Statistics" icon={<FaChartBar />} onClick={() => setActiveSection("statistics")} />
          <IconButton aria-label="Goals" icon={<FaBullseye />} onClick={() => setActiveSection("goals")} />
          <IconButton aria-label="Settings" icon={<FaCog />} onClick={() => setActiveSection("settings")} />
        </HStack>
        <Divider />
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "statistics" && <Statistics />}
        {activeSection === "goals" && <Goals />}
        {activeSection === "settings" && <Settings />}
      </VStack>
    </Container>
  );
};

export default Index;
