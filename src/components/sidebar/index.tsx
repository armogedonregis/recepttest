import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiLoader } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

// Sidebar Container

const Container = styled(motion.nav)`
${tw`
    fixed
    left-0 
  flex
  flex-col
  justify-center
  items-start
  bg-primary
  h-[100vh]
`}
`;

const TextUp = styled.div`
${tw`
    absolute
    display[none]
    left-[35px]
    top-[-2px]
    text-primary
    bg-gray
    p-[4px 15px 3px 16px]
    text-smx
    ease-in delay-300
`}
`;

const IconContainer = styled.div<{
    act?: boolean;
    handle?: boolean;
}>`
${({ act }) => 
act && tw`w-[244px] pl-[16px]`
}
:hover ${TextUp} {
    display: ${({ act }) => !act ? "block" : "none" };
}
:hover {
    transform: ${({ act }) => !act ? "translateY(-0.25rem)" : "translateY(0rem)" };
}
${({ handle }) => 
handle ? tw`bg-white` : tw`cursor-pointer`
}
${tw`
    pt-[10px]
    pb-[12px]
    mb-[55px]
    flex items-center
    rounded-xl
    duration-500
    relative
`}
`;


const TextIcon = styled.div<{
    textAct?: boolean;
}>`
${({ textAct }) => 
textAct ? tw`text-primary` : tw`text-white`
}
${tw`
    select-none
    text-md
    pl-[25px]
`}
`;

const Loader = styled(BiLoader)`
${tw`
    w-[30px]
    h-[30px]
`}
`;

const Calendar = styled(FiCalendar)`
${tw`
    w-[30px]
    h-[30px]
`}
`;

const TimeIcon = styled(IoTimeOutline)`
${tw`
    w-[30px]
    h-[30px]
`}
`;

const variants = {
    open: { opacity: 1, x: 0, display: "block" },
    closed: { opacity: 0, x: "-100%", display: "none" },
}

const variantsNav = {
    open: { padding: "0 20px" },
    closed: { padding: "0 30px" },
}

export const Sidebar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const HandleClick = (id: number) => {
        setIndex(id)
    }

    const ref = useRef<any>(null);
    const HandleClose = (event: { target: any; }) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', HandleClose, true)
        return () => {
            document.removeEventListener('click', HandleClose, true)
        }
    })
  return (
      <Container
        ref={ref}
        animate={isOpen ? "open" : "closed"}
        variants={variantsNav}
        transition={{ duration: 0.5 }}
        >
        <IconContainer 
        act={isOpen} 
        handle={isOpen && index === 1}
        onClick={() => HandleClick(1)}
        >
            <TextUp>Рецепты</TextUp>
            <Loader 
            color={isOpen && index === 1 ? "#333333" : "white"}
            onClick={() => setIsOpen(true)} />
            <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
            <TextIcon textAct={index === 1}>Lorem ipsum</TextIcon>
        </motion.div>
        </IconContainer>
        <IconContainer 
        act={isOpen} 
        handle={isOpen && index === 2}
        onClick={() => HandleClick(2)}
        >
            <TextUp>Рецепты</TextUp>
            <Calendar 
            color={isOpen && index === 2 ? "#333333" : "white"} 
            onClick={() => setIsOpen(true)}
            />
            <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
            <TextIcon textAct={index === 2}>Избранное</TextIcon>
        </motion.div>
        </IconContainer>
        <IconContainer 
        act={isOpen} 
        handle={isOpen && index === 3}
        onClick={() => HandleClick(3)}
        >
            <TextUp>Рецепты</TextUp>
        <svg onClick={() => setIsOpen(true)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 16.5625L15 2.5L27.5 16.5625M5.27778 18.125V24.375C5.27778 25.2038 5.57044 25.9987 6.09137 26.5847C6.6123 27.1708 7.31884 27.5 8.05556 27.5H21.9444C22.6812 27.5 23.3877 27.1708 23.9086 26.5847C24.4296 25.9987 24.7222 25.2038 24.7222 24.375V18.125" stroke={isOpen && index === 3 ? "#333333" : "white"} strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
            <TextIcon textAct={index === 3}>Lorem</TextIcon>
        </motion.div>
        </IconContainer>
        <IconContainer 
        act={isOpen} 
        handle={isOpen && index === 4}
        onClick={() => HandleClick(4)}
        >
            <TextUp>Рецепты</TextUp>
            <TimeIcon 
            color={isOpen && index === 4 ? "#333333" : "white"} 
            onClick={() => setIsOpen(true)}
            />
            <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
            <TextIcon textAct={index === 4}>Lorem ipsum</TextIcon>
        </motion.div>
        </IconContainer>
    </Container>
    
  );
};
