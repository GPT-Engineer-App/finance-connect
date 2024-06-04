import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="#003366" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
        {/* Top News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading size="lg" mb={4}>Top News</Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Heading size="md" mt={2}>Headline of the Top News Article</Heading>
              <Text mt={2}>Brief description of the news article to give readers an idea of the content.</Text>
            </Box>
            <Divider />
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Heading size="md" mt={2}>Headline of Another News Article</Heading>
              <Text mt={2}>Brief description of the news article to give readers an idea of the content.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar for Financial Data */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Market Updates</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading size="sm">Market Index 1</Heading>
              <Text>Value: 12345.67</Text>
              <Text>Change: +0.89%</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading size="sm">Market Index 2</Heading>
              <Text>Value: 7654.32</Text>
              <Text>Change: -0.45%</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="#003366" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;