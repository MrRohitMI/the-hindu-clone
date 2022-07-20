import { Flex,Select, Spacer,Box,Heading,ButtonGroup,Button, Popover,Text,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, } from '@chakra-ui/react'
import { Todayspaper,Opinion,Business,Sport,News,Entertainment,Science,Crossword} from './Navcomp'
import Footer from "./Footer"
export default function Navbar(){
    return(
    <Box>
       <Flex w="76%" gap="10px">
       <Todayspaper/>
       <News/>
       <Opinion/>
       <Business/>
       <Sport/>
       <Entertainment/>
       <Crossword/>
       <Science/>
       <Button bg="blue" color="white" fontSize={"13px"}>Get Trial</Button>
       <Button bg="yellow" color="black" fontSize={"13px"}>Subscribe Now</Button>
       <Button color="blue" border="1px solid blue" fontSize={"13px"}>Log in</Button>
       </Flex>
       <Footer/>
    </Box>)
    
}