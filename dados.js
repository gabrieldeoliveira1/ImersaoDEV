let banco_de_dados = [
    {
        titulo: "Subaru WRX STI 2011",
        descricao: "O Subaru WRX STI 2011 é um carro esportivo de alto desempenho que combina tradição e tecnologia. Sob o capô, abriga um motor boxer turbo de 2.5 litros, capaz de entregar uma potência e torque consideráveis. O sistema de tração integral Symmetrical All-Wheel Drive e a suspensão ajustada para rali proporcionam estabilidade em altas velocidades e em terrenos desafiadores, tornando o WRX STI um carro ágil e confiável tanto para as pistas quanto para estradas comuns.",
        link: "https://www.caranddriver.com/reviews/a15129267/subaru-wrx-sti-review-2011-subaru-impreza-wrx-sti-drive/",
        tags: ["boxer", "motor em linha", "awd", "desempenho"]
    },
    {
        titulo: "Porsche 911 Turbo S",
        descricao: "O Porsche 911 Turbo S é um verdadeiro ícone dos carros esportivos. Com seu design clássico, motor traseiro e tração integral, ele oferece um desempenho de tirar o fôlego. Equipado com um motor twin-turbo de 3.8 litros que gera mais de 640 cavalos de potência, o Turbo S vai de 0 a 100 km/h em menos de 2,7 segundos. Além disso, seu interior luxuoso proporciona conforto e tecnologia de ponta, garantindo que o 911 Turbo S não seja apenas rápido, mas também refinado e confortável para o dia a dia.",
        link: "https://www.porsche.com/usa/models/911/911-turbo-models/911-turbo-s/",
        tags: ["twin turbo", "traseiro", "luxo", "desempenho"]
    },
    {
        titulo: "Ferrari 458 Itália",
        descricao: "A Ferrari 458 Itália é a personificação do desempenho italiano em um supercarro. Equipado com um motor V8 naturalmente aspirado de 4.5 litros, a 458 gera 562 cavalos de potência e acelera de 0 a 100 km/h em apenas 3,4 segundos. Sua aerodinâmica cuidadosamente projetada permite que o carro corte o vento de forma eficiente, enquanto o sistema de suspensão adaptativa e a tração traseira proporcionam uma experiência de condução excepcionalmente ágil e responsiva. O interior luxuoso e minimalista reflete o foco da Ferrari no prazer de dirigir.",
        link: "https://www.ferrari.com/en-US/auto/458-italia",
        tags: ["v8", "naturalmente aspirado", "traseira", "desempenho"]
    },
    {
        titulo: "Toyota MR2",
        descricao: "O Toyota MR2 é um dos carros mais divertidos de se dirigir, conhecido por sua configuração de motor central, o que garante uma distribuição de peso quase perfeita. Seu desempenho ágil e sua capacidade de resposta nas curvas o tornam um favorito entre os entusiastas de carros esportivos. Equipado com motores que variam de 1.6 a 2.0 litros, o MR2 oferece uma experiência de condução emocionante, mesmo em velocidades mais baixas. Compacto e leve, ele proporciona uma sensação quase telepática entre o carro e o motorista, sendo ideal para quem gosta de sentir cada movimento da estrada.",
        link: "https://www.caranddriver.com/reviews/a15141875/toyota-mr2-turbo-archived-test-review/",
        tags: ["motor central", "compacto", "agilidade", "diversão"]
    },
    {
        titulo: "Honda Prelude",
        descricao: "O Honda Prelude é um dos clássicos mais apreciados da Honda, conhecido por suas linhas elegantes e desempenho robusto. Equipado com o famoso motor VTEC da Honda, o Prelude é capaz de fornecer potência impressionante em altas rotações, o que o torna emocionante de dirigir. Com uma suspensão bem ajustada e uma carroceria aerodinâmica, ele proporciona uma experiência de condução ágil e precisa. Além disso, seu design interior, com detalhes sofisticados, oferece tanto conforto quanto controle, tornando-o um carro que equilibra perfeitamente estilo e performance.",
        link: "https://www.caranddriver.com/photos/g34980950/tested-1997-honda-prelude-sh-photos/",
        tags: ["vtec", "elegância", "suspensão ajustada", "potência"]
    },
    {
        titulo: "Mazda MX-5 Miata",
        descricao: "O Mazda MX-5 Miata é frequentemente considerado o roadster definitivo. Com seu peso leve, equilíbrio perfeito e dirigibilidade intuitiva, ele oferece uma experiência de condução pura e prazerosa. Equipado com um motor de 2.0 litros e cerca de 181 cavalos de potência, o MX-5 não é sobre velocidade máxima, mas sim sobre a sensação de liberdade ao volante. Seu design clássico, que remonta aos roadsters britânicos dos anos 60, é complementado por uma tecnologia moderna e um interior aconchegante, tornando-o o carro perfeito para quem busca emoção em cada curva.",
        link: "https://www.mazdausa.com/vehicles/mx-5-miata",
        tags: ["roadster", "leve", "equilíbrio", "dirigibilidade"]
    },
    {
        titulo: "Mitsubishi Lancer Evolution",
        descricao: "O Mitsubishi Lancer Evolution, ou 'Evo', é uma lenda no mundo dos carros de rali. Equipado com um motor turbo de 2.0 litros e um sofisticado sistema de tração integral, o Evo é famoso por seu desempenho brutal e sua capacidade de conquistar qualquer tipo de terreno. Com seu sistema avançado de controle de tração e diferencial, o Evo proporciona uma condução incrivelmente precisa, seja em estradas sinuosas ou pistas de corrida. Seu design robusto e aerodinâmico complementa sua natureza agressiva e esportiva.",
        link: "https://www.caranddriver.com/reviews/a15132985/mitsubishi-lancer-evolution-auto-shows/",
        tags: ["turbo", "tração integral", "controle de tração", "desempenho"]
    },
    {
        titulo: "Toyota Supra",
        descricao: "O Toyota Supra é um carro lendário, não apenas por sua presença na cultura pop, mas por seu desempenho excepcional. Equipado com um motor 3.0 litros turbo de seis cilindros, o Supra entrega mais de 335 cavalos de potência e acelera de 0 a 100 km/h em apenas 4,1 segundos. Seu chassi bem equilibrado e sua suspensão ajustada garantem uma experiência de condução ágil e emocionante. O design exterior do Supra, com suas linhas agressivas e aerodinâmicas, reflete seu foco em velocidade e precisão.",
        link: "https://www.toyota.com/supra/",
        tags: ["turbo", "seis cilindros", "agilidade", "desempenho"]
    },
    {
        titulo: "Nissan Skyline GT-R R34",
        descricao: "O Nissan Skyline GT-R R34 é um dos carros mais icônicos da história automotiva japonesa. Conhecido por seu sistema avançado de tração integral e seu motor RB26DETT twin-turbo de seis cilindros, o R34 tornou-se uma lenda entre os entusiastas de carros. Sua habilidade em combinar potência bruta com precisão e dirigibilidade o tornaram uma escolha popular tanto em competições quanto nas ruas. Além de suas credenciais de desempenho, o design do R34, com suas linhas agressivas e aerodinâmicas, capturou a imaginação de uma geração.",
        link: "https://www.nissanusa.com/experience-nissan/news-and-events/the-legend-of-skyline.html",
        tags: ["twin turbo", "tração integral", "seis cilindros", "desempenho"]
    },
    {
        titulo: "Ferrari F40",
        descricao: "A Ferrari F40 é um dos supercarros mais icônicos já produzidos. Criada para comemorar o 40º aniversário da marca, a F40 foi o último modelo aprovado pessoalmente por Enzo Ferrari. Equipado com um motor V8 biturbo de 2.9 litros, o carro produz 471 cavalos de potência e oferece uma experiência de condução crua e visceral, sem a interferência de assistências eletrônicas modernas. Seu design agressivo e sua construção leve, com fibra de carbono, garantem que a F40 continue sendo reverenciada como uma obra-prima automotiva.",
        link: "https://www.ferrari.com/en-EN/auto/f40",
        tags: ["v8", "biturbo", "fibra de carbono", "desempenho"]
    },
    {
        titulo: "Lamborghini Miura",
        descricao: "O Lamborghini Miura é frequentemente creditado como o primeiro supercarro de motor central-traseiro, uma configuração que se tornaria padrão entre os supercarros de alto desempenho. Lançado nos anos 60, o Miura mudou a maneira como os carros esportivos eram projetados, combinando um motor V12 de 4.0 litros com um design revolucionário. Com suas linhas suaves e elegantes, o Miura se destaca tanto pelo desempenho quanto pela estética, sendo amplamente considerado um dos carros mais belos já produzidos.",
        link: "https://www.lamborghini.com/en-en/models/classic/miura",
        tags: ["v12", "motor central-traseiro", "design revolucionário", "estética"]
    }
];
