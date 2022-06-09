import { Post } from './Post';

export function Posts() {
    const title = 'Setembro Amarelo: como empresas podem criar um ambiente de segurança psicológica';
    const description = 'Hoje, já conhecemos  o Setembro Amarelo e seu significado. Esse marco temporal se tornou parte das ações de promoção de saúde de empresas, governos, formadores de opinião e da sociedade em geral. Isso mostra a importância de se falar, compreender e prevenir  um fenômeno complexo como o suicídio. Durante esse período de aprendizado e reflexão, temos a oportunidade de conversar sobre o suicídio e de estabelecer uma conversa permanente sobre ele, o que é essencial. É importante discutir o assunto em setembro, mas ele precisa estar em pauta o ano todo.';
    const title2 = 'Como incluir o público LGBTQIAP+ na sua empresa?';
    const description2 = 'Hoje, sabemos que um ambiente de trabalho acolhedor e inclusivo traz enormes benefícios para empresas e colaboradores. Acolher diversas perspectivas enriquece a experiência em todos os níveis e é capaz de gerar importantes resultados. Existem diferentes maneiras de ser e diferentes maneiras de experimentar o mundo. Por isso, procurar maneiras de acolher a maior diversidade possível de perspectivas é essencial para criar um ambiente de trabalho produtivo, respeitoso e amigável.';
    
    return (
        <ul>
            <Post title={title} description={description} />
            <Post title={title2} description={description2} />
        </ul>
    );
}