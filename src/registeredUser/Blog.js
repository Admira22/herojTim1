import Grid from "@mui/material/Grid";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Blog(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: '#3B3B3B'

    }));
    const H1 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.dark
    }));
    const H2 = styled("h1")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h4,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.secondary.main
    }));
    const H3 = styled("h3")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(10),
        textAlign: 'left',
        color: theme.palette.secondary.main
    }));
    const IMG = styled("img")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(1),
        marginLeft: 100
    }));

    return(
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <H1>3 Dnevne navike za smanjenje stresa</H1>
            </Grid>
            <Grid item xs={6}>
                <Item>
                <H3>Pitanje je, kako da ostanemo pri razumu i prizemljeni u ovom trenutku? I kako da pomognemo našim porodicama da učine isto?
                    Oslanjam se na tri jednostavna dnevna rituala kako bih sebi pomogao da ostanem smiren u teškim vremenima.</H3>
                    <IMG src={"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts-doctors/1800x1200_woman-outside-relaxed.jpg?resize=800px:*"} width={300} height={200}/>
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>ŠTA JE MOJA NAMJERA?</H2>
                <Item>Postavi moju namjeru. Prvo što radim svako jutro, prije nego što uopće uzmem kafu, je da razmislim o svojoj namjeri za taj dan.
                    Šta će biti moja "glavna tema" dana? Ovako usmjeravanje mog fokusa ne samo da mi pomaže da odredim prioritete, već me stavlja i za volan.
                    Često se može osjećati kao da nas život vuče okolo, ali postavljanje ovakve namjere može nam pomoći da imamo kontrolu nad onim što želimo da radimo u danu koji nam je dat.
                    Vaša namjera bi mogla biti da se fokusirate na svoj posao i da uđete u projekat, ili je to možda briga o sebi i pozivanje doktora na pregled. Nedavno su mi namjere bile da napredujem na projektu na poslu i da budem prisutan za svoju djecu.
                    To što imam fokus ili namjeru pomaže mi da imam zvijezdu Sjevernjaču za taj dan, tako da se mentalno ne zaglavim.</Item>
            </Grid>
            <Grid item xs={6}>
                <H2>PROBUDITE SVOJE TIJELO</H2>
                <Item>
                    Probudi svoje tijelo. Moj drugi dnevni zadatak je pronaći 15-30 minuta za fizičku aktivnost, po mogućnosti na otvorenom.
                    To je zato što vježbanje nije samo dobro za naše fizičko zdravlje, već može pomoći i našem mentalnom i emocionalnom blagostanju.
                    Ako to možete raditi napolju i biti na suncu, to je definitivno bonus – smatra se da sunce oslobađa serotonin, hormon koji pomaže u raspoloženju i fokusiranju.
                    Odmor od posla čak i od 15-minutne šetnje može vam dati više energije, što će na kraju pomoći vašem raspoloženju i produktivnosti.
                    Često idem na svoj sobni bicikl samo na 15 minuta sa svojom omiljenom play listom i mogu osjetiti poticaj od nje.
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>VJEŽBAJTE ZAHVALNOST</H2>
                <Item>
                    Vježbajte zahvalnost. Moj treći ritual je na kraju dana.
                    A ovo je da odvojim trenutak i samo nabrojim 1-2 stvari na kojima sam zaista zahvalan.
                    Trudim se da budem što je moguće konkretniji -- ovo zahtijeva više razmišljanja i smatram da se dodatni trud isplati.
                    Razmislite šta je to i zašto ste zahvalni na tome. Na primjer, juče sam bio veoma zahvalan za svoju sobu.
                    To zvuči trivijalno, ali nije – moja soba mi se čini kao utočište, prostor u kojem mogu razmišljati i biti kreativan.
                    Osjećaj zahvalnosti za svoj dom, porodicu, zdravlje ili prijatelja pomaže nam da pređemo sa stresne i negativne na
                    pozitivniju
                    perspektivu.
                    A to može pomoći našim nivoima emocionalnog stresa, posebno tokom ove pandemije.
                </Item>
            </Grid>
        </Grid>
    )
}
export default Blog;