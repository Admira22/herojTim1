import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Images from '../registeredUser/Images';


function Lesson1(){
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
    const UL = styled("ul")(({theme}) =>({
        backgroundColor: theme.palette.primary,
        ...theme.typography.h6,
        padding: theme.spacing(10),
        textAlign: 'left',
        color: '#3B3B3B'
    }));

    return(
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <H1>LEKCIJA 1. UVOD U PRVU POMOĆ</H1>
            </Grid>
            {/*<Grid item xs={4}>
                <News/>
            </Grid>*/}
            <Grid item xs={6}>
                <H2>ŠTA JE PRVA POMOĆ</H2>
                <Item>Prva pomoć se odnosi na hitnu ili neposrednu njegu koju trebate pružiti kada je osoba povrijeđena ili
                    bolesna dok ne bude dostupna potpuna medicinska pomoć. Za manja stanja može biti dovoljna prva pomoć. U slučaju ozbiljnih problema, njegu prve pomoći treba nastaviti sve dok naprednija njega ne postane dostupna.
                    Odluka da se pravilno postupi uz prvu pomoć može značiti razliku između života i smrti.
                    Počnite tako što ćete se predstaviti povređenoj ili bolesnoj osobi. Objasnite da ste pružalac prve pomoći i da
                    ste voljni pomoći.</Item>
            </Grid>
            <Grid item xs={6}>
                <H2>OSNOVE PRVE POMOĆI</H2>
                <Item>
                    Prvi korak u svakoj hitnoj situaciji je prepoznavanje problema i pružanje pomoći. Kada ste u nedoumici ili kada je neko ozbiljno povrijeđen ili bolestan, uvijek biste trebali nazvati broj hitne medicinske pomoći u vašem području.
                    Bilo da ste kod kuće, na poslu ili u školi, znajte gdje se čuvaju komplet prve pomoći i AED i budite upoznati s njihovim sadržajem.
                    Nakon utvrđivanja problema, sljedeći korak u pružanju pomoći je utvrđivanje odziva povrijeđenog ili oboljelog. Najbolji način da to utvrdite je da dodirnete osobu i glasno joj razgovarate: „Jesi li dobro?“
                </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>KOMPLET PRVE POMOĆI</H2>
                <Item>
                <UL>
                    <li> Zavoji, zavoji na valjcima i traka</li>
                    <li>  Sterilna gaza</li>
                    <li>  Antiseptičke maramice i brisevi</li>
                    <li>  Upijajuće obloge</li>
                    <li>  Antibiotska krema </li>
                    <li>  Mast za opekotine </li>
                    <li>  Maska za disanje (respiratorno disanje/CPR)</li>
                    <li>  Hemijsko hladno pakovanje</li>
                    <li>  Štitnik za oči i ispiranje očiju</li>
                    <li>  Referentni vodič prve pomoći koji uključuje lokalne brojeve telefona</li>
                </UL>
                    </Item>
            </Grid>
            <Grid item xs={6}>
                <H2>SLIKE</H2>
                <Item>
                    <Images/>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>HEELOO</Item>
            </Grid>
        </Grid>
    )
}
export default Lesson1;