import tw from "twin.macro";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

// Header Container

const Container = styled.header`
box-shadow: 0px 0px 15px rgba(68, 68, 68, 0.25);
${tw`
    py-[11px]
    w-full 
    relative z-40
    
`}
`;

const Navbar = styled.nav`
${tw`
    max-w-[1440px] px-[105px] mx-auto
    flex justify-between items-center
`}
`;

const BtnContainer = styled.div`
${tw`
    flex
    items-center
`}
`;

const Btn = styled.a`
${tw`
    text-xl
    text-primary
    px-[10.5px]
    cursor-pointer
`}
`;

const BtnLogo = styled.img`
${tw`
    cursor-pointer
`}
`;

const AvatarContainer = styled.div`
${tw`
    flex items-center
`}
`;

const SearchContainer = styled.div`
${tw`
    relative z-50
`}
`;

const SearchArea = styled.input`
${tw`
    absolute
    z-40
    top-[-8px] right-[8px]
    border-[0.5px]
    w-[850px]
    h-[40px]
    pl-[20px]
    pr-[60px]
    rounded-[100px]
    outline-none
`}
`;

const SearcIcon = styled(FiSearch)`
${tw`
    w-[24px]
    h-[24px]
    mr-[25px]
    cursor-pointer
    relative z-50
`}
`;

const BellIcon = styled(BsBell)`
${tw`
    w-[24px]
    h-[24px]
    mr-[15px]
    cursor-pointer
`}
`;

const Text = styled.div`
${tw`
    text-sm text-right
    mr-[10px]
`}
`;

const ImgContent = styled.div`
${tw`
    relative
`}
`;

const ImgAvatar = styled.img`
${tw`
    cursor-pointer
`}
`;

const BurgerMenu = styled(motion.div)`
box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.25);
${tw`
    absolute z-[99]
    top-[45px] left-[-120px]
    bg-white
    w-[160px] h-[190px]
    p-[15px]
`}
`;

const BurgerText = styled.div`
${tw`
    font-nunito
    text-mdl
    cursor-pointer
`}
`; 

const variants = {
    open: { opacity: 1, x: 0, display: "block" },
    closed: { opacity: 0, x: "-100%", display: "none" },
}

const variantsBurg = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: "-100%", display: "none" },
}

export const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenBurg, setIsOpenBurg] = useState(false);
    
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

    const refTwo = useRef<any>(null);
    const HandleCloseTwo = (event: { target: any; }) => {
        if (refTwo.current && !refTwo.current.contains(event.target)) {
            setIsOpenBurg(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', HandleCloseTwo, true)
        return () => {
            document.removeEventListener('click', HandleCloseTwo, true)
        }
    })
    
  return (
    <Container>
        <Navbar>
        <Link href="/"><BtnLogo src="./assets/vector/logo.svg" alt="" /></Link>
            <BtnContainer>
                <Link href="/"><Btn>О проекте</Btn></Link>
                <Link href="/"><Btn>Меню на неделю</Btn></Link>
                <Link href="/"><Btn>Кулинарная школа</Btn></Link>
                <Link href="/"><Btn>Рецепты</Btn></Link>
            </BtnContainer>
            <AvatarContainer>
                <SearchContainer ref={ref}>
                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.2 }}
                >
                    <SearchArea type="text" />
                    </motion.div>
                    <SearcIcon onClick={() => setIsOpen(isOpen => !isOpen)} />
                </SearchContainer>
                <BellIcon />
                <Text>Привет,<br /> Анастасия !</Text>
                <ImgContent>
                    <ImgAvatar onClick={() => setIsOpenBurg(isOpenBurg => !isOpenBurg)} src="./assets/images/avatar.png" alt="" />
                    <BurgerMenu animate={isOpenBurg ? "open" : "closed"}
                    variants={variantsBurg}
                    transition={{ duration: 0.5 }} ref={refTwo}>
                        <BurgerText className="mb-[10px] border-b-[0.5px] border-gray-border pb-[7px]">Мой профиль</BurgerText>
                        <BurgerText className="mb-[7px]">Платежи</BurgerText>
                        <BurgerText className="mb-[10px] border-b-[0.5px] border-gray-border pb-[7px]">Подписка</BurgerText>
                        <BurgerText className="mb-[10px] border-b-[0.5px] border-gray-border pb-[7px]">Помощь</BurgerText>
                        <BurgerText className="text-red">Выход</BurgerText>
                    </BurgerMenu>
                </ImgContent>
            </AvatarContainer>
        </Navbar>
    </Container>
  );
};
