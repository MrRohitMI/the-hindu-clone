import {Box,Image,Heading,Text} from "@chakra-ui/react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useState } from "react"
import { useEffect } from "react"
export default function Home(){
    const [data,setData]=useState([])
    // let [sample,setSample]=useState(1)
    function getData(){
    fetch(`https://rohitcena.herokuapp.com/articals`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))
    
    }
    useEffect(()=>{
        // setTimeout(getData(),1000)
        getData()
        
    },[])
    // window.onbeforeunload=()=>{
    //     localStorage.setItem("sample",JSON.stringify(sample))
    // }
    // window.onload=()=>{
    //     let x=JSON.parse(localStorage.getItem("sample"))
    //     setSample(x)
    //     sample++
    // }
    console.log(data)
    // console.log(data[0].urlToImage)
    return<Box display="flex">
        <Box w="12%" h="640px" border="1px solid red" position="sticky" top="0"></Box>
        <Box w="76%">
            <Logo/>
            <Navbar/>
            <Box h="540px" w="97.5%" m="auto" border="1px solid blue" display="flex" justifyContent="space-between">
                <Box h="100%" w="32%" border="1px solid violet">
                    <Box w="100%" h="73.6%" border="1px solid yellow" marginBottom="7%">
                        <Box w="100%" h="50%" border="1px solid purple">
                            <Image h="100%" w="100%" src={data[6].urlToImage} alt={data[6].source.name}/>
                        </Box>
                        <Box w="100%" h="50%" border="1px solid purple" bg="#133B5A" paddingBottom="10px">
                            <Heading color="white" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="24px">{data[0].title}</Heading>
                            <Text color="white" fontFamily="Firasans" fontWeight="600" textAlign="left" fontSize="11px" mt="10px">{data[0].author}</Text>
                            <Text color="white" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="14px" mt="10px">{data[0].description}</Text>
                        </Box>
                    </Box>
                    <Box w="100%" h="22.4%" border="1px solid brown" display="flex" justifyContent="space-between">
                        <Box w="37%" h="100%" border="1px solid black">
                        <Image h="100%" w="100%" src={data[0].urlToImage} alt={data[0].source.name}/>
                        </Box>
                        <Box w="61%" h="100%" border="1px solid black"></Box>
                    </Box>
                </Box>
                <Box h="100%" w="32%" border="1px solid violet">
                    <Box h="22.4%" w="100%" border="1px solid black" mb="6%" display="flex" justifyContent="space-between"></Box>
                    <Box h="22.4%" w="100%" border="1px solid black" mb="6%" display="flex" justifyContent="space-between"></Box>
                    <Box h="22.4%" w="100%" border="1px solid black" mb="6%" display="flex" justifyContent="space-between"></Box>
                    <Box h="22.4%" w="100%" border="1px solid black"></Box>
                </Box>
                <Box h="100%" w="32%" border="1px solid violet">
                    <Box h="48%" w="100%" border="1px solid purple" mb="7%"></Box>
                    <Box h="48%" w="100%" border="1px solid purple">
                        <Box h="41%" w="100%" border="1px solid brown" mb="6%"></Box>
                        <Box h="41%" w="100%" border="1px solid brown"></Box>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
        <Box w="12%" h="640px" border="1px solid green" position="sticky" top="0"></Box>
    </Box>
}