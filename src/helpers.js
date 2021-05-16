import setProgress from './utils';
import briefcasePng from './img/briefcase.png';
import mortarboardPng from './img/mortarboard.png';
import pieChartPng from './img/pie-chart.png';
import smilePng from './img/smile.png';
import tonguePng from './img/tongue.png';
import writingPng from './img/writing.png';

const addPng = () => {
  const ids = [
    { id: 'smile', src: smilePng },
    { id: 'briefcase', src: briefcasePng },
    { id: 'mortarboard', src: mortarboardPng },
    { id: 'writing', src: writingPng },
    { id: 'tongue', src: tonguePng },
    { id: 'pieChart', src: pieChartPng },
  ];
  ids.forEach(({ id, src }) => {
    const imgEl = document.getElementById(id);
    imgEl.setAttribute('src', src);
  });
};

const addPersonInfo = (el, t) => {
  const personData = [
    { birthday: '05/04/1992' },
    { nationality: null },
    { address: 'Bielsko-Biała, ul. Podchorążych 13' },
    { phone: '+48799817851' },
    { email: 'denbbielsko@gmail.com' },
  ];
  el.fullName.textContent = t('personal.fullName');
  el.personInfo.innerHTML = personData.map((data) => {
    const [key, value] = Object.entries(data).flat();
    const title = t(`personal.titles.${key}`);
    const info = value || t(`personal.info.${key}`);
    return `<li class="list-group-item p-1"><b>${title}</b>: ${info}</li>`;
  }).join('');
};

const addProfileInfo = (el, t) => {
  el.profileMainTitle.textContent = t('profile.title');
  el.profileInfo.textContent = t('profile.description');
};

const addWorkExpInfo = (el, t) => {
  const workTitles = ['upholsterer', 'manager'];
  el.workMainTitle.textContent = t('work.title');
  el.workExp.innerHTML = workTitles.map((workTitle) => {
    const title = t(`work.experience.${workTitle}.title`);
    const responsibilities = t(`work.experience.${workTitle}.responsibilities`, { returnObjects: true });
    const date = t(`work.experience.${workTitle}.date`);
    const localisation = t(`work.experience.${workTitle}.localisation`);

    const titleEl = `<span class="font-weight-bold d-block">${title}</span>`;
    const responsibilitiesEl = `<ul>${responsibilities.map((value) => `<li>${value}</li>`).join('')}</ul>`;
    const extraInfo = `<span class="text-muted d-block">${date} | ${localisation}</span>`;

    return [
      '<div class="mb-3">',
      extraInfo,
      titleEl,
      responsibilitiesEl,
      '</div>',
    ].join('');
  }).join('');
};

const addEducationInfo = (el, t) => {
  const places = ['academy', 'courses', 'school'];
  el.educationMainTitle.textContent = t('education.title');
  el.educationContainer.innerHTML = places.map((place) => {
    const name = t(`education.palces.${place}.name`);
    const date = t(`education.palces.${place}.date`);
    const description = t(`education.palces.${place}.description`);

    const titleEl = `<span class="font-weight-bold d-block">${name}</span>`;
    const descriptionEl = description && `<p>${description}</p>`;
    const extraInfo = `<span class="text-muted d-block">${date}</span>`;

    return [
      '<div class="mb-3">',
      extraInfo,
      titleEl,
      descriptionEl,
      '</div>',
    ].join('');
  }).join('');
};

const addSkillsInfo = (el, t) => {
  const skills = [
    { name: 'JavaScript & Node.js', progress: 75, inProccess: true },
    { name: 'HTML & CSS', progress: 70 },
    { name: 'GIT & GITHUB', progress: 60, inProccess: true },
    { name: 'Python', progress: 30, inProccess: true },
    { name: 'C#', progress: 15 },
    { name: 'Unix', progress: 50, inProccess: true },
    { name: 'Regular Expressions', progress: 70, inProccess: true },
    { name: 'React', progress: 50 },
    { name: 'Redux', progress: 50 },
    { name: 'Pug', progress: 70 },
    { name: 'Express', progress: 70 },
    { name: 'SQL', progress: 70, inProccess: true },
  ];
  el.skillsMainTitle.textContent = t('skills.title');
  el.skillsContainer.innerHTML = skills.map(({ name, progress, inProccess = false }) => {
    const progressHTML = setProgress(progress, inProccess);
    return `<div class="mb-2"><h3 class="h6">${name}</h3>${progressHTML}</div>`;
  }).join('');
};

const addLanguagesInfo = (el, t) => {
  const languages = ['en', 'pl', 'ru', 'ua'];
  el.languagesMainTitle.textContent = t('languages.title');
  el.languagesContainer.innerHTML = languages.map((lng) => {
    const language = t(`languages.${lng}.name`);
    const languageLvl = t(`languages.${lng}.lvl`);
    return `<span class="d-block m-2"><b>${language}</b> &#8212 ${languageLvl}</span>`;
  }).join('');
};

const addAchievements = (el, t) => {
  const achievementNames = ['speed', 'consistency', 'attention'];
  el.achievementsMainTitle.textContent = t('traits.title');
  achievementNames.forEach((key) => {
    const achievementEl = document.getElementById(key);
    const achievementName = t(`traits.${key}`);
    achievementEl.textContent = achievementName;
  });
};

export default (el, t) => {
  addPng();
  addPersonInfo(el, t);
  addProfileInfo(el, t);
  addWorkExpInfo(el, t);
  addEducationInfo(el, t);
  addSkillsInfo(el, t);
  addLanguagesInfo(el, t);
  addAchievements(el, t);
};
