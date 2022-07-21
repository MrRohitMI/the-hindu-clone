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
import Login from "./Login"
import {Link} from "react-router-dom"
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
       <Link to={'/gettrial'}><Button bg="blue" color="white" fontSize={"13px"}>Get Trial</Button></Link>
       <Button bg="yellow" color="black" fontSize={"13px"}>Subscribe Now</Button>
       <Login/>
       </Flex>
       <Footer/>
    </Box>)
    
}