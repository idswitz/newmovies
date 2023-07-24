import { Content, Wrapper, Text} from "./Banner.styles";

const Banner =({image,tittle,text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{tittle}</h1>
                <p>{text}</p>
            </Text>
        </Content>

    </Wrapper>
);


export default Banner;