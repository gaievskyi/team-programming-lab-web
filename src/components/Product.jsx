/* eslint-disable camelcase */
import {
  Stack,
  Text,
  Image,
  Center,
  Heading,
  ButtonGroup
} from '@chakra-ui/react'
import { Modal } from './Modal'

export const Product = ({
  title,
  unit_price,
  description,
  image = 'https://thinkapple.pl/wp-content/uploads/2021/01/hyundai-apple-car.jpg',
  onClick
}) => (
  <Stack
    sx={{
      transition: 'all 1s ease',
      margin: '0 auto',
      w: '100%',
      h: '100%',
      maxW: '500px',
      minH: '500px',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: `24px 24px 48px #d4d4d4,
             -24px -24px 48px #ffffff`,

      ':hover': {
        boxShadow: `-2px -2px 6px rgba(255, 255, 255, .6),
            -2px -2px 4px rgba(255, 255, 255, .4),
            2px 2px 2px rgba(255, 255, 255, .05),
            2px 2px 4px rgba(0, 0, 0, .1);`
      }
    }}
  >
    <Center
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack sx={{ mb: 10 }}>
        <Image boxSize="350px" objectFit="cover" src={image} alt="Apple car" />
      </Stack>
      <Heading fontSize="lg">{title}</Heading>
      <Text
        fontSize="xs"
        sx={{
          maxH: '30px'
        }}
      >
        {description}
      </Text>
      <Stack sx={{ m: 5 }}>
        <ButtonGroup>
          <Modal label="Rent" />
          <Modal label="Details" />
        </ButtonGroup>
        <Center sx={{ flexDirection: 'column' }}>
          <Text fontSize="xl">${unit_price} / hour</Text>
          <Text fontSize="md" color="tomato" as="s">
            ${unit_price + 100}
          </Text>
        </Center>
      </Stack>
    </Center>
  </Stack>
)
