import Box, { Grid, Content } from '@codeday/topo/Box';
import Text, { Heading, Link } from '@codeday/topo/Text';
import Image, { Slideshow } from '@codeday/topo/Image';
import Button from '@codeday/topo/Button';

const Feature = (props) => <Text fontWeight="700" color="green.700" as="span" {...props} />

export default () => (
  <Content>
    <Heading paddingBottom={6} fontSize="5xl" textAlign="center">
      Dream of working at a top tech company?
    </Heading>
    <Grid templateColumns={{ base: "1fr", sm: "4fr 8fr"}} gap={6}>
      <Box>
        <Image
          borderRadius="sm"
          boxShadow="sm"
          width="100%"
          src="https://img.codeday.org/w=600;h=450;fit=crop;crop=edges/z/c/zc84reqxyyqnj63hhkaucdm3df6spjnnv195zeizq9yreaqjhcmdk1ju3u94wgkuo7.jpg"
        />
      </Box>
      <Box fontSize="lg">
        <Text>
          Join us! You'll match with an industry mentor and{' '} <Feature>create a real-world project in
          four weeks.</Feature> It's like a real-world internship at a leading tech company, but 100% online.
        </Text>
        <Text>
          That means you'll get to <Feature>learn the latest industry tools.</Feature> (Ever wondered what
          &ldquo;Kubernetes&rdquo; is? Or how real companies set up a GraphQL backend?)
        </Text>
        <Text>
          (We know so much is uncertain right now. Luckily, you won't need to worry about your summer plans by signing
          up for CodeLabs. <Feature>This is the fourth year we've done this.</Feature>)
        </Text>
      </Box>
    </Grid>
  </Content>
)
