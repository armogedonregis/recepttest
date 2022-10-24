import tw from "twin.macro";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineUpload } from "react-icons/hi";
import { TfiPlus } from "react-icons/tfi";
import { useState } from "react";

// Section Container

const Container = styled.section`
${tw`
    mb-[100px]
`}
`;

const LinkContainer = styled.div`
${tw`
    flex
    pt-[25px]
    items-center
    mb-[32px]
`}
`;

const Lurl = styled.span<{
    actUrl?: boolean;
}>`
${({ actUrl }) => 
actUrl ? tw`text-black select-none` : tw`text-gray-icon cursor-pointer`
}
${tw`
    mr-[15.5px]
    text-mdl
    font-nunito
`}
`;

const Chevron = styled(BsChevronRight)`
${tw`
    w-[15px] h-[15px]
    mr-[15.5px]
    text-gray-icon
`}
`;

const Title = styled.h1`
${tw`
    text-center
    text-6xl
    font-bold
    font-nunito
    text-black
    mb-[8px]
`}
`;

const PostTitle = styled.h2`
${tw`
    text-center
    text-2xl
    font-bold
    font-nunito
    text-black
    mb-[16px]
`}
`;

const Upload = styled.div`
${tw`
    flex items-center justify-center
    text-blueUp mb-[32px]
`}
`;

const UploadIcon = styled(HiOutlineUpload)`
${tw`
    mr-[8px]
    w-[24px]
    h-[24px]
    cursor-pointer
`}
`;

const UploadText = styled.div`
${tw`
    font-nunito
    font-semibold
    text-xl
    cursor-pointer
`}
`;

const CardContainer = styled.div`
${tw`
    flex items-center
    mb-[32px]
`}
`;

const Day = styled.div<{
    act?: boolean;
}>`
${({ act }) => 
act ? tw`bg-white text-primary` : tw`bg-primary text-white cursor-pointer`
}
${tw`
    mr-[37px]
    text-xl
    font-nunito
    rounded-2xl
    border-primary
    border-[1px]
    p-[12px 20px 13px 20px]
    select-none
`}
`;

const Card = styled.div`
${tw`
    mr-[30px]
    bg-gray-card
    rounded-xl
    border-gray-border
    border-[1px]
    p-[15px 15px 10px 15px]
    w-[180px] h-[180px]
`}
`;

const CardTitlePrice = styled.h3`
${tw`
    font-nunito
    text-primary-gray
    text-mdl
    mb-[10px]
`}
`;


const CardTextPriceContainer = styled.div`
${tw`
    flex justify-between items-center
    mb-[9px]
`}
`;

const CardTextPrice = styled.div`
${tw`
    font-nunito
    text-sml
    font-bold
    text-primary
`}
`;

const CardEat = styled.div`
${tw`
    mr-[30px]
    rounded-xl
    relative
    w-[180px]
    h-[180px]
`}
`;

const CardTextEat = styled.div`
transform: translateX(-50%);
${tw`
    font-nunito
    text-mdl
    text-white
    absolute
    text-center
    bottom-[10px]
    left-1/2
    z-10
    select-none
    whitespace-nowrap
`}
`;

const CardImg = styled.img`
${tw`
    rounded-xl
`}
`;

const CardMask = styled.div`
${tw`
    w-[180px]
    h-[39px]
    bg-primary
    opacity-[0.75]
    rounded-[0px 0px 10px 10px]
    absolute
    bottom-0
`}
`;

const CardAdd = styled.div`
${tw`
    flex items-center justify-center
    border-[2px]
    rounded-xl
    border-blueUp
    w-[180px] h-[180px]
`}
`;

const Plus = styled(TfiPlus)`
${tw`
    w-[33px] h-[33px]
    text-blueUp
`}
`;

const ChevronRight = styled(BsChevronRight)`
${tw`
    ml-[30px]
    w-[30px] h-[30px] text-chevron
    cursor-pointer
`}
`;

export const Hero: React.FC = () => {

    const [index, setIndex] = useState(1);

    const HandleClick = (id: number) => {
        setIndex(id)
    }

  return (
    <Container>
        <LinkContainer>
            <Lurl>Рецепты</Lurl>
            <Chevron />
            <Lurl>Блины и блинчики</Lurl>
            <Chevron />
            <Lurl actUrl>Американские блины</Lurl>
        </LinkContainer>
        <Title>Ваше меню на неделю</Title>
        <PostTitle>05.09.2022 - 11.09.2022</PostTitle>
        <Upload>
            <UploadIcon />
            <UploadText>Скачать список продуктов на неделю</UploadText>
        </Upload>
        <CardContainer>
            <Day act={index === 1} onClick={() => HandleClick(1)}>Пн</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_1.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_2.png" alt="" />
                <CardTextEat>Обед</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Ужин</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardAdd>
                <Plus />
            </CardAdd>
        </CardContainer>
        <CardContainer>
            <Day act={index === 2} onClick={() => HandleClick(2)}>Вт</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_1.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_2.png" alt="" />
                <CardTextEat>Обед</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Ужин</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_4.png" alt="" />
                <CardTextEat>Полдник</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <ChevronRight />
        </CardContainer>
        <CardContainer>
            <Day act={index === 3} onClick={() => HandleClick(3)}>Ср</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_1.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Второй завтрак</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_2.png" alt="" />
                <CardTextEat>Обед</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardAdd>
                <Plus />
            </CardAdd>
        </CardContainer>
        <CardContainer>
            <Day act={index === 4} onClick={() => HandleClick(4)}>Чт</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Ужин</CardTextEat>
            </CardEat>
            <CardAdd>
                <Plus />
            </CardAdd>
        </CardContainer>
        <CardContainer>
            <Day act={index === 5} onClick={() => HandleClick(5)}>Пт</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_1.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_5.png" alt="" />
                <CardTextEat>Второй завтрак</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Ужин</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardAdd>
                <Plus />
            </CardAdd>
        </CardContainer>
        <CardContainer>
            <Day act={index === 6} onClick={() => HandleClick(6)}>Сб</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_1.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_2.png" alt="" />
                <CardTextEat>Обед</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Ужин</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardAdd>
                <Plus />
            </CardAdd>
        </CardContainer>
        <CardContainer>
            <Day act={index === 7} onClick={() => HandleClick(7)}>Вс</Day>
            <Card>
                <CardTitlePrice>Пищевая ценность в день на человека</CardTitlePrice>
                <CardTextPriceContainer>
                    <CardTextPrice>Калории</CardTextPrice>
                    <CardTextPrice>220</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Белки</CardTextPrice>
                    <CardTextPrice>60 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Жиры</CardTextPrice>
                    <CardTextPrice>53 г</CardTextPrice>
                </CardTextPriceContainer>
                <CardTextPriceContainer>
                    <CardTextPrice>Углеводы</CardTextPrice>
                    <CardTextPrice>10 г</CardTextPrice>
                </CardTextPriceContainer>
            </Card>
            <CardEat>
                <CardImg src="./assets/images/eat_5.png" alt="" />
                <CardMask></CardMask>
                <CardTextEat>Второй завтрак</CardTextEat>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_2.png" alt="" />
                <CardTextEat>Обед</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_4.png" alt="" />
                <CardTextEat>Полдник</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <CardEat>
                <CardImg src="./assets/images/eat_3.png" alt="" />
                <CardTextEat>Ужин</CardTextEat>
                <CardMask></CardMask>
            </CardEat>
            <ChevronRight />
        </CardContainer>
    </Container>
  );
};
