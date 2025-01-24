import { Grid,GridItem, Box, Heading, Image, Text, HStack, VStack, Card, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import myPic from "../assets/IMG_8699.webp";
import { SiApplemusic } from "react-icons/si";
const About = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
        <Grid
        templateAreas={{base:`"header" "pic" "main"`, lg:`"header header" "pic main"`,}}
        templateColumns={{
            base: "1fr",
            //single column layout
            lg: "1fr 1fr",
            //two columns each taking up half the space
          }}
          alignItems="start"
          justifyContent="center"
        >
            <GridItem area="header">
                <Heading fontSize="5xl" color="pink.500" paddingY="80px">I'm Wanrueni Khuantang.</Heading>
            </GridItem>
            <GridItem
            area="pic"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={"100%"}
            >
                <Card align="center" size="sm" borderRadius={16} maxW="300px" bgColor="gray.100">
                    <CardBody padding="12px 12px 0px 12px">
                        <Image borderRadius={16} src= {myPic}  />
                    </CardBody>
                    <CardFooter margin={2}>
                        <HStack gap={2}>
                            <SiApplemusic size={25} color='#FF4162'/>
                            <Text fontWeight="bold" color="gray.600">Half Moon by Dean</Text>
                        </HStack>
        
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem
            area="main"
            textAlign="left"
            maxW={{ base: "100%", lg: "80%" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={{base:"30px",lg:"0px"}}
            fontSize={18}
            >
        
                <Box margin={2}>
                    I am a front-end web deveoper who is passionate about learning. In my journey, there is always something exciting to learn, room to improve, and grow. I am fueled with passion and perseverance, and I am thrilled to express it here.
                </Box>
                <Box margin={2}>
                    Nowadays, I am experimenting with mobile development. One of the applications I am working on will provide efficient solutions to restaurant management's inventory common problems. I can't wait to share it soon!
                </Box>
                <Box margin={2}>
                    Outside of programming, I am a bit of a bibliophile. I love experiencing new exciting worlds through various fascinating point-of-views. My favorite title to date is Catch And Release by Isabel Murray. I also love exploring the (physical) world, appreciating the beauty of nature.
                </Box>
        
        
            </GridItem>
        </Grid>
    </Box>
  )
}

export default About