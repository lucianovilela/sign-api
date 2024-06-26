import moment from 'moment';
import wiki from 'wikijs';

const SIGNOS = () => {
  return [
    {
      signo: 'Aquarius',
      meses: [1, 2],
      dias: [20, 18],
      name: 'aquarius',
      image: ('../assets/signos/aquarius.png'),
    },
    {
      signo: 'Pisces',
      meses: [2, 3],
      dias: [19, 20],
      name: 'pisces',
      image: ('../assets/signos/pisces.png'),
    },
    {
      signo: 'Aries',
      meses: [3, 4],
      dias: [21, 19],
      name: 'aries',
      image: ('../assets/signos/aries.png'),
    },
    {
      signo: 'Taurus',
      meses: [4, 5],
      dias: [20, 20],
      name: 'taurus',
      image: ('../assets/signos/taurus.png'),
    },
    {
      signo: 'Gemini',
      meses: [5, 6],
      dias: [21, 21],
      name: 'gemini',
      image: ('../assets/signos/gemini.png'),
    },
    {
      signo: 'Cancer',
      meses: [6, 7],
      dias: [22, 22],
      name: 'cancer',
      image: ('../assets/signos/cancer.png'),
    },
    {
      signo: 'Leo',
      meses: [7, 8],
      dias: [23, 22],
      name: 'leo',
      image: ('../assets/signos/leo.png'),
    },
    {
      signo: 'Virgo',
      meses: [8, 9],
      dias: [23, 22],
      name: 'virgo',
      image: ('../assets/signos/virgo.png'),
    },
    {
      signo: 'Libra',
      meses: [9, 10],
      dias: [23, 22],
      name: 'libra',
      image: ('../assets/signos/libra.png'),
    },
    {
      signo: 'Scorpio',
      meses: [10, 11],
      dias: [23, 21],
      name: 'scorpio',
      image: ('../assets/signos/scorpio.png'),
    },
    {
      signo: 'Sagittarius',
      meses: [11, 12],
      dias: [22, 21],
      name: 'sagittarius',
      image: ('../assets/signos/sagittarius.png'),
    },
    {
      signo: 'Capricornus',
      meses: [12, 12],
      dias: [19, 31],
      name: 'capricornus',
      image: ('../assets/signos/capricornus.png'),
    },
    {
      signo: 'Capricornus',
      meses: [1, 1],
      dias: [1, 19],
      name: 'capricornus',
      image: ('../assets/signos/capricornus.png'),
    },
  ];
};

const getSigno = (dt) => {
  const dataNascimento = moment(dt);
  console.log('signo', dataNascimento);
  for (const o of SIGNOS()) {
    let dia = (dataNascimento.month() + 1) * 100 + dataNascimento.date();
    if (
      dia >= o['meses'][0] * 100 + o['dias'][0] &&
      dia <= o['meses'][1] * 100 + o['dias'][1]
    ) {
      return o;
    }
  }
};

const retira_acentos = (str) => {
  let com_acento =
    'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ';

  let sem_acento =
    'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr';
  let novastr = '';
  for (let i = 0; i < str.length; i++) {
    let troca = false;
    for (let a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr;
};

const sanitize = (nome) => {
  return retira_acentos(nome.trim().toLowerCase().replace(/\s+/gim, ' '));
};

const consultaWiki = async (nome) => {
  return await wiki({apiUrl: 'https://en.wikipedia.org/w/api.php'})
    .find(nome)
    .then(async (page) => {
      
      let info= await page.info();
      //console.log(info);
      let image= await page.mainImage();
      let url= page.url();

      return {
        name:info.fullName || info.name || info.birthName || info.fullname, 
        birthDate:info.birthDate, 
        age:info.age,
        caption:info.caption, 
        image,
        url
      }

    })
    .catch((e) => JSON.stringify(e));
};

export const pesquisa = async (_nome) => {
  const nome = sanitize(_nome);
  console.log("pesquisa", nome);
  let resp = await consultaWiki(nome);

  try {
    var signo = undefined;
    if (resp.birthDate?.date) {
      signo = getSigno(new Date(resp.birthDate?.date));
    }
    return { ...resp, signo };
  } catch (error) {
    return { error: error.message };
  }
};

export const sugestao = async (_nome) => {
  const nome = sanitize(_nome);
  const list = await wiki({apiUrl: 'https://en.wikipedia.org/w/api.php' })
    .search(`${nome}`, 30, true);
  return list.results;
};

